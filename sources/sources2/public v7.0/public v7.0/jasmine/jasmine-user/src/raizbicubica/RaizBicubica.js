/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
function RaizBicubica() {

  var clazz = {

    uso: function(x) {

      var total = 0;
    
      for(var i = 0; i < x.length; i++) {
        total = total + x[i]; 
      }
    
      var totalp = Math.round(Math.cbrt(Math.cbrt(total))* 100000000) / 100000000;

      return totalp;
    }
  };

  return clazz;
}