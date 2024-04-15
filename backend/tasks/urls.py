from . import views
from django.urls import path

urlpatterns = [
    path('api/v1/auth/login', views.welcome, name="login"),
    path('api/v1/data/all-data', views.dashboard_data, name="alldata"),
    path('api/v1/data/completed', views.fetch_completed, name="completed"),
    path('api/v1/data/assigned', views.fetch_assigned, name="assigned"),
    path('api/v1/data/inprogress', views.fetch_inprogress, name="inprogress"),
    path('api/v1/task/create', views.create_tasks, name="create"),
]
