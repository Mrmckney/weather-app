import { execSync } from 'child_process';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter commit message: ', (commitMessage) => {
  try {
    execSync('git add .');
    execSync(`git commit -m "${commitMessage}"`);
    execSync('git push origin main');
    console.log('Changes pushed to remote repository.');
  } catch (error) {
    console.error(error);
  } finally {
    rl.close();
  }
});