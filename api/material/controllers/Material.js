'use strict';

/**
 * Material.js controller
 *
 * @description: A set of functions called "actions" for managing `Material`.
 */

module.exports = {

  /**
   * Retrieve material records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.material.search(ctx.query);
    } else {
      return strapi.services.material.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a material record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.material.fetch(ctx.params);
  },

  /**
   * Count material records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.material.count(ctx.query, populate);
  },

  /**
   * Create a/an material record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.material.add(ctx.request.body);
  },

  /**
   * Update a/an material record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.material.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an material record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.material.remove(ctx.params);
  }
};
