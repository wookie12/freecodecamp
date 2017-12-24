function fearNotLetter(str) {
  var array = [];
  for(var i=0; i<str.length; i++){
    array.push(str.charCodeAt(i));
        
  }
  for(var j=0; j<array.length; j++){
    if(array[j+1] - array[j] > 1){
      var missCode = array[j] + 1;
      var missLetter = String.fromCharCode(missCode);
        return missLetter;    
    }
    else{
      
    }
  }
 
}

fearNotLetter("abce");
