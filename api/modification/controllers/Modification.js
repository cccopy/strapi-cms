'use strict';

/**
 * Modification.js controller
 *
 * @description: A set of functions called "actions" for managing `Modification`.
 */

module.exports = {

  /**
   * Retrieve modification records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.modification.search(ctx.query);
    } else {
      return strapi.services.modification.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a modification record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.modification.fetch(ctx.params);
  },

  /**
   * Count modification records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.modification.count(ctx.query, populate);
  },

  /**
   * Create a/an modification record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.modification.add(ctx.request.body);
  },

  /**
   * Update a/an modification record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.modification.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an modification record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.modification.remove(ctx.params);
  }
};
