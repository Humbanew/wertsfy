/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
function LogBase2() {

  var clazz = {

    uso: function(x) { 
      
      var total = 0;

      for(var i = 0; i < x.length; i++) {
        total = total + x[i]; 
      }
    
      var totalp = Math.log2(total);
      
      return totalp;
    }
  };

  return clazz;
}