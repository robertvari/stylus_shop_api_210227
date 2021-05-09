from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from utilities.fake_database import get_database
from rest_framework import status


class ShopItemsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, item_id=None):
        item_list = get_database()["items"]

        if item_id:
            result = [i for i in item_list if str(i["id"]) == item_id]
            if result:
                return Response(result[0])
            return Response("Item not found", status.HTTP_404_NOT_FOUND)

        return Response(item_list)


class CategoryView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response(get_database()["categories"])


class SliderView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response(get_database()["slider"])


class AnalogCamerasView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response(get_database()["analog"])


class FeaturedCamerasView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response(get_database()["featured"])