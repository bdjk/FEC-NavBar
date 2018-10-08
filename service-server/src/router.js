require('dotenv').config();
import express from 'express';
import axios from 'axios';
const router = express.Router();

// create config file here since experiencing trouble importing config 
// once server bundle is created
// env vars should be coming from .env during dev and Docker during testing
const env = process.env.NODE_ENV;
const config = {
  dev: {
    dbIp: process.env.DEV_DB_SERVER_IP,
    dbPort: process.env.DEV_DB_PORT,
  },
  test: {
    dbIp: process.env.TEST_DB_SERVER_IP,
    dbPort: process.env.TEST_DB_PORT,
  },
};

console.log(env, config);
// default url for api
// need to set SOME PROTOCOL e.g. http
const options = {
  url: `http://${ config[env].dbIp }:${ config[env].dbPort }/product/ads`,
};
// axios requests to db server
// set methods on options as well

router.route('/ads')
  .get((req, res) => {
    // get method expects query string with id
    options.method = 'get';

    axios(options)
      .then(results => {
        console.log('service get succcess');
        res.send(results.data);
      })
      .catch(err => console.log('ERROR from get', err));
    // axios.get('http://127.0.0.1:8000/product/ads?id=4')
    //   .then((result) => console.log(result))
    //   .catch(err => console.log(err));
  })
  .post((req, res) => { 
    options.method = 'post';
  })
  .put((req, res) => {
    options.method = 'put';
  })
  .delete((req, res) => {
    options.method = 'delete';
  });

export default router;