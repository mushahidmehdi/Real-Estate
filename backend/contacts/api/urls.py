from django.urls import path
from .view import ContactView

urlpatterns = [
    path('', ContactView.as_view())
]
