var express = require('express');
const { initialize } = require('unleash-client');

let feature_toggle = {};

const unleash = initialize({
    url: 'http://localhost:4242/api/',
    appName: 'react-unlease',
    instanceId: 'default',
    customHeaders: {
        Authorization: '*:default.f741b301a8a09519e8311b62c0423d7cdc3c9483d172e2f2e4f1ef11',
    },
});


const getFeatureFlags = () =>{
    // Check a feature flag
    feature_toggle.react_flag = unleash.isEnabled('react_flag');
    feature_toggle.nodejs_flag = unleash.isEnabled('nodejs_flag');
    feature_toggle.traffic_example = unleash.isEnabled('experiment_flag');
}

unleash.on('synchronized', () => {
    // Unleash is ready to serve updated feature toggles.
    getFeatureFlags();
    // Check the variant
    //const variant = unleash.getVariant('app.ToggleY');
});

unleash.on('changed', () => {
    // Unleash is ready to serve updated feature toggles.
    getFeatureFlags();
    // Check the variant
    //const variant = unleash.getVariant('app.ToggleY');
});

module.exports = feature_toggle;
