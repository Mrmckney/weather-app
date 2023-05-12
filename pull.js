import { execSync } from 'child_process';

try {
    execSync('git stash');
    execSync('git pull');
    execSync('git stash pop');
    console.log('Pulled latest changes.');
} catch (error) {
    console.error(error);
} finally {
    rl.close();
}
