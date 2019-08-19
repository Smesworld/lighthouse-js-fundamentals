for( let x = 100; x <= 200; x++){
  let loopy = false;
  let lighthouse = false;

  if( x % 3 === 0 ){
    loopy = true;
  }
  if( x % 4 === 0 ){
    lighthouse = true;
  }

  if( loopy && lighthouse ){
    console.log( "LoopyLighthouse");
  } else if( loopy ){
    console.log( "Loopy" );
  } else if( lighthouse ){
    console.log( "Lighthouse" );
  } else {
    console.log( x );
  }
}