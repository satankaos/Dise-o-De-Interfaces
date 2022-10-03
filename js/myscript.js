//LINEA     
//alert("hello to js ");
/**BLOQUE*/ 
//console.log("chavaleria");
//document.write (a); 
var a = 2;//variables globales en app
let chair ="one chair"//variable interna 
console.log(a);
console.log(chair);
let testbooleAN= true;
console.log(testbooleAN);
let testnumber= 9999;
console.log(testnumber);
let teststring= "text";
console.log(teststring);
let boleanO= new Boolean(true);
//objetos son prototipos 
console.log(boleanO);
let name1 ="jhon";
let sname2 ="doe";
let age =23;

//let question ="how are you "+name1+" "+sname2+"?";
let question ="how are you ".concat(name1)+" ".concat(sname2)+"?";
console.log(question);
//backtick
let question1 =`how are you ${name1}  ${sname2}?`;
console.log(question1);
let answer = "he is "+age+" years old";
console.log(answer);
let a1 = 12;
let  b = 6;
let sum = a1 + b;
let res = a1 - b;
let mult = a1 * b;
let div = a1 / b;
let mod = a1 % b;
let exp = a1 ** b;
let incr = ++a1;
let dec = --a1 ;
console.log(sum);
console.log(res);
console.log(mult);
console.log(div);
console.log(mod);
console.log(exp);
console.log(incr);
console.log(dec);
//asignacion 
let x =5;
let y =6;
console.log(x+=5);
console.log(x-=5);
console.log(x*=3);
console.log(x/=2);
//fype of
console.log(typeof(testbooleAN));
console.log(typeof(testnumber));
console.log(typeof(teststring));
console.log(typeof(boleanO));
let tstnull= null;
let tstundefined;
console.log(typeof(tstnull));
console.log(tstundefined);
//array
var array0=[];
var array1=new Array(3);
var array2=new Array(3,5);
var array3=new Array(3,5,"sevilla",true,array2);
console.log(array0);
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array0[1]);
console.log(array3[2][0]);
console.log(array3.length)
console.log(array3.push("españita"));
array3.push("españita");
array3.unshift(9);
console.log(array3);
for (let i = 0; i < array3.length; i++) {
    console.log("hola"+array3[i]);
}
for (let i = (array3.length-1); i >= array3.length; i--) {//mas optima 
    console.log("hola"+array3[i]);
}
let i = array3.length-1
for(i;i>=0;1--){
    console.log(`la iteracion es ${array3[i]} `)
}
array3.forEach(function(element){

    console.log(`mens ${element}`)
}
);