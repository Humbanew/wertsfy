/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
function Potencia() {
  
  var clazz = {

    uso: function(x, y) {

      var total = 0;
      
      var total1 = 0;
      
      for(var i = 0; i < x.length; i++) {
        total = total + x[i];
      }
      
      for(var r = 0; r < y.length; r++) {
        total1 = total1 + y[r];
      }
      
      var totalp = Math.round(Math.pow(total, total1) * 100000000) / 100000000;

      return totalp;
    }
  };
  return clazz;
}