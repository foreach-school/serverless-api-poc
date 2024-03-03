FROM postgres

COPY migrations/init-database.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_DB radar_medico_local

EXPOSE 5432