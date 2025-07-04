// Back to top button functionality
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add loading animation to buttons
document.querySelectorAll('.btn-zombie').forEach(button => {
    button.addEventListener('click', function(e) {
        if (!this.getAttribute('data-bs-toggle')) {
            e.preventDefault();
            const originalText = this.innerHTML;
            this.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        }
    });
});

// Simulate survival rate updates
setInterval(() => {
    const progressBar = document.querySelector('.progress-bar-zombie');
    const currentWidth = parseInt(progressBar.style.width);
    const newWidth = Math.max(10, Math.min(100, currentWidth + (Math.random() - 0.5) * 10));
    progressBar.style.width = newWidth + '%';
    
    const rateText = document.querySelector('.progress-zombie').nextElementSibling;
    rateText.textContent = `Survival Rate: ${Math.round(newWidth)}%`;
}, 3000);

// Add hover effects to cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0)';
    });
});

// Add glow effect to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 20px #00ff41, 0 0 30px #00ff41';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.textShadow = '0 0 10px #00ff41';
    });
});
