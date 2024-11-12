# Web Application for Viewing Football Leagues and Player Statistics

## Technologies
- **Backend:** Django
- **Frontend:** React
- **Containerization:** Docker, Docker Compose

## Purpose
The purpose of this project is to create a web application that allows users to view football leagues and player statistics, such as the number of goals and assists.

## Project Structure

### Backend
- **Technology:** Django
- **Description:** The backend of the application is responsible for managing the database, business logic, and providing the API for the frontend.

### Frontend
- **Technology:** React
- **Description:** The frontend of the application is responsible for the user interface and communicating with the backend via the API.

### Containerization
- **Technologies:** Docker, Docker Compose
- **Description:** The application is divided into two separate containers – one for the frontend and one for the backend. Docker Compose is used to manage multiple containers.

## Project Setup Instructions

### Cloning the Repository
- git clone https://github.com/perrohombre/football-stats-app
- cd football-stats-app

### Docker Compose Configuration
Ensure that Docker and Docker Compose are installed.
The docker-compose.yml file contains configurations for both containers (frontend and backend).

### Starting the Containers
- docker-compose up --build
- This command will build the Docker images and start both containers. The application will be available at http://localhost:3000.

## Note
This is a project for university studies.
