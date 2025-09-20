// Animação de Fade In ao carregar
window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  container.style.opacity = 0;
  container.style.transform = 'scale(0.95)';
  
  setTimeout(() => {
    container.style.transition = 'all 0.6s ease';
    container.style.opacity = 1;
    container.style.transform = 'scale(1)';
  }, 100);
});

// Efeito Pulse ao clicar nas redes sociais
const socialLinks = document.querySelectorAll('#social-links a');

socialLinks.forEach(link => {
  link.addEventListener('click', () => {
    link.style.animation = 'pulse 0.6s ease-in-out';
    setTimeout(() => {
      link.style.animation = '';
    }, 600);
  });
});

// Opção de abrir links em nova aba já inclusa via target="_blank" no HTML
