module.exports =  function(items, threshold){
    var itemsOver = 0
   var y = []
   for(var i=0;i<items.length;i++){
     var listItem2 = items[i];
     itemsOver = items[i].qty
    if(listItem2.qty > threshold){
        y.push(listItem2)
   } 
   }
  return y
  } 