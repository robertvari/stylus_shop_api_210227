from django.db import models
from django.utils.text import slugify
from django.db.models.signals import pre_save
from django.dispatch import receiver

from users.models import StylusUser


def get_category_dir_path(instance, filename):
    return f"shop/categories/{slugify(instance.title)}/{filename}"


def image_dir_path(instance, filename):
    if instance.subcategory:
        return f"shop/{slugify(instance.category.title)}/{slugify(instance.subcategory.title)}/{slugify(instance.title)}/{filename}"
    else:
        return f"shop/{slugify(instance.category.title)}/{slugify(instance.title)}/{filename}"


class Category(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to=get_category_dir_path)

    def __str__(self):
        return self.title


class SubCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="subcategory")
    title = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.category.title} / {self.title}"


class ShopItem(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="category")
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE,
                                    blank=True, null=True, related_name="subcategory")

    slug = models.SlugField(max_length=200, blank=True)

    in_stock = models.IntegerField(default=1)
    featured = models.BooleanField(default=False)

    # details
    title = models.CharField(max_length=200)
    price = models.IntegerField()
    image1 = models.ImageField(upload_to=image_dir_path)
    image2 = models.ImageField(upload_to=image_dir_path, blank=True)
    image3 = models.ImageField(upload_to=image_dir_path, blank=True)
    description = models.TextField(max_length=5000, blank=True)

    def __str__(self):
        return self.title


class OrderItems(models.Model):
    item = models.ForeignKey(ShopItem, on_delete=models.CASCADE, related_name="orders")
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.item.title}: {self.quantity}"


class Order(models.Model):
    user = models.ForeignKey(StylusUser, on_delete=models.CASCADE, related_name="orders", blank=True, null=True)
    items = models.ManyToManyField(OrderItems)

    # user data
    email = models.EmailField(max_length=200)

    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    company = models.CharField(max_length=200, blank=True)
    address = models.CharField(max_length=200)
    apartment = models.CharField(max_length=200, blank=True)
    city = models.CharField(max_length=200)
    post_code = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)

    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.email} : {self.first_name} {self.last_name}"


@receiver(pre_save, sender=ShopItem)
def slug_generator(sender, instance, **kwargs):
    if not instance.slug:
        if instance.subcategory:
            instance.slug = f"{slugify(instance.category)}-{slugify(instance.subcategory)}-{slugify(instance.title)}"
        else:
            instance.slug = f"{slugify(instance.category)}-{slugify(instance.title)}"