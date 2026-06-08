require('./ensureNodeCompatibility');

const { spawn } = require('child_process');

const script = process.argv[2];

if (!script) {
  throw new Error('A react-scripts command is required.');
}

const child = spawn(
  process.execPath,
  [require.resolve(`react-scripts/scripts/${script}`)],
  {
    env: process.env,
    stdio: 'inherit',
  }
);

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code || 0);
});

child.on('error', (error) => {
  throw error;
});
