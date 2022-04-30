/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
function LogBase10() {

  var clazz = {

    uso: function(x) { 
      
      var total = 0;

      for(var i = 0; i < x.length; i++) {
        total = total + x[i]; 
      }
    
      var totalp = Math.log10(total);
      
      return totalp;
    }
  };

  return clazz;
}