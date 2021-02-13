from django.contrib import admin
from django.urls import path, include
from student.views import index, group_detail_view, student_detail_view 


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('group/<int:id>', group_detail_view),
    path('student/<int:id>', student_detail_view),
    path('api/', include('student.api.urls')),
]
