


module.exports = function(item)
{
 
  var map  = {};
  
  for(let i = 0; i<item.length; i++)
  {
    
    var myObj = item[i].department;
    if(map[myObj]===undefined)
    {
      map[myObj] = 0; 
    }
    map[myObj] += item[i].sales;
    // depends on what you want to do
    
  }
    var total = 0; 
    var dept = "";
   
    for(var x in map)
    {
      if(map[x]>total)
      {
        dept = x;
        total = map[x];
      }
    }
    return dept;
    
  
  
}

// module.exports = function(list)
// {
  
//   console.log(list)
  
//   let map  = {};
  
//   for(let i = 0; i<list.length; i++)
//   {
    
//     let myObj = list[i].day;
//     if(map[myObj]===undefined)
//     {
//       map[myObj] = 0; 
      
//     }
//     map[myObj] += list[i].sales;
    
//   }
//    var total = 0; var day = undefined;
//   console.log(map);
//     for(var x in map)
//     {
//       if(map[x]>total)
//       {
//          day = x;
//         total = map[x];
//       }
//     }
//     return day;
// }