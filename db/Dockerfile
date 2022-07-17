FROM postgres:14.1-alpine
COPY ./src/chess.sql /docker-entrypoint-initdb.d/chess.sql
COPY ./src/triggers.sql /docker-entrypoint-initdb.d/triggers.sql
CMD ["docker-entrypoint.sh", "postgres"]