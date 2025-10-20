// Add interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Create floating petals effect
    createFloatingPetals();
    
    // Add click effects to message card
    const messageCard = document.querySelector('.message-card');
    messageCard.addEventListener('click', function() {
        this.style.transform = 'scale(1.02)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Add hover effects to flowers and hearts
    const flowers = document.querySelectorAll('.flower');
    const hearts = document.querySelectorAll('.heart');
    
    [...flowers, ...hearts].forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.5) rotate(360deg)';
            this.style.transition = 'transform 0.5s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

function createFloatingPetals() {
    const petals = ['🌸', '🌺', '🌹', '💐', '🌷'];
    const container = document.querySelector('.container');
    
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance every interval
            const petal = document.createElement('div');
            petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];
            petal.style.position = 'absolute';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.top = '-50px';
            petal.style.fontSize = (Math.random() * 1 + 0.5) + 'rem';
            petal.style.opacity = '0.7';
            petal.style.pointerEvents = 'none';
            petal.style.zIndex = '0';
            petal.style.animation = `fallDown ${3 + Math.random() * 3}s linear forwards`;
            
            container.appendChild(petal);
            
            // Remove petal after animation
            setTimeout(() => {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, 6000);
        }
    }, 1000);
}

// Add CSS for falling petals animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fallDown {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);