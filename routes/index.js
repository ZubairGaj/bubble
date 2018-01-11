var express = require('express');
var router = express.Router();
var todoCard = require('../model/content')

/* GET home page. */
router.get('/', function(req, res, next) {  
  todoCard.find(function(err, content) {
    console.log(content)
    res.render('index', { title: 'Node Project', content: content });
  });
});
 
router.post('/addCard', function(req, res, next) {
  // var todo = new card({ name: 'Zildjian' });
  // kitty.save(function (err) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('meow');
  //   }
  // });
  console.log(req.body)
  var databaseFields = {
    title: "Anon.io",
    clickThroughUrl: "www.test.com",
    description: "Look at the trello board",
    type: "Programming",
    notes: "Update the trello board with features and bugs you find",
    category: "PersonalProjects",
    priority: "Medium",
    addedBy: "Zubair"
  }
  todoCard.create(databaseFields, function (err) {
    if(err){throw err}
    // saved!
    res.render('index', { title: 'Node Project' });
  })
});

module.exports = router;
