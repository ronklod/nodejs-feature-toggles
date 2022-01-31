var feature_toggle =  require('../util/featureToggle');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    let result = `1. react flag   = ${feature_toggle.react_flag.status}<br>
                  2. nodejs flag  = ${feature_toggle.nodejs_flag.status}<br> 
                     variants = ${feature_toggle.nodejs_flag.variants}<br>
                  3. traffic flag = ${feature_toggle.traffic_example.status}`;

    res.status(200).send(result);

});



module.exports = router;
