from django.contrib import admin

from .models import Category, SubCategory, ShopItem


class ShopItemAdmin(admin.ModelAdmin):
    list_display = ["title", "in_stock", "price", "featured"]
    list_editable = ["in_stock", "price", "featured"]


admin.site.register(Category)
admin.site.register(SubCategory)
admin.site.register(ShopItem, ShopItemAdmin)