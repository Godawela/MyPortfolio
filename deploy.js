import { execSync } from 'child_process';
import { cwd } from 'process';
import { chdir } from 'process';

// Abort on errors
process.on('unhandledRejection', err => {
  console.error(err);
  process.exit(1);
});

// Build
execSync('npm run build', { stdio: 'inherit' });

// Navigate into the build output directory
chdir('dist');

// Create a new Git repository
execSync('git init', { stdio: 'inherit' });
execSync('git add -A', { stdio: 'inherit' });
execSync('git commit -m "deploy"', { stdio: 'inherit' });

// Replace USERNAME and REPO with your GitHub username and repository name
const username = 'Godawela';
const repo = 'MyPortfolio';

// If you are deploying to https://<USERNAME>.github.io
// execSync(`git push -f git@github.com:${username}/${username}.github.io.git master`, { stdio: 'inherit' });

// If you are deploying to https://<USERNAME>.github.io/<REPO>
execSync(`git push -f git@github.com:${username}/${repo}.git master:gh-pages`, { stdio: 'inherit' });

// Change back to the root directory
chdir(cwd());
