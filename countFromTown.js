module.exports = function(string,loc){

    {var emptyArray=[];
    
      var plates=string.split(",")
      console.log(plates);
    for (var i=0;i<plates.length;i++){
    var platesPaarl=plates[i].trim()
    if (platesPaarl.startsWith(loc)){
      emptyArray.push(platesPaarl);
    }
  
    }console.log(emptyArray.length)
     return emptyArray.length
    };
    };