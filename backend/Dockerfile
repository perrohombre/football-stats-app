# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Install gcc and other necessary build tools
RUN apt-get update && \
    apt-get install -y gcc musl-dev && \
    rm -rf /var/lib/apt/lists/*

# Copy the requirements file into the container
COPY backend/requirements.txt /app/backend/

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r /app/backend/requirements.txt

# Copy the rest of the application code
COPY backend/ /app/backend/
COPY frontend/ /app/frontend/

# Set environment variables for Django
ENV DJANGO_SETTINGS_MODULE=football_stats_backend.settings
ENV PYTHONUNBUFFERED=1

# Expose the port the app runs on
EXPOSE 8000

# Run the command to start Gunicorn (or Django's development server for development)
CMD ["python", "/app/backend/football_stats_backend/manage.py", "runserver", "0.0.0.0:8000"]
