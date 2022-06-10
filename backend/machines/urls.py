from django.conf.urls import url
from machines import views

urlpatterns = [
    url(r'^api/machines$', views.machine_list),
    url(r'^api/machines/(?P<pk>[0-9]+)$', views.machine_detail),
]
