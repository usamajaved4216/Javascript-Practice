//                     'hello world'       String
//                      1,2,123             integer
//                       1.3                 float


// alert('apke net me kharabi hai') 

// document.write('<h1>my frist class</h1>')
// document.write('<h1>'+'my frist class'+'</h1>')

// var abc ='hello world'
// document.write(abc)
//                               increment and decrement

// var FirstName ='Usama'
// var SecondName ='Sarkar'
// document.write(FirstName+' '+SecondName )

// var num1 = '30'
// var num2 = 20
// document.write(num1+num2)

// ++num pre decriment mtlb 5 value hai tu 6 hojygi phele se
// --num pre decriment mtlb 5 value hai tu 4 hojygi phele se
// num++ post decriment mtlb 5 value hai tu wohi rahygi dubarah num karygy phr plus hogi 6
// num-- post decriment mtlb 5 value hai tu wohi rahygi dubarah num karygy phr plus hogi 4

// var a = 6
// var b = 3
// var res = a++ + a++ + ++b + b++ + a++
//          //  6  +  7  +  4  +  4  +  8 
// document.write(res)

// var a = 6
// var b = 3
// var c = 10
// var res = --a - --b + c++ + c-- + a
//         // 5  - 2   + 10  + 11  + 5
// document.write(res)





//                                 prompt

// var a =prompt('enter value 1')   
// var b =prompt('enter value 2')
// document.write(a+b)

// var a = +prompt('enter value 1')   vale check karne ka tareeqa
// var b = +prompt('enter value 2')
// document.write(a+b)

// document.write(typeof(a))



// + k sign pe concat karega us soorat main jab string hogi
// + k sign pe add karega jab dono integar hn 
// - subtract karega jab 1 string or 1 integar ho tab bhi or jab dono integar hn tb bhi
// same minus wali cheez multipal division modules pe apply hogi
// jab ek string hn usmai 'alphabet' or integar ho minus multipal divided laga hoga 
// to runtime pe decide karyga or opreation perform karega 

//                            if ,else if 


// = assigning operator
// == value check 
// ===value ke sath data type bhi chek
// && left and right dono ka true hona zaroori hai
// || left ya right dono me se kisi ek ka true hona zaroori hai
// <less then
// > greater then
// <=less then equal to
// >= greater then equal to
// != not equal to

// if (4<5){
//     document.write("true value")
// }
// else{
//     document.write("wrong hai")
// }

// var email = 'admin'
// var password = 'admin'             //Admin
// if (email == password ) {
//     document.write('login successful')
// }
// else {
//     document.write('invalid user name or password')
// }

// var email = prompt ('enter email')
// var password = prompt ('enter password')
// if (email=='usama' && password=='1234567' ) {
//     document.write('login successful')
// }
// else {
//     document.write('invalid user name or password')
// }

// var userInput = +prompt("Enter Percentage")
// if (userInput >80 && userInput <101){
//     document.write("A+")
// } 
// else if (userInput >70 && userInput <81){
//     document.write("A")
// } 
// else if (userInput >60 && userInput <71){
//     document.write("B")
// } 
// else if (userInput >50 && userInput <61){
//     document.write("C")
// } 
// else if (userInput >40 && userInput <51){
//     document.write("D")
// } 
// else{
//     document.write('fail')
// }

// const percentage = 55
// if(percentage >= 80) {
//     console.log('grade A+');
// }
// else if (percentage < 80 && percentage >=70){
//     console.log('grade A');
// }
// else if (percentage < 70 && percentage >=60){
//     console.log('grade b');
// }
// else{
//     console.log('aloo lelo');
// }
 

// const wiket = 4
//  if(wiket > 6) {
//     console.log('pakistan jeet gaya');
// } 
//  else if(wiket > 4){
//     console.log('drow game');
// }
//  else if(wiket > 2){
//     console.log('paiso ke khatir \npakistan har gaya');
// }


// alert("Thanks for your input!");
// var name = "Mark";

/*---Alert--- */

// Question 1

// let name = prompt('Enter your name')
// alert(name+ ' ' +'Welcome to Jvascript'


// Question 2

// alert('Error! apna correct password dalo')


// Question 3

//   alert('line break \nsuccessfuly linebreak')


// Question 4

// alert('Web and mobile Developer ')
// alert('full stack \nmern stack ')


// Question 5

// console.log('alert("browsers developer console")')
// alert("browsers developer console")




 //*--- Variable for strings---*/


// Qeustion 1

// let username = "Usama Javed"
// console.log(username);


// Question 2

// let myName = "Usama Javed"
// console.log(myName);



// Question 3

// let titledMessage = "Hello World"
// alert(titledMessage);



// Question 4

// let bio = 'Students biodata'
// alert(bio);
  
// let nam = 'Usama Javed'
// alert(nam)

// let age = 17
// alert(age )

// let course = "Web And Mobie developer"
// alert(course);



// Question 5

// let variable = "Hello JS"
// alert(variable + '\n'+ 'JS')



// Question 6

// let selfName = 'Usama Javed'
// let numberOfChildren = '0' 
// let gLocation = 'pakistan'
// let jobTitle = 'Student'
// alert('My name is ' + selfName + ' I have ' + numberOfChildren + ' kids live in ' + gLocation + ' and iam a ' +jobTitle);



// Question 7

// let Email = 'usamajaved4216@gmail.com'
// let emailAddress = "My Email Address is " + Email
// alert(emailAddress);



// Question 8

// let book = 'A smart way to learn JavaScript'
// alert('I am learning JS from ' + book)



// Question 9

// let nam = 'Usama Javed'
// let age = 19
// let institute = 'xpertizo university'
// let course = 'Mobile & Cloud Computing - Module A'
// let script = 'My name is ' + nam + ' I am ' + age + ' years old. I study in ' + institute + ' and I enrolled in ' + course  
// alert(script);



// Question 10

// document.writeln('This is last question of variable for string through js');






/*---Variable for number ---*/



// Question 1 

// let age = 17
// alert(age)




// Question 2

// let times = 1
// times = ' You visited this site ' + times + ' times '
// alert(times)


// Question 3


// let birthYear = 2004
// birthYear = ' My birth year is ' + birthYear
// document.write(birthYear)


// Question 4 

 
// let Name = 'usama'
// let quantity = 7
// let product= 'Cargo(L)'
// let clothingStore = Name + ' order ' + quantity + ' ' + product + ' abc Clothing store'
// document.write(clothingStore)


// function myname() {
//     console.log('hello shabana')
//     console.log('hello shabana')
//     console.log('hello shabana')
//     console.log('hello shabana')
//     console.log('hello shabana')
// }

// myname()
// myname()

// function abc(name , age , salery) {
//     console.log('my name is ' + name + ' and my age is ' + age + 'and my salery is ' + salery)
// }
// abc( 'Usama Sarkar' ,19 , 35000)

// function abc(num1, num2){
//     // console.log(num1 + num2)
//     const sum = num1 + num2
//     return sum
// }
// console.log(abc (10, 5))

// let abc  = prompt('enter your name')
// let price1 = prompt('enter price 1 name')
// let price2 = prompt('enter price 2 name')
// let price3 = prompt('enter price 3 name')
// let price4 = prompt('enter price 4 name')
//  function allDetail(appusername, price1 , price2 ,price3 ,price4){
//     console.log(allDetail('usama' , 20 , 30 , 10 , 5))
//  }
//  console.log(allDetail('usama' , 20 , 30 , 10 , 5))


//                                arry

// let fruits = ['1','2','3','4','5','6','7','8','9','10']
// fruits.splice(4,3 , 'hello worls')
// // fruits.splice(3,1)
// // fruits.splice(7,1)
// console.log(fruits)
// document.write(fruits)

// function greetUser(userName){
//     console.log('hello world '+ userName)
//     return(userName)
// }
// console.log(greetUser('abdullah'))

// for (let i= 1; i < 11; i++){
//     console.log(i);
// }

// let userName = prompt("enter any number to get its multiplication table")
// const div = document.querySelector('.abc');
// for(let i = 1; i < 11; i++ ){
//     div.innerHTML += (userName + " x " + i + ' = ' + userName * i + '</br>');
// }

// const input = document.querySelector('.abc')
// function click(){
//     console.log(input.abc)
// }


// for (let i= 1; i <= 11; i++){
//     console.log(i);
//     for (let j = 1; j< 10; j++) {
//         console.log(j +  " x "  + i + " = " + i)
//     }
// }


//while loop

// let i = 1;
// while (i < 10) {
//     console.log(i);
//     i++

//       for (let j = 1; j< 10; j++) {
//         console.log(j +  " x "  + i + " = " + j*i)
//     }
// }

// let i= 0
// do {
//     console.log(i)
//     i++
// } while (i <10 );


// const name = " usama sarkar";
// const age = 19;
// console.log (`my name is  ${name}
// and my age is ${age}`)

// const fruits = [ 'mango' , 'banana ', 'apple ', 'orange' , 'graps']
// for (let i = 0 ; i < fruits.length; i++ )



// console.log(`${fruits[i]} and its index number is ${i}`)


//                        LOOPS

// let string = ""
// let userinp = prompt("enter value")
// for (i=1; i>=userinp; i++){ //seedha counting
//     string = string + "*"
//     if(i === userinp0){
//         document.write(string.length-1)
//     }
                                                      
    
// }

// var i;
// for (i=10; i>=0; i--){                       //reverse countion
//     document.write(i+' usama javed</br>')
// }


// var arr =[1,2,3,4,5,6,7,8,9,10]
// for ( var i=0; i<10; i++ ){
//     document.write(arr[i],"<br>")
// }

// var arr =[1,2,3,4,5,6,'usama',7,8,9,10]
// for ( var i=0; i<arr.length; i++ ){
//     document.write(arr[i],"<br>")
// }

// var userInput= +prompt("inter value")
// for (var i=1; i<=10; i++){
//     document.write(userInput+" x "+i+" = " +userInput*i, '</br>')
// }

//                       nested loop

// var userInp = prompt("Enter city")
// var arr = ['Pakistan','dubai','canada','america','soudia','plastin']
// var match = false
// for (var i=0; i < arr.length; i++){
//     if(userInp == arr[i]){
   
//     match = true
//     alert("city found")
//     break
//     }
// }
// if(match == false){
//     alert("city not found")
// }

// let arr = ['usama', 'ali' , 'ayan', 'sheraz']
// let arr2 = ['javed','khan']                  normal
// for (let i=0; i<arr.length; i++){
//     document.write(arr[i]+' '+ arr2+'<br>')
// }

// let arr = ['usama', 'ali' , 'ayan', 'sheraz']
// let arr2 = ['javed','khan']
// for (let i=0; i<arr.length; i++){
// for(let j=0; j<arr2.length; j++){
//     document.write(arr[i]+' '+ arr2[j]+'<br>')
// }
// }


//                                    todo app

// let getul = document.getElementById("ul");
// function abc(){
//     let a = document.getElementById("inp");    //.value
//     let li = document.createElement("li");
//          //console.log (li)
//      let litext = document.createTextNode(a.value)                // ('usama sakar');
//      li.appendChild(litext)
//          // console.log(li)
//     getul.appendChild(li)
//     a.value = " "
//    let deletebtn = document.createElement("button")
//   let btntext = document.createTextNode("Delete")
//   deletebtn.appendChild(btntext) 
//   li.appendChild(deletebtn) 
//   deletebtn.setAttribute('onclick','del(this)')
//   let editbtn = document.createElement("button")
//   let editbtntext = document.createTextNode("Edit")
//   editbtn.appendChild(editbtntext)
//   li.appendChild(editbtn)
//   editbtn.setAttribute("onclick",'editfun(this)')
// }
// function deleteall (){
//     getul.innerHTML = ' '
// }
// function del(e){
//   e.parentNode.remove()                 // console.log(e)
// }
// function editfun(e){
//   let a = prompt('Enter Edit Value',e.parentNode.firstChild.nodeValue)
//   e.parentNode.firstChild.nodeValue = a
// }



// function demo(){
//     document.getElementById('demo').style.fontSize='35px'
// }
