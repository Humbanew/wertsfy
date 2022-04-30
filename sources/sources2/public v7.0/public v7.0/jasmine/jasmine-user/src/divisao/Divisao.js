/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
function Divisao() {
  
  var clazz = {

    uso: function(x, y) {

      var total = 0;
    
      var total1 = 0;
    
      for(var i = 0; i < x.length; i++) {
        total = total + x[i]; 
      }
    
      for(var j = 0; j < y.length; j++) {
        total1 = total1 + y[j]; 

        if(y[j] == 0) {
          return 0;
        }

        if(y[j] == 0.0) {
          return 0.0;
        }
      }
    
      var totalp = Math.round((total / total1) * 100000000) / 100000000;

      return totalp;
    }
  };

  return clazz;
}