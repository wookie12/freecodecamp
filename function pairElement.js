function pairElement(str) {
  var Expr = str.split('');
  var Array = [];
  
  for(var i=0; i<Expr.length; i++){
    switch (Expr[i]) {
  case 'A':
    Array.push(['A','T']);
    break;
  case 'T':
    Array.push(['T','A']);
    break;
  case 'G':
    Array.push(['G','C']);
    break;
  case 'C':
    Array.push(['C','G']);
    break;
 
  }
   
 }
  return Array; 
  
} 

pairElement('AT');
