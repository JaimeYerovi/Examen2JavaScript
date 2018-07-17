/**
 * Libro.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreLibro:{
      type:'string',
      required: true
    },
    autor:{
      type:'string',
      required: true
    },
    editorial:{
      type:'string',
      required: true
    },
    paginas:{
      type:'string',
      required: true
    }

  },

};

