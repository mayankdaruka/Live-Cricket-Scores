const cricObj = require('cric-live-json');
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

cricObj.getRecentMatches().then((matches) => {
    localStorage.setItem('matches.txt', JSON.stringify(matches));
});
app.get('/matches.txt', (req, res) => {
    res.sendFile(__dirname + '/scratch/matches.txt');
})
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});
http.listen(8080, () => {
    console.log('HTTP server started on port 8080!');
});
io.on('connection', (socket) => {
    console.log('Client connected received!');
    socket.emit('sendToClient', {hello: 'world'});
    socket.on('receivedFromClient', (data) => {
        console.log(data);
    });
});
