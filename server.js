// server.js
const http = require('http'); // Importa o módulo HTTP nativo do Node.js
const fs = require('fs');     // Importa o módulo File System para trabalhar com arquivos
const path = require('path');   // Importa o módulo Path para lidar com caminhos de arquivo

const PORT = process.env.PORT || 3000; // Define a porta do servidor, usando a variável de ambiente PORT se disponível, senão 3000

// Cria o servidor HTTP
const server = http.createServer((req, res) => {
    // Determina o caminho do arquivo solicitado.
    // Se a URL for '/', serve Trabalho.html. Caso contrário, serve o arquivo correspondente.
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './Trabalho.html'; // Se a requisição for para a raiz, serve o Trabalho.html
    }

    // Determina o tipo de conteúdo (MIME type) com base na extensão do arquivo
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    let contentType = mimeTypes[extname] || 'application/octet-stream'; // Tipo padrão se não for reconhecido

    // Lê o arquivo do sistema de arquivos
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                // Se o arquivo não for encontrado (Error No Entry)
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                // Outro erro de servidor
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
            }
        } else {
            // Se o arquivo for encontrado com sucesso
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Faz o servidor escutar na porta definida
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
    console.log('Acesse seu site pelo link que o Codespaces vai gerar.');
});

