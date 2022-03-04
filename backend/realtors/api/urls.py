from .view import RealtorListView, RealorView
from django.urls import path

urlpatterns = [
    path('', RealtorListView.as_view()),
    path('<pk>', RealorView.as_view()),
]
