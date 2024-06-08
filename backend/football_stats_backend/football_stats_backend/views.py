from django.shortcuts import render, redirect
from django.http import HttpResponse

def home(request):
    # Przekierowanie do głównej strony Reacta, która może być serwowana osobno
    return redirect('http://localhost:3000/')

def league_table_view(request):
    # Przekierowanie do strony tabeli ligowej w aplikacji React
    return redirect('http://localhost:3000/table/')
