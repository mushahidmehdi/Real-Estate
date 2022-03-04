from cgitb import lookup
from listing.models import Listing
from rest_framework import serializers


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('title', 'description', 'slug', 'address', 'bedrooms',
                  'bathrooms', 'sqft', 'rent_price', 'adat', 'list_date', 'main_image')


class ListingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'
