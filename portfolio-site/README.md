# Neobrutalist Portfolio Site

A bold, in-your-face portfolio website built with pure HTML, CSS, and JavaScript that renders markdown content with a neobrutalist design aesthetic.

## 🎨 Features

- **Neobrutalist Design**: Bold colors, thick borders, and aggressive shadows
- **Markdown-Powered**: All content is written in markdown for easy editing
- **Responsive**: Works on all devices (brutally well)
- **Single Page App**: Smooth navigation between sections
- **No Framework Dependencies**: Pure vanilla JavaScript
- **Easy to Customize**: Modify colors, fonts, and layout in CSS variables

## 🚀 Getting Started

1. **Clone or download** this portfolio template
2. **Customize the content** by editing the markdown files in the `content/` folder:
   - `about.md` - Your personal information and skills
   - `experience.md` - Your work history and achievements
   - `blogs.md` - Your articles and thoughts
3. **Personalize the design** by modifying CSS variables in `css/neobrutalist.css`
4. **Deploy** to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

## 📁 Project Structure

```
portfolio-site/
├── index.html          # Main HTML file
├── css/
│   └── neobrutalist.css # Neobrutalist theme styles
├── js/
│   └── app.js          # JavaScript for navigation and markdown rendering
├── content/
│   ├── about.md        # About Me section content
│   ├── experience.md   # Experience section content
│   └── blogs.md        # Blogs section content
└── README.md           # This file
```

## 🎨 Customization

### Colors
Edit the CSS variables in `css/neobrutalist.css`:

```css
:root {
    --primary-color: #000000;    /* Black */
    --secondary-color: #ffffff;  /* White */
    --accent-color: #ff0080;     /* Hot Pink */
    --warning-color: #ffff00;    /* Yellow */
    --success-color: #00ff00;    /* Green */
}
```

### Content
Simply edit the markdown files in the `content/` folder. The site will automatically render your markdown as HTML with the neobrutalist styling.

### Fonts
The site uses `Courier New` for that authentic brutalist feel, but you can change it:

```css
--font-family: 'Your Font', monospace;
```

## 🌐 Deployment

### Netlify
1. Drag and drop the `portfolio-site` folder to Netlify
2. Your site is live!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### GitHub Pages
1. Push to a GitHub repository
2. Go to Settings > Pages
3. Select source branch
4. Your site will be available at `username.github.io/repository-name`

## 📝 Content Guidelines

### Markdown Features Supported
- Headers (H1-H6)
- Bold and italic text
- Links
- Lists (ordered and unordered)
- Code blocks and inline code
- Blockquotes
- Tables
- HTML elements (for advanced styling)

### Special CSS Classes
Use these classes in your markdown for extra styling:

```html
<div class="card">Content in a card</div>
<span class="badge">Tag</span>
<span class="highlight">Highlighted text</span>
```

## 🔧 Technical Details

- **Markdown Parser**: Uses `marked.js` for markdown to HTML conversion
- **No Build Process**: Everything runs in the browser
- **Modern JavaScript**: Uses ES6+ features (works in all modern browsers)
- **CSS Grid & Flexbox**: For responsive layouts
- **CSS Animations**: Smooth transitions and hover effects

## 🎯 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support  
- Safari: ✅ Full support
- IE11: ❌ Not supported (and we don't care)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Found a bug or want to add a feature? Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 💡 Tips

- Keep your markdown content engaging and personal
- Use the badge system to highlight your skills
- Don't be afraid to be bold - it's neobrutalism!
- Test your content on mobile devices
- Use the card class to organize information

---

**Built with ❤️ and a lot of ☕**

*Remember: In neobrutalism, subtle is a four-letter word!*