/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
function Subtracao() {

  var clazz = {

    uso: function (x, y) {

      var total = 0.0;

      var total1 = 0.0;

      for(let i = 0; i < x.length; i++) {
        total = total + x[i]; 
      }

      for(let i = 0; i < y.length; i++) {
        total1 = total1 + y[i]; 
      }

      return Math.round((total - total1) * 100000000) / 100000000;
    }
  };

  return clazz;
}