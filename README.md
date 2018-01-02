# Приложение для создания и редактирования информации о встречах сотрудников

Написано для Node.js 8 и использует библиотеки:
* express
* sequelize
* graphql

## Задание
Код содержит ошибки разной степени критичности. Некоторых из них стилистические, а некоторые даже не позволят вам запустить приложение. Вам необходимо найти и исправить их.

Пункты для самопроверки:
1. Приложение должно успешно запускаться
2. Должно открываться GraphQL IDE - http://localhost:3000/graphql/
3. Все запросы на получение или изменения данных через graphql должны работать корректно. Все возможные запросы можно посмотреть в вкладке Docs в GraphQL IDE или в схеме (typeDefs.js)
4. Не должно быть лишнего кода
5. Все должно быть в едином codestyle

## Запуск
```
npm i
npm run dev
```

Для сброса данных в базе:
```
npm run reset-db
```


# Процесс работы

1. Изучаем проект: папки, файлы, package.json, краткие общие сведения о Express, Sequelize, Graphql.
2. npm i - успешно.
3. npm run dev - error.
<!-- > shri-2018@1.0.0 dev E:\github\shri-2018-task-1
> nodemon index.js

[nodemon] 1.12.5
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index.js`
E:\github\shri-2018-task-1\node_modules\sequelize\lib\sequelize.js:175
      throw new Error('Dialect needs to be explicitly supplied as of v4.0.0');
      ^

Error: Dialect needs to be explicitly supplied as of v4.0.0
    at new Sequelize (E:\github\shri-2018-task-1\node_modules\sequelize\lib\sequelize.js:175:13)
    at Object.<anonymous> (E:\github\shri-2018-task-1\models\index.js:7:19)
    at Module._compile (module.js:660:30)
    at Object.Module._extensions..js (module.js:671:10)
    at Module.load (module.js:573:32)
    at tryModuleLoad (module.js:513:12)
    at Function.Module._load (module.js:505:3)
    at Module.require (module.js:604:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (E:\github\shri-2018-task-1\graphql\resolvers\query.js:1:82)
    at Module._compile (module.js:660:30)
    at Object.Module._extensions..js (module.js:671:10)
    at Module.load (module.js:573:32)
    at tryModuleLoad (module.js:513:12)
    at Function.Module._load (module.js:505:3)
    at Module.require (module.js:604:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (E:\github\shri-2018-task-1\graphql\resolvers\index.js:3:15)
    at Module._compile (module.js:660:30)
    at Object.Module._extensions..js (module.js:671:10)
    at Module.load (module.js:573:32)
    at tryModuleLoad (module.js:513:12)
[nodemon] app crashed - waiting for file changes before starting... -->
4. Изучаем Sequelize, http://docs.sequelizejs.com/manual/installation/getting-started.html. Видим ошибку в задании параметров: null, null.
5. Вбиваем ошибку "Error: Dialect needs to be explicitly supplied as of v4.0.0" в поисковик. Убеждаемся в правильном ходе мыслей. Исправляем строку в models/index.js:
"const sequelize = new Sequelize(null, null, {...});"
на строку из документации:
"const sequelize = new Sequelize('database', 'username', 'password', {...});"
6. npm run dev - успешно.
