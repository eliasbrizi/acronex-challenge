from django.urls import path
from machines import views

urlpatterns = [
    path('api/machines', views.machine_list),
    path(r'api/machines/<int:id>', views.machine_detail),
]
