const controller = require('./controller.js');
const router = require('express').Router();

router
  .route('/searches')
  .get((req, res) => {
    controller.fetch(req, res);
  })
  .post((req, res) => {
    controller.post(req, res);
  })
  .put((req, res) => {
    controller.update(req, res);
  })
  .delete((req, res) => {
    controller.delete(req, res);
  })
router
  .route('/brands')
  .get((req, res) => {
    controller.fetch(req, res);
  })
  .post((req, res) => {
    controller.post(req, res);
  });
router
  .route('/')
  .get((req, res) => {
    controller.fetch(req, res);
  })
  .post((req, res) => {
    controller.post(req, res);
  });
router
  .route('/ads')
  .get((req, res) => {
    controller.fetchAd(req, res);
  })
  .post((req, res) => {
    controller.createAd(req, res);
  })
  .put((req, res) => {
    controller.updateAd(req, res);
  })
  .delete((req, res) => {
    controller.deleteAd(req, res);
  });
  
module.exports = router;
