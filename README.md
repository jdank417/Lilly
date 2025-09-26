# Dr. Lilly Hanley - Biotechnologist Website

An immersive, interactive website for Dr. Lilly Hanley, a biotechnologist specializing in yeast and intercellular transport research.

## Overview

This website creates an immersive laboratory experience that simulates being in a yeast research lab. It features interactive elements, animations, and a virtual lab simulation that allows visitors to explore Dr. Hanley's work in a unique and engaging way.

## Features

### Immersive Lab Environment
- Background animations that simulate a laboratory setting
- Floating particles and dynamic yeast cell visualizations
- Lab-themed color palette and design elements

### Interactive Virtual Laboratory
- Microscope simulation with adjustable controls
- Magnification and focus sliders that affect the yeast cell visualization
- Staining toggle to highlight different cellular structures
- Time-lapse functionality to observe cell movement

### Research Visualizations
- Animated diagrams of vesicular transport
- Membrane dynamics simulation
- Protein trafficking visualization
- Organelle communication illustration

### Responsive Design
- Fully responsive layout that works on desktop, tablet, and mobile devices
- Adaptive components that reorganize based on screen size
- Touch-friendly controls for mobile users

## Technologies Used

- **HTML5** - Semantic structure and content
- **CSS3** - Styling, animations, and responsive design
  - Custom animations and transitions
  - CSS Grid and Flexbox for layout
  - Media queries for responsiveness
- **JavaScript** - Interactive elements and dynamic content
  - DOM manipulation
  - Web Animations API
  - Event handling for interactive controls
- **SVG** - Vector graphics for lab background and scientist illustration

## Project Structure

```
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── assets/
│   ├── lab-bg.svg      # Laboratory background image
│   └── scientist.svg   # Scientist illustration
├── test.html           # Testing interface
└── README.md           # Project documentation
```

## How to Run

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. Alternatively, you can use a local development server:
   ```
   python -m http.server
   ```
   Then navigate to `http://localhost:8000` in your browser

## Browser Compatibility

This website works best in modern browsers that support the latest CSS and JavaScript features:
- Google Chrome (recommended)
- Mozilla Firefox
- Safari
- Microsoft Edge

Some animations and effects may not work properly in older browsers.

## Testing

A test interface is provided to verify all functionality:
1. Open `test.html` in your browser
2. Follow the testing instructions to verify all features
3. Test on different devices and screen sizes to ensure responsive design works correctly

## Credits

- Design and Development: Created for Dr. Lilly Hanley
- SVG Illustrations: Custom-created for this project
- Fonts: Google Fonts (Roboto and Space Mono)

## License

All rights reserved. This website was created specifically for Dr. Lilly Hanley and may not be reproduced without permission.