'use strict';
const { removeAttrs } = require("../../../utils/index.js");

/**
 * banner controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::banner.banner', ({ strapi }) => ({
    async find(ctx) {
        const res = await super.find(ctx);
        res.data = res.data.map(item=>removeAttrs(item))
        return res.data[0];
    },
    async findOne(ctx) {
        ctx.query = {
            ...ctx.query,
            // populate: "deep",
            populate: "*",
        };
        const { data } = await super.findOne(ctx);
        delete data.id
        return removeAttrs(data);
    },
}));