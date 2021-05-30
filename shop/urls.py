from django.urls import path

from .views import CategoryView, SliderView, AnalogCamerasView, \
    FeaturedCamerasView, ShopItemsView, OrderView

urlpatterns = [
    path("categories/", CategoryView.as_view()),
    path("image-slider/", SliderView.as_view()),
    path("analog-cameras/", AnalogCamerasView.as_view()),
    path("featured-cameras/", FeaturedCamerasView.as_view()),
    path("shop-items/", ShopItemsView.as_view()),
    path("shop-items/<slug>/", ShopItemsView.as_view()),

    path("order/", OrderView.as_view())
]