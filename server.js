// server.js

// Importa o módulo HTTP nativo do Node.js para criar um servidor web.
const http = require('http');
// Importa o módulo File System (fs) para trabalhar com arquivos no sistema de arquivos do servidor.
const fs = require('fs');
// Importa o módulo Path para lidar com caminhos de arquivo e diretório de forma consistente.
const path = require('path');

// Define a porta do servidor. Tenta usar a variável de ambiente PORT (comum em ambientes de hospedagem),
// caso contrário, usa a porta 3000 por padrão.
const PORT = process.env.PORT || 3000;

// Cria o servidor HTTP. A função de callback é executada para cada requisição recebida.
// 'req' (request) é o objeto da requisição do cliente.
// 'res' (response) é o objeto de resposta que o servidor enviará de volta ao cliente.
const server = http.createServer((req, res) => {
    // Determina o caminho do arquivo solicitado com base na URL da requisição.
    // Adiciona '.' ao início para criar um caminho relativo ao diretório atual do servidor.
    let filePath = '.' + req.url;

    // Se a requisição for para a raiz ('/'), serve o arquivo 'Trabalho.html'.
    if (filePath === './') {
        filePath = './Trabalho.html';
    }

    // Determina a extensão do arquivo em minúsculas para encontrar o tipo de conteúdo (MIME type).
    const extname = String(path.extname(filePath)).toLowerCase();

    // Objeto que mapeia extensões de arquivo para seus respectivos tipos de conteúdo (MIME types).
    // Isso informa ao navegador como interpretar o arquivo.
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

    // Obtém o tipo de conteúdo com base na extensão. Se a extensão não for reconhecida,
    // o tipo padrão é 'application/octet-stream', o que geralmente resulta em download.
    let contentType = mimeTypes[extname] || 'application/octet-stream';

    // Lê o arquivo do sistema de arquivos de forma assíncrona.
    // O callback é executado quando a leitura é concluída ou ocorre um erro.
    fs.readFile(filePath, (error, content) => {
        if (error) {
            // Se houver um erro ao ler o arquivo:
            if (error.code == 'ENOENT') {
                // Se o erro for 'ENOENT' (Error No Entry), o arquivo não foi encontrado (404).
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                // Para qualquer outro erro do servidor (ex: permissões, disco cheio), retorna 500.
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
            }
        } else {
            // Se o arquivo for encontrado e lido com sucesso:
            // Define o cabeçalho da resposta com o status 200 (OK) e o tipo de conteúdo correto.
            res.writeHead(200, { 'Content-Type': contentType });
            // Envia o conteúdo do arquivo como corpo da resposta.
            res.end(content, 'utf-8');
        }
    });
});

// Faz o servidor começar a escutar as requisições na porta definida.
// O callback é executado uma vez quando o servidor está pronto para aceitar conexões.
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
    console.log('Acesse seu site pelo link que o Codespaces vai gerar.');
});
