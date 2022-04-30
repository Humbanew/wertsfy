/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
function RaizBiquadratica() {

  var clazz = {

    uso: function(x) {

      var total = 0;
    
      for(var i = 0; i < x.length; i++) {
        total = total + x[i]; 
      }
    
      var totalp = Math.round(Math.sqrt(Math.sqrt(total)) * 100000000) / 100000000;

      return totalp;
    }
  };

  return clazz;
}