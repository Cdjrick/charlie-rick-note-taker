const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./Develop/routes/apiRoutes/index');
const htmlRoutes = require('./Develop/routes/htmlRoutes/index')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Develop/public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`)
})