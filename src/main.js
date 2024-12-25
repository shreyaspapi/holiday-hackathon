const { Worker } = require('worker_threads');
const path = require('path');

const worker = new Worker(path.resolve(__dirname, 'worker.js'));

worker.once('message', (message) => {
  console.log(`Worker message: ${message}`);
});

worker.on('error', (error) => {
  console.error(`Worker error: ${error}`);
});

worker.on('exit', (code) => {
  if (code !== 0) {
    console.error(`Worker stopped with exit code ${code}`);
  }
});

console.log('Main thread: Worker started.');
