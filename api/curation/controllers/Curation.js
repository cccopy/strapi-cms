'use strict';

/**
 * Curation.js controller
 *
 * @description: A set of functions called "actions" for managing `Curation`.
 */

module.exports = {

  /**
   * Retrieve curation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.curation.search(ctx.query);
    } else {
      return strapi.services.curation.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a curation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.curation.fetch(ctx.params);
  },

  /**
   * Count curation records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.curation.count(ctx.query, populate);
  },

  /**
   * Create a/an curation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.curation.add(ctx.request.body);
  },

  /**
   * Update a/an curation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.curation.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an curation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.curation.remove(ctx.params);
  }
};
