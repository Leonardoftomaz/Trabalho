// script.js

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // App Simulation Button Functionality (Reservation, Publish, Chat)
    const messageBox = document.getElementById('message-box');
    const messageTitle = document.getElementById('message-title');
    const messageContent = document.getElementById('message-content');
    const messageCloseBtn = document.getElementById('message-close-btn');

    function showMessage(title, content) {
        messageTitle.textContent = title;
        messageContent.textContent = content;
        messageBox.classList.remove('hidden');
    }

    function hideMessageBox() {
        messageBox.classList.add('hidden');
    }

    if (messageCloseBtn) {
        messageCloseBtn.addEventListener('click', hideMessageBox);
    }

    // Handle "Reservar" buttons
    const reserveButtons = document.querySelectorAll('.btn-reservar');
    reserveButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const itemName = event.target.dataset.item;
            showMessage('Item Reservado!', `Você reservou com sucesso "${itemName}". Em breve entraremos em contato para combinar a retirada.`);
        });
    });

    // Handle "Publicar" button
    const publishItemBtn = document.getElementById('btn-publicar-item');
    if (publishItemBtn) {
        publishItemBtn.addEventListener('click', () => {
            showMessage('Publicar Item', 'Funcionalidade de publicação de itens em desenvolvimento. Em breve você poderá anunciar suas doações aqui!');
        });
    }

    // Handle "Chat" button
    const chatBtn = document.getElementById('btn-chat');
    if (chatBtn) {
        chatBtn.addEventListener('click', () => {
            showMessage('Chat S0L1DÁRIO', 'O chat está disponível para você se comunicar com outros usuários e coordenar doações. Mantenha a boa vizinhança!');
        });
    }
});