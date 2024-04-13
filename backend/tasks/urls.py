from . import views
from django.urls import path

urlpatterns = [
    path('api/v1/auth/login', views.welcome, name="login"),
]
