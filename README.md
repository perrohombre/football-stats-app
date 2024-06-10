# Aplikacja webowa do przeglądania lig piłkarskich i statystyk zawodników

## Technologie
- **Backend:** Django
- **Frontend:** React
- **Konteneryzacja:** Docker, Docker Compose

## Cel
Celem projektu jest stworzenie aplikacji webowej, która umożliwia przeglądanie lig piłkarskich oraz statystyk zawodników, takich jak liczba bramek i asyst.

## Struktura projektu

### Backend
- **Technologia:** Django
- **Opis:** Backend aplikacji jest odpowiedzialny za zarządzanie bazą danych, logiką biznesową oraz udostępnianie API dla frontendu.

### Frontend
- **Technologia:** React
- **Opis:** Frontend aplikacji jest odpowiedzialny za interfejs użytkownika oraz komunikację z backendem za pośrednictwem API.

### Konteneryzacja
- **Technologie:** Docker, Docker Compose
- **Opis:** Aplikacja jest podzielona na dwa oddzielne kontenery – jeden dla frontendu i jeden dla backendu. Docker Compose jest używany do zarządzania wieloma kontenerami.

## Instrukcja uruchomienia projektu

### Klonowanie repozytorium
- git clone https://github.com/perrohombre/football-stats-app
- cd football-stats-app

### Konfiguracja Docker Compose
Upewnij się, że masz zainstalowany Docker oraz Docker Compose.
W pliku docker-compose.yml znajdują się konfiguracje dla obu kontenerów (frontend i backend).

### Uruchomienie kontenerów
- docker-compose up --build
- Ta komenda zbuduje obrazy Docker oraz uruchomi oba kontenery. Aplikacja będzie dostępna pod adresem http://localhost:3000.


