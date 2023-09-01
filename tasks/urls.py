from django.urls import path, include
from rest_framework import routers
from tasks import views

#Api versioning
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskViewSet, 'tasks')

#GET POST PUT DELETE
urlpatterns = [

    path('api/v1/', include(router.urls) )
]


