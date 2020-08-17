module.exports = function(item){
    var x = item.split(', ')
  var paarl = [];
   for( var i=0;i < x.length;i++){
  if (x[i].trim().startsWith("CJ")){
     paarl.push(x[i])
    
      }
  }
  console.log(paarl)
  return paarl.length;
};
