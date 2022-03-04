from django.urls import path
from .view import SignUpView

urlpatterns = [
    path('signup/', SignUpView.as_view())
]
