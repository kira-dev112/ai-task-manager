import csv #для работы с csv
import psycopg2 #для подключения к базе
from dotenv import load_dotenv #для чтения .env

load_dotenv() #загружаем .env

#подключаемся к базе данных
conn = psycopg2.connect(
    host="localhost",
    database="task_manager",
    user="postgres",
    password="newpass123",
    port=5432
)

cur = conn.cursor() #создаём курсор

#берём все задачи
cur.execute("SELECT id, title, description, status, created_at FROM tasks ORDER BY id")
rows = cur.fetchall() #получаем все строки

#пишем в csv
with open("tasks_export.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(["id", "title", "description", "status", "created_at"])
    writer.writerows(rows)
cur.close() #закрываем курсор
conn.close() #закрываем соединение

print("Готово! Выгружено:", len(rows))