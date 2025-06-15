# Neobrutalist Portfolio Site

A bold, in-your-face portfolio website built with pure HTML, CSS, and JavaScript that renders markdown content with a neobrutalist design aesthetic.

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

## 🎨 Features

- **Neobrutalist Design**: Bold colors, thick borders, and aggressive shadows
- **Markdown-Powered**: All content is written in markdown for easy editing
- **Responsive**: Works on all devices (brutally well)
- **Single Page App**: Smooth navigation between sections
- **No Framework Dependencies**: Pure vanilla JavaScript
- **Easy to Customize**: Modify colors, fonts, and layout in CSS variables
- **GitHub Pages Ready**: Configured specifically for GitHub Pages deployment

## 🔧 Customization

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
Simply edit the markdown files in the `content/` folder:
- `content/about.md` - Your personal information and skills
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
- HTML elements (for advanced styling)

### Special CSS Classes
Use these classes in your markdown for extra styling:

```html
<div class="card">Content in a card</div>
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

---

**Built with ❤️ and a lot of ☕**

*Remember: In neobrutalism, subtle is a four-letter word!*