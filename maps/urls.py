from django.urls import path
from .views import show_map, get_current_location

urlpatterns = [
    path('show_map/', show_map, name='show_map'),  
    path('get_current_location/', get_current_location, name='get_current_location'),
]
