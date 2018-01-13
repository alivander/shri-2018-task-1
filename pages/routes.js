const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>
  res.send(`
    <html lang="ru">
      <head>
        <title>Shri 2018</title>
        <script src="/scripts/test.js"></script>
      </head>
      <h1>Яндекс Переговорки.<br>Тестовое задание № 1</h1>
    </html>
    `)
);

module.exports = router;
