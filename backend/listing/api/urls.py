from django.urls import path
from .view import ListingSearchView, ListingDetialView, ListingView


urlpatterns = [
    path('', ListingView.as_view()),
    path('<slug>', ListingDetialView.as_view()),
    path('search/', ListingSearchView.as_view()),
]
