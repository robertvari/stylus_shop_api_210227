from rest_framework import serializers

from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            "first_name",
            "last_name",
            "company",
            "address",
            "apartment",
            "city",
            "post_code",
            "phone"
        ]