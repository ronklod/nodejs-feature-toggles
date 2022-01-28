var feature_toggle =  require('../util/featureToggle');
var express = require('express');
var router = express.Router();
const { initialize } = require('unleash-client');


/* GET home page. */
router.get('/', function(req, res, next) {
    let result = `1. react flag   = ${feature_toggle.react_flag}<br>
                  2. nodejs flag  = ${feature_toggle.nodejs_flag}<br> 
                  3. traffic flag = ${feature_toggle.traffic_example}`;

    res.status(200).send(result);

});



module.exports = router;
