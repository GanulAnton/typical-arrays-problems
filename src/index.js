
exports.min = function min (array) {
  if (array == null || array == undefined || array.length == 0){
      return 0;
    }
    var a = array[0]; 
    array.forEach(element => {
      if(a > element){
        a = element;
      }
    });
  return a;
}

exports.max = function max (array) {
  if (array == null || array == undefined || array.length == 0){
      return 0;
    }
    var a = array[0];  
    array.forEach(element => {
      if(a < element){
        a = element;
      }
    });
  return a;
}

exports.avg = function avg (array) {
  if (array == null || array == undefined || array.length == 0){
      return 0;
    }
    var a = 0;
  array.forEach(element => {
     a += element;
  });
  a = a/array.length;
  return a;
}
