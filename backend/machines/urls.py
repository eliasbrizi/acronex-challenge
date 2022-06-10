from django.urls import path
from machines import views

urlpatterns = [
    path('api/machines', views.machine_list),
    # path(r'^api/machines/(?P<pk>[0-9]+)$', views.machine_detail),
]
