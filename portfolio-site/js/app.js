// Portfolio Site JavaScript
class PortfolioApp {
    constructor() {
        this.currentSection = 'about';
        this.contentElement = document.getElementById('content');
        this.navButtons = document.querySelectorAll('.nav-btn');
        
        this.init();
    }

    init() {
        // Add event listeners to navigation buttons
        this.navButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.target.getAttribute('data-section');
                this.loadSection(section);
            });
        });

        // Load initial section
        this.loadSection(this.currentSection);
    }

    async loadSection(section) {
        try {
            // Update active button
            this.updateActiveButton(section);
            
            // Load markdown content
            const response = await fetch(`content/${section}.md`);
            if (!response.ok) {
                throw new Error(`Failed to load ${section}.md`);
            }
            
            const markdownContent = await response.text();
            
            // Convert markdown to HTML
            const htmlContent = marked.parse(markdownContent);
            
            // Update content with animation
            this.contentElement.style.opacity = '0';
            
            setTimeout(() => {
                this.contentElement.innerHTML = htmlContent;
                this.contentElement.style.opacity = '1';
                this.currentSection = section;
            }, 200);
            
        } catch (error) {
            console.error('Error loading section:', error);
            this.contentElement.innerHTML = `
                <div class="card">
                    <h2>Error Loading Content</h2>
                    <p>Sorry, there was an error loading the ${section} section. Please try again later.</p>
                </div>
            `;
        }
    }

    updateActiveButton(section) {
        this.navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-section') === section) {
                btn.classList.add('active');
            }
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Add some fun interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add glitch effect to logo on hover
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.animation = 'glitch 0.3s ease-in-out';
        });
        
        logo.addEventListener('animationend', () => {
            logo.style.animation = '';
        });
    }
});

// Add glitch animation
const style = document.createElement('style');
style.textContent = `
    @keyframes glitch {
        0% { transform: rotate(-2deg) translate(0, 0); }
        20% { transform: rotate(-2deg) translate(-2px, 2px); }
        40% { transform: rotate(-2deg) translate(-2px, -2px); }
        60% { transform: rotate(-2deg) translate(2px, 2px); }
        80% { transform: rotate(-2deg) translate(2px, -2px); }
        100% { transform: rotate(-2deg) translate(0, 0); }
    }
`;
document.head.appendChild(style);