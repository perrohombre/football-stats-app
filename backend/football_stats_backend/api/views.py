from django.http import JsonResponse
import requests
import json
from django.conf import settings

def league_table_view(request, league_id, season):
    url = f"https://api-football-v1.p.rapidapi.com/v3/standings?league={league_id}&season={season}"
    headers = {
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        "X-RapidAPI-Key": settings.RAPIDAPI_KEY
    }
    response = requests.get(url, headers=headers)
    data = response.json()
    return JsonResponse(data)

def get_leagues_and_seasons(request):
    with open('/Users/aleksandergajowniczek/Documents/Studia/SEMESTR_VI/PAINT/football-stats-app/ids.json') as f:
        data_ids = json.load(f)

    leagues = [{"id": item["id"], "name": item["name"], "country": item["country"]} for item in data_ids]
    seasons = list(range(2000, 2024))
    return JsonResponse({"leagues": leagues, "seasons": seasons})

def top_scorers_view(request, league_id, season):
    url = f'https://v3.football.api-sports.io/players/topscorers?league={league_id}&season={season}'
    headers = {
        "x-apisports-key": settings.APISPORTS_KEY
    }
    response = requests.get(url, headers=headers)
    data = response.json()
    return JsonResponse(data)

def top_assistants_view(request, league_id, season):
    url = f'https://v3.football.api-sports.io/players/topassists?league={league_id}&season={season}'
    headers = {
        "x-apisports-key": settings.APISPORTS_KEY
    }
    response = requests.get(url, headers=headers)
    data = response.json()
    print(settings.APISPORTS_KEY)
    print(settings.RAPIDAPI_KEY)
    return JsonResponse(data)
