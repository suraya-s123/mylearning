let text = "Please Visit Website My Website";
let newText= text.replace("Website","House");
console.log(newText);


// replaceAll

let txt= "I love dogs. Dogs are very easy to love. Dogs are very popular ";
 txt= txt.replaceAll("dogs","animal");
 txt= txt.replaceAll("Dogs","animal");

console.log(txt);

// toUppercase() LowerCase use
let cases1 ="I am A Student of Southest University";
console.log(cases1.toUpperCase());
console.log(cases1.toLowerCase());

// JavaScript String concat()
 
let test1 = "Hello";
let text2= "world";
let text3 = test1.concat(" ", text2);
console.log(text3.concat(" ", text2));

// JavaScript String trim()
let trim1= "     I am     a    student  ";
let trim2= trim1.trim();
console.log(trim2);
console.log("lenght trim1 = " + trim1.length + "<br>lenth trim2= " + trim2.length );
let wt4="    right"
let rmv
console.log(wt4.trimStart());
console.log(wt4.length);


// padStart()
 
let pad= "59"; // index 01
let padded= pad.padStart(9,"suraya "); // 01+...9 with whitspace 
 
console.log(pad)

console.log(padded); //output = suraya 59



let pad1= "59";
let padded1= pad1.padEnd(4," 123459");
console.log(padded1)

let pad3= "Other"
console.log(pad3.padEnd(11," Bite")); // output= Other Bite
