'use strict';
const { removeAttrs } = require("../../../utils/index.js");

/**
 * author controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::author.author', ({ strapi }) => ({
    async find(ctx) {
        const res = await super.find(ctx);
        res.data = res.data.map(item=>removeAttrs(item))
        return res.data;
    },
}));
