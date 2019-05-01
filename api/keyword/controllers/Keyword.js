'use strict';

/**
 * Keyword.js controller
 *
 * @description: A set of functions called "actions" for managing `Keyword`.
 */

module.exports = {

  /**
   * Retrieve keyword records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.keyword.search(ctx.query);
    } else {
      return strapi.services.keyword.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a keyword record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.keyword.fetch(ctx.params);
  },

  /**
   * Count keyword records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.keyword.count(ctx.query, populate);
  },

  /**
   * Create a/an keyword record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.keyword.add(ctx.request.body);
  },

  /**
   * Update a/an keyword record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.keyword.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an keyword record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.keyword.remove(ctx.params);
  }
};
