function isBoolean(text){
  for(var i=0; i<text; i++){
    console.log(text);
  }
}

isBoolean('()'); //false
isBoolean('(()'); //false
isBoolean(')('); //false
isBoolean('))('); //false
