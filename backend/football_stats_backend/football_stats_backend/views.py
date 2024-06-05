from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def league_table_view(request):
    return render(request, 'index.html')
