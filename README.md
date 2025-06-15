# Professional Portfolio Site

A modern, professional portfolio website built with a clean neobrutalist design aesthetic. Features responsive design, smooth navigation, and markdown-powered content management.

## 🚨 GitHub Pages Setup Fixed!

This site is now configured to work perfectly with GitHub Pages! Here's what I fixed:

### Issues That Were Causing Problems:
1. **Files were in a subdirectory** - GitHub Pages needs `index.html` in the root
2. **Missing `.nojekyll` file** - This prevents Jekyll processing
3. **Incorrect file paths** - All paths now work with GitHub Pages

### File Structure (Root Level):
```
├── index.html          # Main HTML file (ROOT LEVEL - IMPORTANT!)
├── css/
│   └── neobrutalist.css # Neobrutalist theme styles
├── js/
│   └── app.js          # JavaScript for navigation and markdown rendering
├── content/
│   ├── about.md        # About Me section content
│   ├── experience.md   # Experience section content
│   └── blogs.md        # Blogs section content
├── .nojekyll           # Prevents Jekyll processing (IMPORTANT!)
└── README.md           # This file
```

## 🚀 GitHub Pages Deployment Steps:

1. **Push all files to your GitHub repository**
2. **Go to your repository Settings**
3. **Scroll down to "Pages" section**
4. **Under "Source", select "Deploy from a branch"**
5. **Choose "main" branch and "/ (root)" folder**
6. **Click Save**
7. **Your site will be available at: `https://yourusername.github.io/repository-name`**

## 🎨 Design Features

- **Professional Neobrutalist Theme**: Clean, modern design with bold elements and subtle shadows
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Typography**: Professional font pairing with Inter and JetBrains Mono
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML
- **Performance**: Optimized CSS with minimal dependencies
- **Markdown-Powered**: All content written in markdown for easy editing
- **Single Page App**: Smooth navigation between sections


- **GitHub Pages Ready**: Configured specifically for GitHub Pages deployment

### Professional Color Paletteomization

### Colors
Edit the CSS variables in `css/neobrutalist.css`:

    --primary-color: #2563eb;      /* Professional blue */
    --primary-dark: #1d4ed8;       /* Darker blue variant */
    --secondary-color: #64748b;    /* Professional gray */
    --accent-color: #f59e0b;       /* Accent orange */
    --success-color: #10b981;      /* Success green */
    --gray-900: #0f172a;           /* Dark text */
    --gray-50: #f8fafc;            /* Light background */ */
    --warning-color: #ffff00;    /* Yellow */
    --success-color: #00ff00;    /* Green */
}
### Professional Content Structure
The content has been updated to reflect a professional portfolio:
- `content/about.md` - Professional overview, skills, and expertise
- `content/experience.md` - Detailed work history with achievements and technologies
- `content/blogs.md` - Technical articles, tutorials, and professional insightsand skills
- `content/experience.md` - Your work history and achievements  
- `content/blogs.md` - Your articles and thoughts

The site will automatically render your markdown as HTML with the neobrutalist styling.

## 🌐 Alternative Deployment Options

### Netlify
1. Drag and drop the entire folder to Netlify
2. Your site is live!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## 📝 Content Guidelines

### Markdown Features Supported
- Headers (H1-H6)
- Bold and italic text
- Links
- Lists (ordered and unordered)
- Code blocks and inline code
- Blockquotes
- Tables
### Professional CSS Classes
Use these classes in your markdown for enhanced styling:
### Special CSS Classes
Use these classes in your markdown for extra styling:
<div class="card">Professional content card</div>
<span class="badge">Technology</span>
<div class="experience-item">Work experience with timeline</div>
<div class="blog-post">Article or blog post</div>
<div class="stats-grid">Statistics display</div>
<span class="badge">Tag</span>
<span class="highlight">Highlighted text</span>
```

## 🎯 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support  
- Safari: ✅ Full support
- IE11: ❌ Not supported (and we don't care)

## 💡 Troubleshooting GitHub Pages

If your site still shows only the README:

1. **Check that `index.html` is in the root directory** (not in a subfolder)
2. **Verify the `.nojekyll` file exists** in the root directory
3. **Make sure GitHub Pages source is set to "main branch / (root)"**
4. **Wait 5-10 minutes** for GitHub Pages to update
5. **Check the Actions tab** in your repository for any build errors

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

**Built with ❤️ and modern web technologies**

*Professional portfolio template designed for developers and tech professionals*

*Remember: In neobrutalism, subtle is a four-letter word!*