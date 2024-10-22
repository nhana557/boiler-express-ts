start: 
	NODE_ENV="production" ./manage.sh start

stop: 
	NODE_ENV="production" ./manage.sh stop

dependencies-up: 
	docker compose up --scale api=0

dependencies-down: 
	docker compose down postgres redis rabbitmq

migrate: 
	npx graphile-migrate run ./migrations/up.sql

migrate-down:
	npx graphile-migrate run ./migrations/down.sql

server-dev:
	npm run dev

server:
	 npm run build && npm run start

.PHONEY: migrate migrate-down chmod +x manage.sh