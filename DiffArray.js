function diffArray(arr1, arr2) {
    
    //if either array is empty        
    if(arr1.length===0){
      return arr2;
    }

    if(arr2.length===0){
      return arr1;
    }
  
    var newArray = [];
  
    for(var i=0; i<arr1.length; i++){
      for(var j=0; j<arr2.length; j++){
          
        //where both arrays contain items that are different from each other  
        if(arr1.indexOf(arr2[j]) == -1 && arr2.indexOf(arr1[i]) == -1){
          newArray.push(arr2[j]);
          newArray.push(arr1[i]);
            
        }
          //where array 1 is a subset of array 2
          else if(arr1.indexOf(arr2[j]) == -1 && arr2.indexOf(arr1[i]) != -1){
           newArray.push(arr2[j]);
          }
        
          //where array 2 is a subset of array 1
          else if(arr1.indexOf(arr2[j]) != -1 && arr2.indexOf(arr1[i]) == -1){
            newArray.push(arr1[i]);
          }
      
     }
                   
      }
   
  
return newArray;
 
} 
