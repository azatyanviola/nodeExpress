'use strict';

import express from "express";

const app = express();
const port = 3000;


//** Join my todoes project in server


// app.use((req, res, next) => {
//     console.log(req.url);
//     next();
// })

// app.use(express.static('todoes'));

// app.get('/', (req, res) => {
//     res.redirect('/index.html');
//  });


// app.get('/hello', (req, res) => {
//    res.send('Hello Worid!');
// });

// app.get('/json', (req, res) => {
//     res.send({
//         name: 'Jane'
//     })
// });


// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });


//*Using middleware 


// app.use((req, res, next) => {
     
//     let now = new Date();
//     let hour = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let data = `${hour}:${minutes}:${seconds} ${req.method} ${req.url} ${req.get('user-agent')}`;
//     console.log(data);
//     fs.appendFile("server.log", data + "\n", function(){});
//     next();
// });
 
// app.get("/", (req, res) => {
//     res.send("Hello");
// });
// app.listen(port);


//************* */
// app.get("/", (req, res) => {
      
//     res.send("<h1>The main page</h1>");
// });
// app.use("/about", (req, res) => {
      
//     let id = req.query.id;
//     let userName = req.query.name;
//     res.send('<h1>The information</h1> <p> id=' + id +'</p><p>name=' + userName + '</p>');
// });
 
// app.listen(port);



//*How to add Registration form data in server
const urlencodedParser = express.urlencoded({extended: false});

app.use(express.static('form'));
  
app.get('/', (request, respons, next) => {
         res.redirect('/index.html');
         next();
  });
app.post("/", urlencodedParser, function (request, response, next) {

    console.log(request.body);
    response.send(request.body);
    next();
});
   
app.listen(port, ()=>console.log('Server started...'));