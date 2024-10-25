var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer((req, res) => {
    if (req.url.startsWith('/htmlweb/')) {
        const filePath = path.join(__dirname, req.url);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.write("404 NOT FOUND");
                res.end();
                return;
            }
            res.writeHead(200);
            res.end(data);
        });
        return; // Diğer kontrolleri atla
    }


    if (req.url === '/anasayfa') {
        console.log(req.url);
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        fs.readFile(path.join(__dirname, 'htmlweb', 'index.html'), 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.write("Sunucu Hatası! - Server Error");
                res.end();
                return;
            }
            res.write(data);
            res.end();
        });
    } else if (req.url === '/hakkimizda') {
        console.log(req.url);
        res.writeHead(200, {  // Durum kodunu 200 yapıyoruz
            'Content-Type': 'text/html; charset=utf-8'
        });
        fs.readFile(path.join(__dirname, 'htmlweb', 'about.html'), 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.write("Sunucu Hatası! - Server Error");
                res.end();
                return;
            }
            res.write(data);
            res.end();
        });
    } 
    else if (req.url === '/iletisim') {
        console.log(req.url);
        res.writeHead(200, {  // Durum kodunu 200 yapıyoruz
            'Content-Type': 'text/html; charset=utf-8'
        });
        fs.readFile(path.join(__dirname, 'htmlweb', 'comm.html'), 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.write("Sunucu Hatası! - Server Error");
                res.end();
                return;
            }
            res.write(data);
            res.end();
        });
    }
    else if (req.url === '/girisyap') {
        console.log(req.url);
        res.writeHead(200, {  // Durum kodunu 200 yapıyoruz
            'Content-Type': 'text/html; charset=utf-8'
        });
        fs.readFile(path.join(__dirname, 'htmlweb', 'login.html'), 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.write("Sunucu Hatası! - Server Error");
                res.end();
                return;
            }
            res.write(data);
            res.end();
        });
    }
    else if (req.url === '/kayitol') {
        console.log(req.url);
        res.writeHead(200, {  // Durum kodunu 200 yapıyoruz
            'Content-Type': 'text/html; charset=utf-8'
        });
        fs.readFile(path.join(__dirname, 'htmlweb', 'signin.html'), 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.write("Sunucu Hatası! - Server Error");
                res.end();
                return;
            }
            res.write(data);
            res.end();
        });
    }
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8' // İçerik türünde hata yok
        });
        res.write("404 NOT FOUND");
        res.end();
    }
});

server.listen(9985, () => {
    console.log("Sunucu başarılı bir şekilde aktifleştirilmiştir!!");
});



