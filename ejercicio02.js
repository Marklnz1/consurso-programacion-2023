// EJERCICIO 2

function fib(n) {
  let a = 0;
  let b = 1;
  let aux = 0;
  
      let bool = true;

  if(n==0){
    return BigInt(0);
  }else if(n<0){
  if(n==-1){
    return BigInt(1);
  }
    b = 0;
    a = 1;
    for(let i = 0; i < -n;i++){
      aux = a;
      a = b-a; 
     b = aux;
      
      if(bool&&Math.abs(a)+Math.abs(b) >=Number.MAX_SAFE_INTEGER){
        b = BigInt(b);
        a = BigInt(a);
        bool=false;
      }
    } 
    
  }else{
    for(let i = 0; i < n-1;i++){
      aux = b;
      b = b+a; 
     a = aux;
      
      if(bool && Math.abs(a)+Math.abs(b) >=Number.MAX_SAFE_INTEGER){
        b = BigInt(b);
        a = BigInt(a);
        bool=false;
      }
      
    }  
  }
  return BigInt(b);
  
}

