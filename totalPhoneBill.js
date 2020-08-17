
module.exports = function(item){


        var list = item.split(',')
        
        var calls = [];
        var sms = [];
       for(var i=0;i<list.length;i++){
      if(list[i].trim().startsWith("sms")){
        sms.push(list[i].trim())
      }
          if(list[i].trim().startsWith("call")){
            calls.push(list[i].trim())
            
          }
       }
       
      
       var total = (calls.length)*2.75 + (sms.length)*0.65
        return ("R" + total.toFixed(2))
       
      }
          
