const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
var cors = require('cors')

const app = express();
app.use(cors());

  // app.use('/', function(req,res,next){
  // 
  //     res.status(200).send({text: 'Hi'});
  // 
  // });

  app.use(express.static(__dirname+ '/dist/insuredAngular'))

  var userRoute = require('./Routes/usersRoutes.js');
app.use(bodyparser.json());
app.use('/api/users', userRoute);





app.get('/*', function (req, res){
    res.sendFile(path.join(__dirname + '/dist/insuredAngular/index.html'))
}
)

app.listen(8080, function () {
    console.log('listening on port 80')
})