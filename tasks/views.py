from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.

class TaskViewSet(viewsets.ModelViewSet):
   queryset = Task.objects.all()
   serializer_class = TaskSerializer

