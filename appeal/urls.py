from django.urls import path
from .views import appeal

urlpatterns = [
    path('', appeal, 'appeal'),
]
