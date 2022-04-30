/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
function Potdepot() {

  var clazz = {

    uso: function(x, y, z) {

      var total = 0;
    
      var total1 = 0;
    
      var total2 = 0;

      var total3 = 0;
    
      for(var i = 0; i < x.length; i++) {
        total = total + x[i];
        Math.round(total);
      }
    
      for(var r = 0; r < y.length; r++) {
        total1 = total1 + y[r]; 
        Math.round(total1);
      }
    
      for(var w = 0; w < z.length; w++) {
        total2 = total2 + z[w];
        Math.round(total2); 
      }

      total3 = total1 * total2;
    
      var totalp = Math.round(Math.pow(total, total3) * 100000000) / 100000000;

      return totalp;
    }
  };

  return clazz;
}