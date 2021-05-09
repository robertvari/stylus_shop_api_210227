from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from utilities.fake_database import get_database


class SiteInfoView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response(get_database()["site_info"])