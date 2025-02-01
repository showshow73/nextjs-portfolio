export function initBackgroundAnimation() {
    if (typeof window !== "undefined") {
      function createCircle() {
        const circleEl = document.createElement('div');
        circleEl.classList.add('circle');
        circleEl.style.top = Math.random() * window.innerHeight + "px";
        circleEl.style.left = Math.random() * window.innerWidth + "px";
        document.body.appendChild(circleEl);
  
        setTimeout(() => {
          circleEl.remove();
        }, 3000);
      }
  
      setInterval(createCircle, 1000);
  
      // SOCIAL PANEL JS
      const floatingBtn = document.querySelector('.floating-btn');
      const closeBtn = document.querySelector('.close-btn');
      const socialPanelContainer = document.querySelector('.social-panel-container');
  
      if (floatingBtn && closeBtn && socialPanelContainer) {
        floatingBtn.addEventListener('click', () => {
          socialPanelContainer.classList.toggle('visible');
        });
  
        closeBtn.addEventListener('click', () => {
          socialPanelContainer.classList.remove('visible');
        });
      }
    }
  }
  