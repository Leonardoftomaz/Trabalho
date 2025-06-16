// script.js

// Garante que o script só seja executado depois que todo o HTML for carregado e analisado.
document.addEventListener('DOMContentLoaded', () => {

    // Funcionalidade do Menu Mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Verifica se os elementos do menu mobile existem antes de adicionar event listeners
    if (mobileMenuButton && mobileMenu) {
        // Adiciona um event listener para alternar a visibilidade do menu mobile
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden'); // Alterna a classe 'hidden' do Tailwind CSS
        });

        // Seleciona todos os links dentro do menu mobile
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        // Adiciona um event listener para cada link para fechar o menu ao clicar
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden'); // Oculta o menu mobile
            });
        });
    }

    // Funcionalidade da Caixa de Mensagem (substituindo alert() e confirm())
    const messageBox = document.getElementById('message-box');
    const messageTitle = document.getElementById('message-title');
    const messageContent = document.getElementById('message-content');
    const messageCloseBtn = document.getElementById('message-close-btn');

    /**
     * Exibe a caixa de mensagem com o título e conteúdo fornecidos.
     * @param {string} title - O título da mensagem.
     * @param {string} content - O conteúdo da mensagem.
     */
    function showMessage(title, content) {
        messageTitle.textContent = title;       // Define o texto do título
        messageContent.textContent = content;   // Define o texto do conteúdo
        messageBox.classList.remove('hidden');  // Remove a classe 'hidden' para exibir a caixa
    }

    /**
     * Oculta a caixa de mensagem.
     */
    function hideMessageBox() {
        messageBox.classList.add('hidden'); // Adiciona a classe 'hidden' para ocultar a caixa
    }

    // Verifica se o botão de fechar da mensagem existe e adiciona o event listener
    if (messageCloseBtn) {
        messageCloseBtn.addEventListener('click', hideMessageBox);
    }

    // Funcionalidade dos Botões "Reservar" na Simulação do App
    const reserveButtons = document.querySelectorAll('.btn-reservar'); // Seleciona todos os botões com a classe 'btn-reservar'
    reserveButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Obtém o nome do item do atributo 'data-item' do botão clicado
            const itemName = event.target.dataset.item;
            // Exibe a mensagem de reserva personalizada
            showMessage('Item Reservado!', `Você reservou com sucesso "${itemName}". Em breve entraremos em contato para combinar a retirada.`);
        });
    });

    // Funcionalidade do Botão "Publicar" na Simulação do App (rodapé)
    const publishItemBtn = document.getElementById('btn-publicar-item');
    if (publishItemBtn) {
        publishItemBtn.addEventListener('click', () => {
            // Exibe uma mensagem sobre a funcionalidade de publicação
            showMessage('Publicar Item', 'Funcionalidade de publicação de itens em desenvolvimento. Em breve você poderá anunciar suas doações aqui!');
        });
    }

    // Funcionalidade do Botão "Chat" na Simulação do App (rodapé)
    const chatBtn = document.getElementById('btn-chat');
    if (chatBtn) {
        chatBtn.addEventListener('click', () => {
            // Exibe uma mensagem sobre a funcionalidade do chat
            showMessage('Chat S0L1DÁRIO', 'O chat está disponível para você se comunicar com outros usuários e coordenar doações. Mantenha a boa vizinhança!');
        });
    }
});
