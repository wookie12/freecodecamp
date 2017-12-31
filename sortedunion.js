function uniteUnique(arr) {
  var args = Array.from(arguments);
  
  var newArr = args.reduce(function(total, amount){
    for(var i=0; i<amount.length; i++){
      if(total.indexOf(amount[i]) === -1){
        total.push(amount[i]);
      }
    }
    return total;
    
  });
  
  return newArr;
  
  
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
