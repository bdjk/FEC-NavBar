const env = process.env.NODE_ENV || 'dev';

const dev = {
  port: process.env.DEV_APP_PORT,
  serverIp: process.env.DEV_APP_SERVER_IP,
  serviceIp: process.env.DEV_SERVICE_IP,
  servicePort: process.env.DEV_SERVICE_PORT, 
  cacheIp: process.env.DEV_CACHE_IP,
  cachePort: process.env.DEV_CACHE_PORT
};

// serviceIp and servicePort should be the same for all configs
const test = {
  port: process.env.TEST_APP_PORT,
  serverIp: process.env.TEST_APP_SERVER_IP,
  serviceIp: process.env.TEST_SERVICE_IP,
  servicePort: process.env.TEST_SERVICE_PORT,
  cacheIp: process.env.TEST_CACHE_IP,
  cachePort: process.env.TEST_CACHE_PORT
};

// production service ip points to loadbalancer server
const prod = {
  port: process.env.PROD_APP_PORT,
  serverIp: process.env.PROD_APP_SERVER_IP,
  serviceIp: process.env.PROD_SERVICE_IP,
  servicePort: process.env.PROD_SERVICE_PORT, 
}

const config = {
  dev,
  test,
  prod,
};

module.exports = config[env];