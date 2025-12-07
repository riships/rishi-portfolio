# 🚀 Portfolio Deployment Setup

This portfolio is configured for automated deployment to GitHub Pages using GitHub Actions.

## Deployment Configuration

### GitHub Pages Setup

1. **Repository Settings**
   - Go to `Settings > Pages`
   - Select "GitHub Actions" as the build and deployment source
   - The site will be published at: `https://riships.github.io/rishi-portfolio/`

2. **Automatic Deployment**
   - The `.github/workflows/deploy.yml` workflow automatically:
     - Builds the project when you push to `main` branch
     - Deploys the built files to GitHub Pages
     - Updates your live portfolio on every commit

3. **What Triggers Deployment**
   - Push to `main` branch ✅
   - Pull requests trigger build preview (but don't deploy)

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Build Output
- Production build is generated in the `dist/` folder
- Automatically deployed to GitHub Pages by the workflow

### Environment Details
- **Node Version**: 18.x (configured in workflow)
- **Package Manager**: npm with caching enabled
- **Build Tool**: Vite
- **Framework**: React 19.1.0

### Monitoring Deployments

1. Go to your repository's **Actions** tab
2. View the "Build and Deploy to GitHub Pages" workflow
3. Each push will show a workflow run with:
   - ✅ Build job status
   - ✅ Deploy job status
   - 🔗 Direct link to your live site

### Troubleshooting

If deployment fails:
1. Check the Actions tab for error logs
2. Ensure `npm run build` succeeds locally
3. Verify GitHub Pages is enabled in repository Settings
4. Check that no sensitive files are being committed

### Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public/` folder with your domain
2. Update DNS records with GitHub's instructions
3. Enable "Enforce HTTPS" in Pages settings

---

Your portfolio is now ready for production! 🎉
