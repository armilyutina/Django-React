from rest_framework import routers
from .views import GroupViewSet, StudentViewSet


router = routers.SimpleRouter()

router.register('group', GroupViewSet, basename = 'group')
router.register('student', StudentViewSet, basename = 'student')



urlpatterns = []

urlpatterns += router.urls 