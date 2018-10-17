var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/', (req, res, next) => {
  var str = req.body.str.toLowerCase().split('');

  var ans = ''
  for (var i = 0; i < str.length; i++) {
    var c = 0
    for (var j = 0; j < str.length; j++) {
      if(str[i] == str[j] && i!=j){
        c++
      }
    }
    if(c==0){
      ans = str[i]
      break;
    }
  }
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(ans));
  res.end();
})

module.exports = router;
