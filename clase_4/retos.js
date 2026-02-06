let x=2; 
let y=3; 
let z=4; 

const func=(a,b,c)=> {
    x=1;
    b=2;
    
    return a + b +c+x;
}   

console.log(func(x,y,z)+func(func(0,0,1),1,1));