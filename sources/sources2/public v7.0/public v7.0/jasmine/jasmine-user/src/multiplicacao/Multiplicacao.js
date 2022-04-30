/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
function Multiplicacao() {

  var clazz =  {

    uso: function(x) {

      var total = 1.0;

      for(var i = 0; i < x.length; i++) {
        total = total * x[i];
        Math.round(total);
      }

      return Math.round(total * 100000000) / 100000000;
    }
  };

  return clazz;

}