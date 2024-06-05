# football_stats_backend/urls.py
from django.contrib import admin
from django.urls import path, include
from .views import home
from api.views import league_table_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', home, name='home'),
    path('table/', league_table_view, name='league_table_view'),
]
