from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status
from django.db import transaction


from .models import ShopItem, Category, SubCategory, Order, OrderItems
from users.models import StylusUser


class ShopItemsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, slug=None):
        item_list = ShopItem.objects.all()

        if slug:
            result = ShopItem.objects.filter(slug=slug)
            if result:
                return Response(self._serialized(result)[0])
            return Response("Item not found", status.HTTP_404_NOT_FOUND)

        return Response(self._serialized(item_list))

    def _serialized(self, items):
        site_url = self.request.build_absolute_uri("/")[:-1]

        return [
            {
                "id": i.id,
                "category": i.category.title,
                "subcategory": i.subcategory.title if i.subcategory else None,
                "title": i.title,
                "price": i.price,
                "image": f"{site_url}{i.image1.url}",
                "description": i.description,
                "slug": i.slug
            } for i in items
        ]


class CategoryView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        categories = Category.objects.all()

        def get_subcategories(item):
            result = [i.title for i in item.subcategory.all()]
            if result:
                return result
            return None

        site_url = self.request.build_absolute_uri("/")[:-1]

        result = []
        for item in categories:
            result.append({
                "id": item.id,
                "title": item.title,
                "image": f"{site_url}{item.image.url}",
                "items": get_subcategories(item)
            })

        return Response(result)


class SliderView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        items = ShopItem.objects.filter(featured=True)
        site_url = self.request.build_absolute_uri("/")[:-1]

        result = []
        for i in items:
            result.append({
                "id": i.id,
                "image": f"{site_url}{i.image1.url}",
                "slug": i.slug
            })

        return Response(result)


class AnalogCamerasView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        items = ShopItem.objects.filter(subcategory__title="Analog")

        site_url = self.request.build_absolute_uri("/")[:-1]

        result = []
        for i in items:
            result.append({
                "id": i.id,
                "image": f"{site_url}{i.image1.url}",
                "title": i.title,
                "price": i.price,
                "slug": i.slug
            })

        return Response(result)


class FeaturedCamerasView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        items = ShopItem.objects.filter(featured=True)

        site_url = self.request.build_absolute_uri("/")[:-1]

        result = []
        for i in items:
            result.append({
                "id": i.id,
                "image": f"{site_url}{i.image1.url}",
                "title": i.title,
                "price": i.price,
                "slug": i.slug
            })

        return Response(result)


class OrderView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        payment_id = request.data.get("payment_id")
        amount = request.data.get("amount")

        # todo send payment intent to Stripe

        self._save_order()

        payment_intend = {
            "status": "succeeded"
        }

        return Response(payment_intend)

    def _save_order(self):
        shopping_list = self.request.data.get("shopping_list")
        customer = self.request.data.get("customer")

        order_items = []

        for item in shopping_list:
            item_id = item["id"]
            quantity = item["quantity"]

            with transaction.atomic():
                shop_item = ShopItem.objects.select_for_update().get(id=item_id)
                shop_item.in_stock -= quantity
                shop_item.save()

            order_item = OrderItems.objects.create(
                item=shop_item,
                quantity=quantity
            )

            order_items.append(order_item)

        user = None
        if customer.get("user_id"):
            user = StylusUser.objects.get(id=customer.get("user_id"))

        order = Order.objects.create(
            user=user,
            email=customer.get("email"),
            first_name=customer.get("first_name"),
            last_name=customer.get("last_name"),
            company=customer.get("company"),
            address=customer.get("address"),
            apartment=customer.get("apartment"),
            city=customer.get("city"),
            post_code=customer.get("post_code"),
            phone=customer.get("phone")
        )

        order.items.set(order_items)
        order.save()