const sayHelloToConsole = function( name ){
  console.log( "Hello, " + name );
}

const returnSayHello = function( name ){
  return "Hello, " + name;
}

sayHelloToConsole("Caliban");
const greeting = returnSayHello("Miranda");
console.log( greeting );

//sayHello("ferdinand");
