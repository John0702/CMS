'use strict';
const { removeAttrs } = require("../../../utils/index.js");

/**
 * nav controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::nav.nav');
