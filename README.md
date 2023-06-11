Завдання 1 - бібліотека SimpleLightbox Виконуй це завдання у файлах
01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm
(посилання на CDN з твоєї минулої роботи більше не потрібне). Використовуй свій
JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з
урахуванням того, що бібліотека була встановлена через npm (синтаксис
import/export). Для того щоб підключити CSS код бібліотеки в проект, необхідно
додати ще один імпорт, крім того, що описаний в документації.

// Описаний в документації import SimpleLightbox from "simplelightbox"; //
Додатковий імпорт стилів import "simplelightbox/dist/simple-lightbox.min.css";

Завдання 2 - відеоплеєр HTML містить <iframe> з відео для Vimeo плеєра. Напиши
скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і,
після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.

<iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>

Виконуй це завдання у файлах 02-video.html і 02-video.js. Розбий його на
декілька підзавдань:

Ознайомся з документацією бібліотеки Vimeo плеєра. Додай бібліотеку як
залежність проекту через npm. Ініціалізуй плеєр у файлі скрипта як це описано в
секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет,
а не через CDN. Вивчи документацію методу on() і почни відстежувати подію
timeupdate - оновлення часу відтворення. Зберігай час відтворення у локальне
сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time". Під час
перезавантаження сторінки скористайся методом setCurrentTime() з метою
відновлення відтворення зі збереженої позиції. Додай до проекту бібліотеку
lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не
частіше, ніж раз на секунду. Завдання 3 - форма зворотного зв'язку HTML містить
розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне
сховище, коли користувач щось друкує.

<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>

Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на
декілька підзавдань:

Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з
полями email і message, у яких зберігай поточні значення полів форми. Нехай
ключем для сховища буде рядок "feedback-form-state". Під час завантаження
сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля
форми. В іншому випадку поля повинні бути порожніми. Під час сабміту форми
очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email,
message та їхніми поточними значеннями. Зроби так, щоб сховище оновлювалось не
частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй
бібліотеку lodash.throttle.

# Parcel template

Этот проект был создан при помощи Parcel. Для знакомства и настройки
дополнительных возможностей [обратись к документации](https://parceljs.org/).

## Подготовка нового проекта

1. Убедись что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Склонируй этот репозиторий.
3. Измени имя папки с `parcel-project-template` на имя своего проекта.
4. Создай новый пустой репозиторий на GitHub.
5. Открой проект в VSCode, запусти терминал и свяжи проект с GitHub-репозиторием
   [по инструкции](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Установи зависимости проекта в терминале командой `npm install` .
7. Запусти режим разработки, выполнив команду `npm start`.
8. Перейди в браузере по адресу [http://localhost:1234](http://localhost:1234).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.

## Файлы и папки

- Все паршалы файлов стилей должны лежать в папке `src/sass` и импортироваться в
  файлы стилей страниц. Например, для `index.html` файл стилей называется
  `index.scss`.
- Изображения добавляй в папку `src/images`. Сборщик оптимизирует их, но только
  при деплое продакшн версии проекта. Все это происходит в облаке, чтобы не
  нагружать твой компьютер, так как на слабых машинах это может занять много
  времени.

## Деплой

Для настройки деплоя проекта необходимо выполнить несколько дополнительных шагов
по настройке твоего репозитория. Зайди во вкладку `Settings` и в подсекции
`Actions` выбери выбери пункт `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Пролистай страницу до последней секции, в которой убедись что выбраны опции как
на следующем изображении и нажми `Save`. Без этих настроек у сборки будет
недостаточно прав для автоматизации процесса деплоя.

![GitHub actions settings](./assets/actions-config-step-2.png)

Продакшн версия проекта будет автоматически собираться и деплоиться на GitHub
Pages, в ветку `gh-pages`, каждый раз когда обновляется ветка `main`. Например,
после прямого пуша или принятого пул-реквеста. Для этого необходимо в файле
`package.json` отредактировать поле `homepage` и скрипт `build`, заменив
`your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и
выставить раздачу продакшн версии файлов из папки `/root` ветки `gh-pages`, если
это небыло сделано автоматически.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в
выпадающем окне перейти по ссылке `Details`.

![Deployment status](./assets/status.png)

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть
по адресу указанному в отредактированном свойстве `homepage`. Например, вот
ссылка на живую версию для этого репозитория
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок
связанных с неправильными путями к CSS и JS файлам проекта (**404**). Скорее
всего у тебя неправильное значение свойства `homepage` или скрипта `build` в
файле `package.json`.

## Как это работает

![How it works](./assets/how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный
   скрипт (GitHub Action) из файла `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и
   проходит сборку перед деплоем.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта
   отправляется в ветку `gh-pages`. В противном случае, в логе выполнения
   скрипта будет указано в чем проблема.
