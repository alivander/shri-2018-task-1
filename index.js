const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const graphqlRoutes = require('./graphql/routes');

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/graphql', graphqlRoutes);

app.listen(3000, () => console.log('Express app listening on localhost:3000'));
