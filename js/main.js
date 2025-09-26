/**
 * Dr. Lilly Hanley - Biotechnologist Website
 * Main JavaScript File
 * 
 * This file implements interactive elements and animations
 * to create an immersive lab experience.
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website initialized');
    
    // Initialize components
    initNavigation();
    initLabParticles();
    initYeastSimulation();
    initMicroscopeControls();
    initResearchAnimations();
    
    // Add event listener to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            document.getElementById('lab').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});

/**
 * Initialize navigation behavior
 */
function initNavigation() {
    const header = document.querySelector('header');
    
    // Add scroll event to change header appearance
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    });
}

/**
 * Create and animate lab particles in the background
 */
function initLabParticles() {
    const particlesContainer = document.querySelector('.lab-particles');
    if (!particlesContainer) return;
    
    // Create particles
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

/**
 * Create a single particle and add it to the container
 */
function createParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 5 + 1;
    
    // Random color from our lab palette
    const colors = ['#00c2cb', '#0a84ff', '#00d68f', '#bf5af2'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Random opacity
    const opacity = Math.random() * 0.5 + 0.1;
    
    // Set styles
    particle.style.cssText = `
        position: absolute;
        top: ${posY}%;
        left: ${posX}%;
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        border-radius: 50%;
        opacity: ${opacity};
        pointer-events: none;
    `;
    
    // Add animation
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.animate(
        [
            { transform: 'translateY(0) rotate(0deg)', opacity: opacity },
            { transform: `translateY(-100px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ],
        {
            duration: duration * 1000,
            delay: delay * 1000,
            iterations: Infinity
        }
    );
    
    container.appendChild(particle);
}

/**
 * Initialize the yeast cell simulation
 */
function initYeastSimulation() {
    const yeastContainer = document.querySelector('.yeast-container');
    if (!yeastContainer) return;
    
    // Create yeast cells
    const cellCount = 15;
    for (let i = 0; i < cellCount; i++) {
        createYeastCell(yeastContainer);
    }
}

/**
 * Create a single yeast cell and add it to the container
 */
function createYeastCell(container) {
    const cell = document.createElement('div');
    cell.classList.add('yeast-cell');
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 60 + 20;
    
    // Set styles
    cell.style.cssText = `
        position: absolute;
        top: ${posY}%;
        left: ${posX}%;
        width: ${size}px;
        height: ${size}px;
        border: 1px solid rgba(0, 194, 203, 0.3);
        border-radius: 50%;
        background-color: rgba(0, 194, 203, 0.05);
        pointer-events: none;
    `;
    
    // Add organelles
    const organelleCount = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < organelleCount; i++) {
        const organelle = document.createElement('div');
        
        // Random position within cell
        const orgPosX = Math.random() * 70 + 15;
        const orgPosY = Math.random() * 70 + 15;
        
        // Random size
        const orgSize = Math.random() * 10 + 5;
        
        organelle.style.cssText = `
            position: absolute;
            top: ${orgPosY}%;
            left: ${orgPosX}%;
            width: ${orgSize}px;
            height: ${orgSize}px;
            background-color: rgba(0, 194, 203, 0.2);
            border-radius: 50%;
        `;
        
        cell.appendChild(organelle);
    }
    
    // Add animation
    const duration = Math.random() * 30 + 20;
    
    cell.animate(
        [
            { transform: 'translate(0, 0) rotate(0deg)' },
            { transform: `translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(${Math.random() * 30}deg)` },
            { transform: 'translate(0, 0) rotate(0deg)' }
        ],
        {
            duration: duration * 1000,
            iterations: Infinity
        }
    );
    
    container.appendChild(cell);
}

/**
 * Initialize microscope controls in the virtual lab
 */
function initMicroscopeControls() {
    const magnificationSlider = document.getElementById('magnification');
    const focusSlider = document.getElementById('focus');
    const stainToggle = document.getElementById('stain-toggle');
    const timeLapseButton = document.getElementById('time-lapse');
    const yeastSimulation = document.querySelector('.yeast-simulation');
    const dataOverlay = document.querySelector('.data-overlay');
    
    if (!magnificationSlider || !focusSlider || !yeastSimulation) return;
    
    // Initialize the simulation with some yeast cells
    const cellCount = 8;
    for (let i = 0; i < cellCount; i++) {
        const cell = createLabYeastCell();
        yeastSimulation.appendChild(cell);
    }
    
    // Magnification slider control
    if (magnificationSlider) {
        magnificationSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            const scale = 0.5 + (value / 100) * 1.5;
            
            // Apply scale to yeast cells
            const cells = yeastSimulation.querySelectorAll('.lab-yeast-cell');
            cells.forEach(cell => {
                cell.style.transform = `scale(${scale})`;
            });
            
            // Update data overlay
            if (dataOverlay) {
                dataOverlay.innerHTML = `<div class="data-label">Magnification: ${value}x</div>`;
            }
        });
    }
    
    // Focus slider control
    if (focusSlider) {
        focusSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            const blur = 10 - (value / 10);
            
            // Apply blur filter to simulation
            yeastSimulation.style.filter = `blur(${blur}px)`;
        });
    }
    
    // Stain toggle button
    if (stainToggle) {
        stainToggle.addEventListener('click', () => {
            yeastSimulation.classList.toggle('stained');
            
            // Change cell appearance when stained
            const cells = yeastSimulation.querySelectorAll('.lab-yeast-cell');
            cells.forEach(cell => {
                if (yeastSimulation.classList.contains('stained')) {
                    cell.style.backgroundColor = 'rgba(191, 90, 242, 0.1)';
                    cell.style.borderColor = 'rgba(191, 90, 242, 0.4)';
                } else {
                    cell.style.backgroundColor = 'rgba(0, 194, 203, 0.1)';
                    cell.style.borderColor = 'rgba(0, 194, 203, 0.4)';
                }
            });
        });
    }
    
    // Time lapse button
    if (timeLapseButton) {
        timeLapseButton.addEventListener('click', () => {
            // Speed up cell animations
            const cells = yeastSimulation.querySelectorAll('.lab-yeast-cell');
            cells.forEach(cell => {
                cell.style.animationDuration = '2s';
                
                // After 5 seconds, return to normal speed
                setTimeout(() => {
                    cell.style.animationDuration = '10s';
                }, 5000);
            });
        });
    }
}

/**
 * Create a yeast cell for the lab simulation
 */
function createLabYeastCell() {
    const cell = document.createElement('div');
    cell.classList.add('lab-yeast-cell');
    
    // Random position
    const posX = Math.random() * 80 + 10;
    const posY = Math.random() * 80 + 10;
    
    // Random size
    const size = Math.random() * 60 + 40;
    
    // Set styles
    cell.style.cssText = `
        position: absolute;
        top: ${posY}%;
        left: ${posX}%;
        width: ${size}px;
        height: ${size}px;
        border: 2px solid rgba(0, 194, 203, 0.4);
        border-radius: 50%;
        background-color: rgba(0, 194, 203, 0.1);
        transition: all 0.5s ease;
        animation: cellMovement 10s infinite alternate ease-in-out;
    `;
    
    // Add organelles
    const organelleCount = Math.floor(Math.random() * 5) + 2;
    for (let i = 0; i < organelleCount; i++) {
        const organelle = document.createElement('div');
        
        // Random position within cell
        const orgPosX = Math.random() * 70 + 15;
        const orgPosY = Math.random() * 70 + 15;
        
        // Random size
        const orgSize = Math.random() * 15 + 10;
        
        organelle.style.cssText = `
            position: absolute;
            top: ${orgPosY}%;
            left: ${orgPosX}%;
            width: ${orgSize}px;
            height: ${orgSize}px;
            background-color: rgba(0, 194, 203, 0.3);
            border-radius: 50%;
            animation: organelleMovement 8s infinite alternate ease-in-out;
        `;
        
        cell.appendChild(organelle);
    }
    
    return cell;
}

/**
 * Initialize animations for research section
 */
function initResearchAnimations() {
    // Vesicle transport animation
    const vesicleAnimation = document.querySelector('.vesicle-animation');
    if (vesicleAnimation) {
        createVesicleAnimation(vesicleAnimation);
    }
    
    // Membrane dynamics animation
    const membraneAnimation = document.querySelector('.membrane-animation');
    if (membraneAnimation) {
        createMembraneAnimation(membraneAnimation);
    }
    
    // Protein trafficking animation
    const proteinAnimation = document.querySelector('.protein-animation');
    if (proteinAnimation) {
        createProteinAnimation(proteinAnimation);
    }
    
    // Organelle communication animation
    const organelleAnimation = document.querySelector('.organelle-animation');
    if (organelleAnimation) {
        createOrganelleAnimation(organelleAnimation);
    }
}

/**
 * Create vesicle transport animation
 */
function createVesicleAnimation(container) {
    // Create cell membrane
    const membrane = document.createElement('div');
    membrane.classList.add('cell-membrane');
    membrane.style.cssText = `
        position: absolute;
        top: 10%;
        left: 10%;
        width: 80%;
        height: 80%;
        border: 2px solid rgba(0, 194, 203, 0.6);
        border-radius: 50%;
        background-color: rgba(10, 37, 64, 0.3);
    `;
    
    container.appendChild(membrane);
    
    // Create vesicles
    for (let i = 0; i < 5; i++) {
        const vesicle = document.createElement('div');
        vesicle.classList.add('vesicle');
        
        // Random size
        const size = Math.random() * 10 + 10;
        
        vesicle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background-color: rgba(0, 194, 203, 0.6);
            border-radius: 50%;
            top: 50%;
            left: 0;
            transform: translate(-50%, -50%);
            animation: vesicleMovement 8s infinite;
            animation-delay: ${i * 1.5}s;
        `;
        
        container.appendChild(vesicle);
    }
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes vesicleMovement {
            0% { left: 20%; top: 50%; }
            25% { left: 40%; top: 30%; }
            50% { left: 60%; top: 50%; }
            75% { left: 80%; top: 70%; }
            100% { left: 90%; top: 50%; opacity: 0; }
        }
    `;
    
    document.head.appendChild(style);
}

/**
 * Create membrane dynamics animation
 */
function createMembraneAnimation(container) {
    // Create cell membrane
    const membrane = document.createElement('div');
    membrane.classList.add('dynamic-membrane');
    membrane.style.cssText = `
        position: absolute;
        top: 10%;
        left: 10%;
        width: 80%;
        height: 80%;
        border: 3px solid rgba(0, 194, 203, 0.6);
        border-radius: 50%;
        background-color: rgba(10, 37, 64, 0.2);
        animation: membranePulse 4s infinite alternate ease-in-out;
    `;
    
    container.appendChild(membrane);
    
    // Create membrane proteins
    for (let i = 0; i < 8; i++) {
        const protein = document.createElement('div');
        protein.classList.add('membrane-protein');
        
        // Position around the membrane
        const angle = (i / 8) * Math.PI * 2;
        const x = 50 + Math.cos(angle) * 40;
        const y = 50 + Math.sin(angle) * 40;
        
        protein.style.cssText = `
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: rgba(10, 132, 255, 0.8);
            border-radius: 50%;
            top: ${y}%;
            left: ${x}%;
            transform: translate(-50%, -50%);
            animation: proteinFloat 6s infinite alternate ease-in-out;
            animation-delay: ${i * 0.5}s;
        `;
        
        container.appendChild(protein);
    }
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes membranePulse {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
        }
        
        @keyframes proteinFloat {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg) scale(1.2); }
        }
    `;
    
    document.head.appendChild(style);
}

/**
 * Create protein trafficking animation
 */
function createProteinAnimation(container) {
    // Create organelles
    const organelles = [
        { name: 'nucleus', x: 50, y: 50, size: 40, color: 'rgba(191, 90, 242, 0.4)' },
        { name: 'er', x: 30, y: 70, size: 30, color: 'rgba(0, 194, 203, 0.4)' },
        { name: 'golgi', x: 70, y: 60, size: 25, color: 'rgba(0, 214, 143, 0.4)' }
    ];
    
    organelles.forEach(org => {
        const organelle = document.createElement('div');
        organelle.classList.add(org.name);
        organelle.style.cssText = `
            position: absolute;
            top: ${org.y}%;
            left: ${org.x}%;
            width: ${org.size}%;
            height: ${org.size}%;
            background-color: ${org.color};
            border-radius: ${org.name === 'golgi' ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '50%'};
            transform: translate(-50%, -50%);
        `;
        
        container.appendChild(organelle);
    });
    
    // Create proteins
    for (let i = 0; i < 5; i++) {
        const protein = document.createElement('div');
        protein.classList.add('trafficking-protein');
        
        protein.style.cssText = `
            position: absolute;
            width: 8px;
            height: 8px;
            background-color: rgba(255, 214, 10, 0.8);
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: proteinTrafficking 10s infinite;
            animation-delay: ${i * 2}s;
        `;
        
        container.appendChild(protein);
    }
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes proteinTrafficking {
            0% { top: 50%; left: 50%; background-color: rgba(255, 214, 10, 0.8); }
            20% { top: 50%; left: 50%; background-color: rgba(255, 214, 10, 0.8); }
            30% { top: 70%; left: 30%; background-color: rgba(0, 194, 203, 0.8); }
            50% { top: 70%; left: 30%; background-color: rgba(0, 194, 203, 0.8); }
            60% { top: 60%; left: 70%; background-color: rgba(0, 214, 143, 0.8); }
            80% { top: 60%; left: 70%; background-color: rgba(0, 214, 143, 0.8); }
            90% { top: 20%; left: 80%; background-color: rgba(255, 69, 58, 0.8); }
            100% { top: 20%; left: 80%; opacity: 0; }
        }
    `;
    
    document.head.appendChild(style);
}

/**
 * Create organelle communication animation
 */
function createOrganelleAnimation(container) {
    // Create organelles
    const organelles = [
        { name: 'nucleus', x: 50, y: 50, size: 30, color: 'rgba(191, 90, 242, 0.4)' },
        { name: 'mitochondria', x: 25, y: 40, size: 20, color: 'rgba(255, 69, 58, 0.4)' },
        { name: 'lysosome', x: 70, y: 30, size: 15, color: 'rgba(255, 214, 10, 0.4)' },
        { name: 'peroxisome', x: 75, y: 70, size: 15, color: 'rgba(0, 214, 143, 0.4)' },
        { name: 'vacuole', x: 30, y: 70, size: 25, color: 'rgba(0, 194, 203, 0.4)' }
    ];
    
    organelles.forEach(org => {
        const organelle = document.createElement('div');
        organelle.classList.add(org.name);
        
        let borderRadius = '50%';
        if (org.name === 'mitochondria') {
            borderRadius = '60% 40% 60% 40% / 40% 60% 40% 60%';
        }
        
        organelle.style.cssText = `
            position: absolute;
            top: ${org.y}%;
            left: ${org.x}%;
            width: ${org.size}%;
            height: ${org.size * (org.name === 'mitochondria' ? 0.6 : 1)}%;
            background-color: ${org.color};
            border-radius: ${borderRadius};
            transform: translate(-50%, -50%);
            animation: organellePulse 4s infinite alternate ease-in-out;
        `;
        
        container.appendChild(organelle);
    });
    
    // Create signal particles
    for (let i = 0; i < organelles.length; i++) {
        for (let j = i + 1; j < organelles.length; j++) {
            createSignalParticle(container, organelles[i], organelles[j]);
        }
    }
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes organellePulse {
            0% { transform: translate(-50%, -50%) scale(1); }
            100% { transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @keyframes signalTravel {
            0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(0.2); opacity: 0; }
        }
    `;
    
    document.head.appendChild(style);
}

/**
 * Create signal particle between two organelles
 */
function createSignalParticle(container, org1, org2) {
    const signal = document.createElement('div');
    signal.classList.add('signal-particle');
    
    // Line connecting organelles
    const line = document.createElement('div');
    line.style.cssText = `
        position: absolute;
        top: ${org1.y}%;
        left: ${org1.x}%;
        width: ${Math.sqrt(Math.pow(org2.x - org1.x, 2) + Math.pow(org2.y - org1.y, 2))}%;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.1);
        transform-origin: left center;
        transform: rotate(${Math.atan2(org2.y - org1.y, org2.x - org1.x) * 180 / Math.PI}deg);
    `;
    
    container.appendChild(line);
    
    // Animated signal
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 6px;
        height: 6px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        animation: signalTravel 2s infinite;
        animation-delay: ${Math.random() * 2}s;
    `;
    
    // Animate along the path
    const keyframes = document.createElement('style');
    keyframes.textContent = `
        @keyframes signal${org1.name}To${org2.name} {
            0% { top: ${org1.y}%; left: ${org1.x}%; }
            100% { top: ${org2.y}%; left: ${org2.x}%; }
        }
    `;
    document.head.appendChild(keyframes);
    
    particle.style.animation = `signal${org1.name}To${org2.name} 2s infinite alternate`;
    
    container.appendChild(particle);
}

// Add CSS animations
const animations = document.createElement('style');
animations.textContent = `
    @keyframes cellMovement {
        0% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(10px, 5px) rotate(5deg); }
        50% { transform: translate(0, 10px) rotate(0deg); }
        75% { transform: translate(-10px, 5px) rotate(-5deg); }
        100% { transform: translate(0, 0) rotate(0deg); }
    }
    
    @keyframes organelleMovement {
        0% { transform: translate(0, 0); }
        100% { transform: translate(5px, 5px); }
    }
`;

document.head.appendChild(animations);