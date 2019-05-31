const express = require('express');

const app = express();


  // app.use('/', function(req,res,next){
  // 
  //     res.status(200).send({text: 'Hi'});
  // 
  // });

  app.use(express.static(__dirname+ '/dist/insuredAngular'))

app.get('/*', function (req, res){
    res.sendFile(path.join(__dirname + '/dist/insuredAngular/index.html'))
}
)

app.listen(8080, function () {
    console.log('listening on port 80')
})