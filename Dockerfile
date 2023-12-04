FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=mudar123
ENV MYSQL_DATABASE=estabelecimento

EXPOSE 3306

CMD ["mysqld", "--user=mysql", "--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci"]
