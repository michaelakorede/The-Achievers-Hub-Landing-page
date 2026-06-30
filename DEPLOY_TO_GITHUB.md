# Deploy to GitHub Pages

This folder is a complete static website. It can be hosted from GitHub Pages without any build step.

## Option 1: Upload through GitHub website

1. Create a new GitHub repository, for example `achievers-hub`.
2. Upload all files from this folder into the repository root:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `DEPLOY_TO_GITHUB.md`
   - `assets/`
3. Open the repository on GitHub.
4. Go to Settings > Pages.
5. Under Build and deployment, choose:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
6. Save. GitHub will show the live website URL after deployment.

## Option 2: Let Codex publish it

Give Codex the repository name in `owner/repo` format, and make sure the GitHub connector has access to that repository. Codex can then upload the files through the GitHub connector.
