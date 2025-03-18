# 🚀 Тестовое задание 1  ![Static Badge](https://img.shields.io/badge/Done-93e67c?logo=checkmarx)  [![Foo](https://img.shields.io/badge/Click%20me!-black?logo=githubpages&logoSize=auto&link=https%3A%2F%2Fblurmb.github.io%2Ftest-match-tracker%2F)](https://blurmb.github.io/test-match-tracker/)


Разработать простое веб-приложение "Матч-трекер",которое:
  * Загружает список матчей с API.
  * Показывает названия команд, счет, статус матча.
  * Позволяет обновлять данные по нажатию кнопки "Обновить".
  * Отображает индикатор загрузки при запросе данных.
  * Показывает сообщение об ошибке, если API недоступно.

## 1. API-запрос
Загрузить список матчей
swagger: [link](/docs/swagger.yaml)

 * baseUrl - https://app.ftoyd.com/fronttemp-service

 * Ошибка API (если сервер недоступен) должна показывать текст "Ошибка: не удалось загрузить информацию".
## 2. UI (Figma)
Figma макет: [link](https://www.figma.com/design/W16WfB86EgqtcuuqLCYjgF/Test-assignment?node-id=113-741&t=hBEv4NU9JHRNcUKm-4)
![reference png](/docs/ref.png)

# 🚀 Тестовое задание 2 ![Static Badge](https://img.shields.io/badge/%E2%AC%9C%20-TBD-ed3939)
Допонить:
 * Обновляет данные в реальном времени (через WebSockets).
 -----
 
**Для этого нужно собрать проект с переменной окружения `FEATURE_AUTOUPDATE=true`**

 -----
 * Позволяет фильтровать события матча (например, только Live или только Finished).
 * Реализует анимацию изменения счета (например, плавное увеличение числа при обновлении).
 * Базовая адаптация экрана.

## 1. API-запрос
* Обновляет данные в реальном времени:
  * wss://app.ftoyd.com/fronttemp-service/ws
