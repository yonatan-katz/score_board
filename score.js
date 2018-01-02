var express = require('express');
var score_context = require("./js/score_context.js")
var repeate_helper = require('handlebars-helper-repeat');

var app = express();
app.use(express.static(__dirname + '/public'));
// set up handlebars view engine

var handlebars = require('express3-handlebars')
 .create({ defaultLayout:'main', 
     helpers: {
     repeate :  function(n, block) {
        var accum = '';
        for(var i = 0; i < n; ++i)
            accum += block.fn(i);
        return accum;
    },
    for : function(from, to, incr, block) {
        var accum = '';
        for(var i = from; i < to; i += incr)
        accum += block.fn(i);
        return accum;
    },
    float_num : function(num,block) {
        if (typeof num == 'number')
        {
            return num.toPrecision(3);
        }
        else
        {
            return num;
        }
    }
    
}}); 
 


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
        
app.get('/', function(req, res) {
 res.render('home',{context : score_context.score_context()});
});

app.get('/helper', function (req, res, next) {
    res.render('helper', {
        title: 'Using Helpers',
        helpers: {
            times: function (n, block) {
               var accum = '';
               for(var i = 0; i < n; ++i)
                    accum += block.fn(i);
               return accum;
            }
        }        
    }
    );
});

        
// custom 404 page
app.use(function(req, res){
 res.type('text/plain');
 res.status(404);
 res.send('404 - Not Found');
});      
        
// custom 500 page
app.use(function(err, req, res, next){
 console.error(err.stack);
 res.type('text/plain');
 res.status(500);
 res.send('500 - Server Error');
});
app.listen(app.get('port'), function(){
 console.log( 'Express started on http://localhost:' +
 app.get('port') + '; press Ctrl-C to terminate.' );
});