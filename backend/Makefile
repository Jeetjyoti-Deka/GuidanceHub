# Variables
COMPOSE_FILE=docker-compose.yml

# Start PostgreSQL container
up:
	docker-compose -f $(COMPOSE_FILE) up -d

# Stop PostgreSQL container
down:
	docker-compose -f $(COMPOSE_FILE) down

# Remove data volume
clean:
	docker-compose -f $(COMPOSE_FILE) down -v

#build server
build_server:
	@echo "Building the server binary..."
	docker-compose build backend
	@echo "Done!"