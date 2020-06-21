///// Chapters 21-25 task  1
//var first = prompt("Enter your First name");
//var second = prompt("Enter your second name");
//document.write(first+" "+second);



///// Chapters 21-25 task  2
//var fav = prompt("Which is your farvorite mobile");
//document.write("My favorite mobile phone is "+fav);
//document.write("<br> Length of string "+fav.length);


///// Chapters 21-25 task  3

//var str ="Pakistan"
//document.write("Indes of n "+str.indexOf("n"));


///// Chapters 21-25 task  4


//var str ="Hello World"
//document.write("Last index of l "+str.lastIndexOf("l"));



///// Chapters 21-25 task  5

//var str ="Pakistan"
//document.write("Character at index 3: "+str.charAt(3));



///// Chapters 21-25 task  6
//var first = prompt("Enter your First name");
//var second = prompt("Enter your second name");
//document.write(first.concat(second));



///// Chapters 21-25 task  7
//var str = "Hyderabad";
//document.write("City"+str);
//var res = str.replace("Hyder", "Islam");
//document.write("Replace"+res);


///// Chapters 21-25 task  8
//var message = “Ali and Sami are best friends. They play cricket and football together.”;
//var res = message.replace("and", "&");
//document.write("Replace"+res);

///// Chapters 21-25 task  9
//var num= "472";
//document.write("Value"+num);
//document.write("<br> Type:"+typeof(num));
//num=parseInt(num);
//document.write("Value"+num);
//document.write("<br> Type:"+typeof(num));

///// Chapters 21-25 task  10
//var str = prompt("Enter string");
//document.write("User inpur"+str);
//str = str.toUpperCase();
//document.write("Upper cae"+str);


/// Chapters 21-25 task  11
//var str = prompt("Enter string");
//document.write("User inpur"+str);
//var res = str.substr(1);
//title = str.charAt(0).toUpperCase();
//document.write("title case "+title+res);


/// Chapters 21-25 task  12
//var num = 35.36;
//document.write("Number :"+num);
//num = num.toString();
//var res = str.replace(".", "");
//document.write("Result :"+res);


/// Chapters 21-25 task  13
//var str = prompt("Enter string");
//if(str.match(/@/g)){
 // alert("Please Enter valid password");
//}
//else if(str.match(/./g)){
//  alert("Please Enter valid password");
//}
//else if( str.match(/!/g)){
 // alert("Please Enter valid password");
//}else if(str.match(/,/g)){
 // alert("Please Enter valid password");
//}
/// Chapters 21-25 task  14
//var A = ["cake", "apple pie", "cookie", "chips", "patties"];
//var saerch=prompt("Welcome to abc bakery.What do you want to order sir/ma'am?");
//var temp=0;
//for(i=0;i<=A.length-1;i++){
 //   if(A[i]==saerch){
  //      document.write("Cookie is available at index "+i+"is your bakery")
  //      ++temp;
  //  }
///}
//if(temp<1){
 //   document.write("We are sorry. pastry is<b> not avaiable</b> in our bakery ");
//}





/// Chapters 21-25 task  17
//var str = prompt("Enter string");
//document.write("User input :"+str);
//document.write("Last character of input "+str.charAt(str.length-1));




/// Chapters 26-30 task  1

//var num = parseFloat(prompt("Enter any digit"));
//document.write("Number "+num);
//document.write("Round of "+ Math.round(num));
//document.write("floor value "+ Math.floor(num));
//document.write("ceil value "+ Math.ceil(num));


/// Chapters 26-30 task  2

//var num = parseFloat(prompt("Enter any digit"));
//document.write("Number "+num);
//document.write("Round of "+ Math.round(num));
//document.write("floor value "+ Math.floor(num));
//document.write("ceil value "+ Math.ceil(num));

/// Chapters 26-30 task  3
//var num = 485.6;
//document.write(Math.abs(num));

/// Chapters 26-30 task  4
//document.write("Dice value "+Math.floor(Math.random() * 6));  

/// Chapters 26-30 task  5
//res = Math.floor(Math.random() * 2);
//if(res==1){
//  document.write(res+"<br>Random coin value: Tail")
//}
//else if(res==2){
 // document.write(res+"<br>Random coin value: Head")
//} 

/// Chapters 26-30 task  6
//document.write("Random value from 1 to 100: "+Math.floor(Math.random() * 100));  


/// Chapters 26-30 task  8
//var num =  parseInt(prompt("Enter secret num"));
//res = Math.floor(Math.random() * 10);
//if(res==num){
//  alert("Congratulation")
//}
//else ){
 // alert(res+"Try again")
//} 




/// Chapters 31-34 task  1


//var today = new Date();
//var date =today.toDateString();
//document.write(date);
//var today = new Date();
//var time = today.toTimeString();
//document.write(time);


/// Chapters 31-34 task  2
//var d = new Date();
//var weekday = new Array(7);
///weekday[0] = "Sunday";
//weekday[1] = "Monday";
//weekday[2] = "Tuesday";
//weekday[3] = "Wednesday";
//weekday[4] = "Thursday";
//weekday[5] = "Friday";
//weekday[6] = "Saturday";

//var n = weekday[d.getDay()];
//document.write(n);


// Chapters 31-34 task  3
//var d = new Date();
//var weekday = new Array(7);
//weekday[0] = "Sun";
//weekday[1] = "Mon";
//weekday[2] = "Tue";
//weekday[3] = "Wed";
//weekday[4] = "Thu";
//weekday[5] = "Fri";
//weekday[6] = "Sat";

//var n = weekday[d.getDay()];
//alert(n);


/// Chapters 31-34 task  4
//var d = new Date();
//if(d.getDay()==0 || d.getDay() ==6 ){
 // document.write("It's fun day");
//}


 //Chapters 31-34 task  5
//var d = new Date();
//if(d.getDate<=15 ){
 // document.write("First Fifteen days of the month");
//}
//else{
 // document.write("Last days of the month");
//}


//Chapters 31-34 task  6
//var d = new Date("Dec 05, 2015 22:32:23");
//var old =  new Date("Jan 1, 1970");
//document.write("Current date"+d);
//var age = d.getFullYear("2015")-old.getFullYear("1970");
//document.write(d.getFullYear());
//var min = 60*24*354*age;
//var mili = 6000*60*24*354*age;
//document.write("<br>Elapsed miliseconds Since"+old.toDateString()+":"+mili);
//document.write("<br>Elapsed minutes Since"+old.toDateString()+":"+min);



//Chapters 31-34 task  7
//var time = new Date();
//if(time.getUTCHours()>12)
//document.write("AM");}
//else{
 // document.write("Pm");
//}


//Chapters 31-34 task  8

//var later = new Date("Thu Dec 31, 2020 00:00:00");
//document.write(later);



//Chapters 31-34 task  10
//var d = new Date("Dec 05, 2015 22:32:23");
//var n =  new Date();
//document.write("On the refrence of date"+d);
//var age = n.getFullYear()-d.getFullYear();
//document.write(d.getFullYear());
//var sec = 60*60*24*354*age;

//document.write(sec+"<br>Secods passed");


//Chapters 31-34 task  11
//var d = new Date();
//document.write("Current date :"+d.toDateString()+" "+d.toTimeString());
//d.setHours(d.getHours()-1)
//document.write("<br>1 hour ago, it was :"+d.toDateString()+" "+d.toTimeString());


//Chapters 31-34 task  12
//var d = new Date();
//alert("Current date :"+d.toDateString()+" "+d.toTimeString());
//d.setFullYear(d.getFullYear()-100)
//alert("100 years ago, it was :"+d.toDateString()+" "+d.toTimeString());


//Chapters 31-34 task  13
//var d = new Date();
//var bod = parseInt(prompt("Your birth year :"));
//var age=d.getFullYear()-bod;
//document.write("Your age is :"+age+"<br>your birth year is "+bod);


//Chapters 31-34 task  14
//document.write("<h1><b>K-Electric Bill</b></h1><br>");
//document.write("Customer Name<b>ABC</b><br>");
//document.write("Month <b>Fabruary</b><br>");
//document.write("Number of units <b>410</b><br>");
//document.write("Charges per unit <b>16</b><br>");

//var net =410*16;
//var late = net+350

//document.write("Net Amount Payable(within Due Date) <b>"+net+"</b><br>");
//document.write("Late surcharges <b>350</b><br>");
//document.write("Gross Amount Payable (After Due Date) <b>"+late+"</b><br>");



//Chapters 35-38 task  1
  
//var d = new Date();
//function myFunction() {
 //     document.write(d.toDateString()+" "+d.toTimeString());
//}
//myFunction();  


//Chapters 35-38 task  2
  
//function myFunction( fname, lname) {
//      document.write("Your are welcome "+fname+" "+lname);}
//myFunction("Rafique","Ahmed");  

//Chapters 35-38 task  3
  
//function myFunction( num1, num2) {
 //     document.write((num1+num2));   }
//myFunction(6,7);  


//Chapters 35-38 task  4
  
//function myFunction( num1,op, num2) {
 // num1=parseInt(num1); 
 // num2=parseInt(num2);
  //   if(op=="+"){
  //document.write((num1+num2));}
//else if(op=="-"){
 //   document.write((num1-num2));}
//else if(op=="*"){
 //     document.write((num1*num2));}
//else if(op=="/"){
  //      document.write((num1/num2));}    }
//myFunction(20,"+",7);  

//Chapters 35-38 task  5
  
//function myFunction( num1) {
 //     document.write((num1*num1));   }
//myFunction(6);  
//Chapters 35-38 task  6

//function factorial(n) {
 // return n ? n * factorial(n - 1) : 1;
//}

//alert( factorial(5) )

//Chapters 35-38 task  7
//function factorial(start, end) {
// for(var i=start;i<=end;i++){
 // document.write("5 * "+i+" = "+(5*i)+"<br>");
 //} }
//factorial(5,10) 

//Chapters 35-38 task  9
//function factorial(width,height=6 ) {
 // document.write(width*height);
 //}
//factorial(5) 


//Chapters 35-38 task  10
//function factorial(str ) {
 // if(str==str.split("").reverse().join("")){
 // document.write("palindrome");}
// }
//factorial("madam") 

//Chapters 35-38 task  11

//function myFunction(str){
//var ch = str.trim().split(" ");
//for(var i=0;i<=ch.length-1;i++){
//res = ch[i].substr(1);
//title = ch[i].charAt(0).toUpperCase();
//document.write(title+res+" ");
//}

//}

//myFunction("the quick brown fox"); 


//Chapters 35-38 task  12

//function myFunction(str){
//var ch = str.trim().split(" ");
//var temp=0;
//var tem=" ";
//for(var i=0;i<=ch.length-1;i++){

//if(temp<=ch[i].length){
//temp = ch[i].length;
//tem=ch[i];
//}}
//document.write(tem);
//}

//myFunction("Web Development Tutorial"); 


//Chapters 35-38 task  13

//function myFunction(str,let){

//var res = str.match(/o/g);

//document.write(res.length);
//}

//myFunction("Web Developooment let Tutorial","o"); 



//Chapters 35-38 task  14

//function calcCircumference(r){

//var cir = 2*3.14*r;

//document.write("The area is "+cir);
//}
//calcCircumference(3); 

//function calcArea(r){

  //var area = 3.14*(r*2);
  
  //document.write("<br>The area is "+area);
  //}
  //calcArea(5); 