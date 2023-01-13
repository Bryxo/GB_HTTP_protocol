const http = require("http");
const fs = require ("fs");

const host = 'localhost';
const port = 8000;

const user = {
   id: 123,
   username: 'testuser',
   password: '123'
   };

// const requestListener = (req, res) => {
//    res.writeHead(200);  //статус ответа
//    res.end('Hello! It’s my first server'); //тело ответа
//    };
const requestListener = (req, res) => {
         if (req.url === '/geekbrains') {
            if (req.method === 'GET') {
               res.writeHead(200);
               res.end('success');
               console.log("\nCurrent directory filenames:");
               fs.readdir('geekbrains', (err, files) => {
                  if (!err) {
                     res.end(files.join(", "));
                     return }
                  else  {
                     res.writeHead(500);
                     res.end('Internal server error');
                  };
               });
            }
            else {
               res.writeHead(405);
               res.end('HTTP method not allowed');
               return
            }
         }

         else if (req.url === '/delete') {
            if (req.method === 'DELETE') {
               res.writeHead(200);
               res.end('success');
            }
            else {
               res.writeHead(405);
               res.end('HTTP method not allowed');
            }
         }

         else if (req.url === '/post') {
            if (req.method === 'POST') {
               res.writeHead(200);
               res.end('success');
            }
            else {
               res.writeHead(405);
               res.end('HTTP method not allowed');
            }
         }

         else if (req.url === '/redirect') {
            if (req.method === 'GET') {
               res.writeHead(302);
               res.end('location.href = "/redirected"');
            }
            else {
               res.writeHead(405);
               res.end('HTTP method not allowed');
            }
         }

         else if (req.url === '/auth') {
            if (req.method === 'POST') {
               res.setHeader('Set-Cookie', ['path=/','Content-Type=application/json', 'charset=utf-8','username=testuser', 'password=123', 'MAX_AGE=86400']);
               res.writeHead(200);
               res.end('success auth');
                  if 
                  (document.getElementById('user_login').value == user.username 
                  && 
                  document.getElementById('user_password').value == user.password) {
                     user['id']=user.id;
                     res.authorization = true;
                  }
            }
            else {
               res.writeHead(405);
               res.end('HTTP method not allowed');
            }
         }

      else {
      res.writeHead(404);
      res.end('not found found');
      }
   };

const server = http.createServer(requestListener);
server.listen(port, host, () => {
   console.log(`Server is running on http://${host}:${port}`);
});



