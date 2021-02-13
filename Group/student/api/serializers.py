from rest_framework import serializers, viewsets

from ..models import Student, Group


class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = '__all__'


class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = '__all__'        



class GroupDetailSerializer(serializers.ModelSerializer):

    students = serializers.SerializerMethodField()

    class Meta: 
        model = Group
        fields = "__all__"

    @staticmethod
    def get_students(obj):
        return StudentSerializer(Student.objects.filter(number=obj), many = True).data




class StudentListSerializer(serializers.ModelSerializer):
    
    number = GroupSerializer()

    class Meta:
        model = Student
        fields = '__all__'
