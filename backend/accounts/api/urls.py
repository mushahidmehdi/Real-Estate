from django.urls import path
from .view import SignUpView, LoadUserView

urlpatterns = [
    path('signup/', SignUpView.as_view()),
    path('user/', LoadUserView.as_view()),
]
