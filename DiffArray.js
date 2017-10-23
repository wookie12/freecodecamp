function diffArray(arr1, arr2) {
    
        
    if(arr1.length===0){
      return arr2;
    }

    if(arr2.length===0){
      return arr1;
    }
  
    var newArray = [];
  
    for(var i=0; i<arr1.length; i++){
      for(var j=0; j<arr2.length; j++){
        if(arr1.indexOf(arr2[j]) == -1 && arr2.indexOf(arr1[i]) == -1){
          newArray.push(arr2[j]);
          newArray.push(arr1[i]);
            
        }
          else if(arr1.indexOf(arr2[j]) == -1 && arr2.indexOf(arr1[i]) != -1){
           newArray.push(arr2[j]);
           
          }
        
          else if(arr1.indexOf(arr2[j]) != -1 && arr2.indexOf(arr1[i]) == -1){
            newArray.push(arr1[i]);
            
          }
        
     }
         
        
        
      }
            
      
    
  return newArray;
  


  
} 
