module.exports = function(items){
    //console.log(items)
   var itemsOver20 = 0
   var x = []
   for(var i=0;i<items.length;i++){
     var listItem = items[i];
     itemsOver20 = items[i].qty
    if(listItem.qty > 20){
        x.push(listItem)
   } 
   }
  return x
  }