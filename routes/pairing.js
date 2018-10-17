var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/', (req, res, next) => {
  console.log(req.sessionID);
  var arr = req.body.arr;
  console.log(typeof arr);
  var c = 0
  var counts = {};
arr.forEach(function(x) {
  counts[x] = (counts[x] || 0)+1;
  if(counts[x]%2 == 0){
    c++
  }
});
// for (var i = 0; i < arr.length; i++) {
//   counts[arr[i]] = (counts[arr[i]] || 0)+1;
//   if(counts[arr[i]]%2 == 0){
//     c++
//   }
// }

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(c));
  res.end();
})

module.exports = router;
