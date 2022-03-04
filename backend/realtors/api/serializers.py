from rest_framework import serializers
from realtors.models import Realtors


class RealtorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Realtors
        fields = '__all__'
