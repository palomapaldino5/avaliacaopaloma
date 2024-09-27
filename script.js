// Alternar tema claro/escuro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const theme = body.classList.contains('dark') ? 'Tema escuro ativado!' : 'Tema claro ativado!';
    alert(theme);
});

// Validação de e-mail
const emailInput = document.getElementById('email');
const emailFeedback = document.getElementById('emailFeedback');
const contactForm = document.getElementById('contactForm');

emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value;
    const isValid = /\S+@\S+\.\S+/.test(emailValue);
    emailFeedback.textContent = isValid ? 'E-mail válido!' : 'E-mail inválido!';
    emailFeedback.style.color = isValid ? 'green' : 'red';
});

// Ao enviar o formulário
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio automático do formulário para teste
    const emailValue = emailInput.value;

    if (/\S+@\S+\.\S+/.test(emailValue)) {
        alert('Formulário enviado com sucesso!');
        // Aqui você pode integrar com o serviço real de envio de e-mails, como o Formspree
    } else {
        alert('Erro: Por favor, insira um e-mail válido antes de enviar.');
    }
});

// Scroll suave para voltar ao início
const scrollToTopBtn = document.getElementById('scrollToTop');

window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    alert('Você voltou ao topo da página!');
});

// Menu hambúrguer para navegação em dispositivos móveis
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
    const isVisible = navList.classList.contains('show');
    alert(isVisible ? 'Menu aberto!' : 'Menu fechado!');
});

// Função para detectar se o menu está fechado ao clicar fora (extra de acessibilidade)
window.addEventListener('click', (event) => {
    if (!event.target.matches('#menuToggle') && navList.classList.contains('show')) {
        navList.classList.remove('show');
        alert('Menu fechado ao clicar fora!');
    }
});