/* eslint-disable import/no-extraneous-dependencies */
const { RetryChunkLoadPlugin } = require('webpack-retry-chunk-load-plugin');

module.exports = new RetryChunkLoadPlugin({
  retryDelay: 1000,
  maxRetries: 3,
  // Функция которая вызывается после неудачных загрузок
  // lastResortScript: 'window.handleOfflineEvent();',
});
