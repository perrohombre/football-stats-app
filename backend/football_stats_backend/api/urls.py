# api/urls.py

from django.urls import path
from .views import league_table_view, get_leagues_and_seasons, top_scorers_view, top_assistants_view

urlpatterns = [
    path('league/<int:league_id>/season/<int:season>/', league_table_view, name='league_table_view'),
    path('get_leagues_and_seasons/', get_leagues_and_seasons, name='get_leagues_and_seasons'),
    path('league/<int:league_id>/season/<int:season>/topscorers/', top_scorers_view, name='top_scorers_view'),
    path('league/<int:league_id>/season/<int:season>/topassistants/', top_assistants_view, name='top_assistants_view'),
]
