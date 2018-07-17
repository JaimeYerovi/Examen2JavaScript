/**
 * Autor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreAutor:{
      type:'string',
      required: true
    },
    editorial:{
      type:'string',
      required: true
    },
    imagen:{
      type:'string',
      required: true
    }

  },

};

