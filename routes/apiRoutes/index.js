const router = require('express').Router();
const animalRoutes=require('../apiRoutes/animalRoutes');
const zookeeperRouters=require('../apiRoutes/zookeeperRoutes');

router.use(animalRoutes);
router.use(zookeeperRouters);

module.exports=router;