from rest_framework import viewsets

from .serializers import GroupSerializer, StudentSerializer, StudentListSerializer, GroupDetailSerializer
from ..models import Group, Student


class GroupViewSet(viewsets.ModelViewSet):

    queryset = Group.objects.all()
    serializer_class = GroupSerializer

    action_to_serializer = {
        "retrieve": GroupDetailSerializer,
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        ) 


class StudentViewSet(viewsets.ModelViewSet):

    queryset = Student.objects.all()
    serializer_class = StudentSerializer   


    action_to_serializer = {
        "list": StudentListSerializer,
    }


    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        ) 

