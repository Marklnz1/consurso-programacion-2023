
function dblLinear(n) {
    
    let array = [1];

    let a = Fy(1);
    let b = Fz(1);
    array.push(a,b);
    let valores =[a,b];
    for(let i=0; i<n*n;i++){
        let v = valores.shift();
        a = Fy(v);
        b = Fz(v);
        array.push(a,b);
        valores.push(a,b);
    }
    array.sort((a,b)=>b-a);
    let obj = {};
    for(let value of array){
        obj[value] = 0;
    }
    array = Object.keys(obj);
    return parseInt(array[n]);
   
  }        
  function Fy(x){
    return 2*x+1;
  }

  function Fz(x){
    return 3*x+1;
  }