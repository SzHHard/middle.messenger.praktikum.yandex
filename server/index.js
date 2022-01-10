const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static(__dirname + '/../build'));

app.get('/*', (req, res, next) => {
    console.log( process.cwd() + '/build/index.html')
    res.sendFile(process.cwd() + '/build/index.html')
})

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
})