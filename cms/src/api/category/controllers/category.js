'use strict';
const { removeAttrs } = require("../../../utils/index.js");

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({ strapi }) => ({
    async find(ctx) {
        const res = await super.find(ctx);
        res.data = res.data.map(item=>removeAttrs(item))
        return res.data;
    },
    
    async findOne(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: "deep",
            // populate: "*",
        };
        const { data } = await super.findOne(ctx);
        return removeAttrs(data);
    },
}));

