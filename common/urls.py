from django.urls import path

from .views import SiteInfoView

urlpatterns = [
    path("siteinfo/", SiteInfoView.as_view())
]