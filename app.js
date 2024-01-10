const express = require('express'); 
const app = express();  

const hbs = require('hbs');
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('login');
});

//params
//query

//http://localhost:3000/login/Ivana/123 this is link for params
//http://localhost:3000/login?username=Ivana&password=123 this is link for query
app.get('/login', (req, res) => {
    //params long way
    //const username = req.params.username;
    //const password = req.params.password;

    //params short way or we can write it together and make it shorter
    //const { username, password } = req.params;


    //query long way
    //const username = req.query.username;
    //const password = req.query.password;

    //query short way
    const { username, password } = req.query;

    console.log(username);
    console.log(password);

  /*setup for params
    if (userName === 'Ivana' && password === '123') {
        res.send('Login successful');
    } else {
        res.send('Login failed');
    }
});*/

//setup for query
if (username === 'Ivana' && password === '123') {
    res.render('index.hbs');
}   else {
    res.send('Login failed');
} 
});

app.listen(3000, () => console.log('Server running on port 3000')); 
