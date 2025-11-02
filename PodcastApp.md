# 🎙️ Modern Podcast Explorer

## Project Overview

Modern Podcast Explorer is a responsive web application that allows users to discover and explore podcast shows through an intuitive interface. Built with vanilla JavaScript, the application showcases podcast information in an elegant grid layout with detailed modal views for each show.

## Features

### Core Features

- **Dynamic Podcast Grid**
  - Responsive grid layout adapting to different screen sizes
  - Visual cards displaying key podcast information
  - Smooth hover effects and transitions

### Podcast Cards Display

- Cover image preview
- Show title
- Number of seasons
- Genre tags
- Last updated date in human-readable format

### Detailed Modal View

- Larger cover image
- Comprehensive show description
- Genre classification tags
- Update information
- Complete seasons list with episode counts
- Keyboard navigation support (Esc to close)
- Accessibility features

### User Interface

- Fixed header with search capability
- Responsive design for mobile, tablet, and desktop
- Clean, modern aesthetic with consistent styling
- Smooth animations and transitions

## Technologies Used

### Core Technologies

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

### Key Features & Implementation

- CSS Grid for responsive layouts
- CSS Custom Properties (variables)
- ES6 Modules for code organization
- Event Delegation for performance
- Semantic HTML for accessibility

### External Resources

- Google Fonts (Inter)
- Font Awesome Icons
- Live Server for development

## Project Structure

```plaintext
project-root/
├── index.html              # Main HTML structure
├── styles.css             # Global styles and layouts
├── scripts/
│   ├── script.js         # Main application entry point
│   ├── data.js          # Podcast and genre data
│   ├── grid.js          # Grid layout functionality
│   ├── modal.js         # Modal view implementation
│   ├── podcastCard.js   # Card component creation
│   ├── genre.js         # Genre handling utilities
│   └── dateFormat.js    # Date formatting utilities
└── README.md            # Project documentation
```

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone [repository-url]
   cd podcast-explorer
   ```

2. **Development Server**

   - Install VS Code's Live Server extension
   - Right-click `index.html` and select "Open with Live Server"
   - The application will open in your default browser

3. **Manual Setup**
   - Simply open `index.html` in a modern web browser
   - Note: Some features may require a local server due to module loading

## Usage Guide

### Basic Navigation

1. **Browse Podcasts**

   - Scroll through the main grid to view available podcasts
   - Hover over cards to see interaction effects

2. **View Details**

   - Click any podcast card to open detailed view
   - Press ESC or click the close button (×) to exit

3. **Search (Coming Soon)**
   - Use the search icon in the header to filter podcasts
   - Search by title, genre, or description

### Keyboard Navigation

- `ESC` - Close modal
- `TAB` - Navigate through interactive elements
- `ENTER` - Select/activate focused element

## Development Notes

### Code Organization

- Modular JavaScript using ES6 modules
- Separate concerns between data, UI, and utilities
- Consistent naming conventions and code style

### Styling

- CSS custom properties for theme consistency
- Mobile-first responsive design
- BEM-inspired class naming

## Future Enhancements

- [ ] Implement search functionality
- [ ] Add filtering by genre
- [ ] Implement sorting options
- [ ] Add dark mode support
- [ ] Enhance accessibility features

## Contributing

This project is part of a learning exercise. While it's not open for contributions, feel free to fork and adapt for your own use.

---

Developed as part of the DJS01-2025 course project. Design and implementation by Emmanuel802.
