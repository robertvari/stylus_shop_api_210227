from django.urls import path

from .views import CategoryView, SliderView, AnalogCamerasView, \
    FeaturedCamerasView, ShopItemsView

urlpatterns = [
    path("categories/", CategoryView.as_view()),
    path("image-slider/", SliderView.as_view()),
    path("analog-cameras/", AnalogCamerasView.as_view()),
    path("featured-cameras/", FeaturedCamerasView.as_view()),
    path("shop-items/", ShopItemsView.as_view()),
    path("shop-items/<item_id>/", ShopItemsView.as_view()),
]