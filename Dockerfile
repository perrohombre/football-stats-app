# Dockerfile

# Krok 1: Budowanie frontendu
FROM node:14 AS build-frontend
WORKDIR /app/frontend
COPY frontend/football-stats-frontend/package*.json ./
RUN npm install
COPY frontend/football-stats-frontend/ ./
RUN npm run build

# Krok 2: Konfiguracja backendu Django
FROM python:3.8-slim

# Instalacja Node.js i npm
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs && \
    apt-get install -y gcc build-essential

WORKDIR /app

# Kopiowanie pliku requirements.txt i instalacja zależności
COPY backend/requirements.txt /app/backend/requirements.txt
RUN pip install --upgrade pip
RUN pip install -r /app/backend/requirements.txt

# Kopiowanie zbudowanego frontendu do katalogu statycznego Django
COPY --from=build-frontend /app/frontend/build /app/static

# Kopiowanie kodu źródłowego backendu
COPY backend/ /app/backend

# Ustawienie zmiennej środowiskowej DJANGO_SETTINGS_MODULE
ENV DJANGO_SETTINGS_MODULE=football_stats_backend.settings

# Ustawienie katalogu roboczego
WORKDIR /app

# Uruchomienie serwera
CMD ["sh", "-c", "cd /app/frontend/football-stats-frontend && npm install && npm run build && cd /app/backend/football_stats_backend && python manage.py collectstatic --noinput && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]

# Otwórz port
EXPOSE 8000
