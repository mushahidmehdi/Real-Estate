from cgitb import lookup
import re
from django import views
from listing.models import Listing
from .serializers import ListingDetailSerializer, ListingSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from datetime import datetime, timedelta, timezone
from rest_framework import permissions


class ListingView(ListAPIView):
    serializer_class = ListingSerializer
    permission_classes = (permissions.AllowAny, )
    queryset = Listing.objects.order_by('-list_date').filter(is_publish=True)
    lookup_field = 'slug'


class ListingDetialView(RetrieveAPIView):
    queryset = Listing.objects.order_by('-list_date').filter(is_publish=True)
    serializer_class = ListingDetailSerializer
    lookup_field = 'slug'


class ListingSearchView(APIView):
    serializer_class = ListingSerializer
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        queryset = Listing.objects.order_by(
            '-list_date').filter(is_publish=True)
        data = request.data

        bedrooms = data['bedrooms']
        if bedrooms == '1+':
            bedrooms = 1
        elif bedrooms == '3+':
            bedrooms = 3
        elif bedrooms == '5+':
            bedrooms = 5
        elif bedrooms == '8+':
            bedrooms = 8
        elif bedrooms == 'Any':
            bedrooms = 0

        if bedrooms != 0:
            queryset = queryset.filter(bedrooms__gte=bedrooms)

        sqft = data['sqft']
        if sqft == '30 sq+':
            sqft = 30
        elif sqft == '60sq+':
            sqft = 60
        elif sqft == '80sq+':
            sqft = 80
        elif sqft == '100sq+':
            sqft = 100
        elif sqft == '150sq+':
            sqft = 150
        elif sqft == '250sq+':
            sqft = 250
        elif sqft == '500sq+':
            sqft = 500
        elif sqft == 'Any':
            sqft = 0

        if sqft != 0:
            queryset = queryset.filter(sqft__gte=sqft)

        rent_price = data['rent_price']
        if rent_price == '₺ 400+':
            rent_price = 400
        elif rent_price == '₺ 600+':
            rent_price = 600
        elif rent_price == '₺ 800+':
            rent_price = 800
        elif rent_price == '₺ 1000+':
            rent_price = 1000
        elif rent_price == '₺ 1500+':
            rent_price = 1500
        elif rent_price == '₺ 2000+':
            rent_price = 2000
        elif rent_price == '₺ 5000+':
            rent_price = 5000
        elif rent_price == 'Any':
            rent_price = 0

        if rent_price != 0:
            queryset = queryset.filter(rent_price__gte=rent_price)

        listed_date = data['list_date']
        if listed_date == '1 veya az':
            listed_date = 1
        elif listed_date == '2 veya az':
            listed_date = 2
        elif listed_date == '7 veya less':
            listed_date = 7
        elif listed_date == '14 veya less':
            listed_date = 14
        elif listed_date == '20 veya less':
            listed_date = 20
        elif listed_date == '30 veya less':
            listed_date = 30
        elif listed_date == 'Any':
            listed_date = 0

        for query in queryset:
            days_pass = (datetime.now(timezone.utc) - query.list_date).days

            if listed_date != 0 and days_pass > listed_date:
                slug = query.slug
                queryset = queryset.exclude(slug__iexact=slug)

        serializer = ListingSerializer(queryset, many=True)
        return Response(serializer.data)
