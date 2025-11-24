// Script untuk membuat Next.js app
const { exec } = require('child_process');

exec('npx create-next-app@latest . --js --tailwind --no-eslint --no-typescript --no-src --no-app --no-react-compiler', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  
  console.log(`Output: ${stdout}`);
});