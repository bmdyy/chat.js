const MongoClient = require('mongodb').MongoClient;
const db_url = "mongodb://localhost:27017/";

const express = require('express');
const app = new express();
const port = 3000;

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    console.log('[*] GET /');
    MongoClient.connect(db_url, { useNewUrlParser:true, useUnifiedTopology:true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("chatjs");
        dbo.collection("messages").aggregate([
            { 
                $lookup: 
                {
                    from: 'users', 
                    localField: 'author', 
                    foreignField: '_id', 
                    as: 'author'
                }
            }
        ]).toArray(function(err, result) {
            if (err) throw err;
            res.render('pages/index', {messages: result});
            db.close();
        });
    });
});

const server = app.listen(port, function() {
    console.log('[+] Chat.JS is running on :' + port);
});