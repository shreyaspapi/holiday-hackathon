const { parentPort } = require('worker_threads');
const SocialMediaAssistant = require('./classes/SocialMediaAssistant');

(async () => {
  const assistant = new SocialMediaAssistant();
  await assistant.runScheduledTasks();

  parentPort.postMessage('Tasks completed successfully.');
})();
