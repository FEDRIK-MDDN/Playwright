# Git Repository Setup Guide

## Initialize Git Repository

Open PowerShell in the project directory and run:

```powershell
# Initialize Git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Playwright test automation for Singlish to Sinhala translation"

# Create additional commits for each test category (optional but recommended)
# This shows development progress

# Add remote repository (replace with your GitHub repository URL)
# git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
# git push -u origin main
```

## Creating a GitHub Repository

1. Go to https://github.com
2. Click on "New Repository"
3. **Repository name**: `singlish-sinhala-testing` or similar
4. **Description**: "Playwright automation for SwiftTranslator testing - IT3040 IT23546998"
5. **Visibility**: Select **PUBLIC** (IMPORTANT!)
6. Do NOT initialize with README (we already have one)
7. Click "Create repository"

## Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Verify Repository is Public

1. Open your repository URL in a browser (while logged out or in incognito mode)
2. You should be able to see all files
3. If you get a 404 error, the repository is private - change it to public in Settings

## Create Repository Link File

Create a text file with your registration number containing the repository URL:

```
Repository URL: https://github.com/YOUR_USERNAME/YOUR_REPO_NAME
```

Save this as: `YOUR_REGISTRATION_NUMBER.txt`

## Best Practices

### Commit Messages
- Use clear, descriptive commit messages
- Example: "Add sentence structure test cases"
- Example: "Implement negative test scenarios"
- Example: "Update README with installation instructions"

### .gitignore
Already configured to exclude:
- node_modules/
- test-results/
- playwright-report/
- Log files

### Branch Strategy (Optional)
For more professional approach:
```powershell
# Create feature branches
git checkout -b feature/positive-tests
git checkout -b feature/negative-tests
git checkout -b feature/ui-tests

# Merge back to main
git checkout main
git merge feature/positive-tests
```

## Common Git Commands

```powershell
# Check status
git status

# View commit history
git log --oneline

# Add specific files
git add tests/positive/

# Commit changes
git commit -m "Your commit message"

# Push changes
git push

# Pull latest changes (if working with others)
git pull
```

## Troubleshooting

### Authentication Issues
If you have authentication problems:
1. Use Personal Access Token (PAT) instead of password
2. Go to GitHub Settings > Developer settings > Personal access tokens
3. Generate new token with repo permissions
4. Use token as password when prompted

### Large Files
If you accidentally added large files:
```powershell
git rm --cached path/to/large/file
echo "path/to/large/file" >> .gitignore
git commit -m "Remove large file"
```

## Final Checklist Before Submission

- [ ] Repository is PUBLIC
- [ ] All code files are committed
- [ ] README.md is clear and complete
- [ ] .gitignore is properly configured
- [ ] No sensitive information in code
- [ ] Repository link works in incognito/private mode
- [ ] Clone repository in new location to verify it works:
  ```powershell
  git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git test-clone
  cd test-clone
  npm install
  npm test
  ```
