from django.urls import path
from machines import views

urlpatterns = [
    path('api/machines', views.machine_list),
    path('api/machines/<int:id>', views.machine_detail),
    path('api/machines/last/<int:id>', views.machine_last),
]
