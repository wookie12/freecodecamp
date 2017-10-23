function translatePigLatin(str) {
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  var theChar = str.charAt(0);
  var consonant = /[bcdfghjklmnpqrstvwxyz]{1,}/;
  
  if(vowel.indexOf(theChar) != -1){
    var splitStr = str.split('');
    splitStr.push('way');
    return splitStr.join('');
  } 
  
  else if(vowel.indexOf(theChar) == -1){
    if(theChar.search(consonant) != -1 && str.charAt(1).search(consonant) == -1){
      str = str.substr(1) + str.charAt(0) + 'ay';   
      return str;
    }
    if(theChar.search(consonant) != -1 && str.charAt(1).search(consonant) != -1){
      str = str.substr(2) + str.charAt(0) + str.charAt(1) + 'ay';   
     return str;
    
  }
    
 
 }                                                                   
                                                                          
  
} 

