const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

const Routes = require('./routes/routes');


app.set('view engine','ejs');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());
app.use('/', Routes);


app.get('/', (req, res) =>{
    res.send('Hello');
  });

app.listen(3000, () => {
    console.log('APP LISTENING FOR REQUESTS ON PORT 3000')
});