

document.addEventListener('DOMContentLoaded', () => {

  // Evento 1: 'click' - Despliegue y cierre del menú de navegación móvil
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    document.querySelectorAll('#mainNav a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  const photoCards = document.querySelectorAll('.photo-card');
  photoCards.forEach(card => {
    const img = card.querySelector('img');
    if (img) {
      card.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
      });
      card.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
      });
    }
  });

  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  const contactBox = document.getElementById('contactBox');
  const contactNum = document.getElementById('contactNum');
  if (contactBox && contactNum) {
    contactBox.addEventListener('click', () => {
      const numText = contactNum.textContent.trim();
      navigator.clipboard.writeText(numText).then(() => {
        const originalText = contactNum.textContent;
        contactNum.textContent = '¡Copiado!';
        contactBox.style.backgroundColor = '#ffe1e2';
        setTimeout(() => {
          contactNum.textContent = originalText;
          contactBox.style.backgroundColor = '#ffffff';
        }, 1800);
      });
    });
  }

  const heroPandas = document.querySelectorAll('.hero-panda');
  heroPandas.forEach(panda => {
    panda.addEventListener('dblclick', () => {
      panda.style.transform = 'scale(1.25) rotate(5deg)';
      setTimeout(() => {
        panda.style.transform = 'scale(1) rotate(0deg)';
      }, 400);
    });
  });

});