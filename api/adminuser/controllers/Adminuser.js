'use strict';

/**
 * Adminuser.js controller
 *
 * @description: A set of functions called "actions" for managing `Adminuser`.
 */

module.exports = {

  /**
   * Retrieve adminuser records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.adminuser.search(ctx.query);
    } else {
      return strapi.services.adminuser.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a adminuser record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.adminuser.fetch(ctx.params);
  },

  /**
   * Count adminuser records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.adminuser.count(ctx.query, populate);
  },

  /**
   * Create a/an adminuser record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.adminuser.add(ctx.request.body);
  },

  /**
   * Update a/an adminuser record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.adminuser.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an adminuser record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.adminuser.remove(ctx.params);
  }
};
