//cambios en el archivo
// funciones
// function hello() {
//     console.log('Hola Mundo')
//     console.log('trabajando con JS')
// }
//
//
//
// hello()
// Ejemplo 1
// function hello() {
//     console.log('Hola Mundo')
//     console.log('trabajando con JS')
// }
//......................................................
// Ejemplo 2
// function hello(){
//     return function(){
//         return 'hola mundo'
//     }
// }
// console.log(hello()
//
//

//........................................................
// Ejemplo 3
// Funciones por parametro
// function hello(name) {
//     return 'hola '+ name
// }
// console.log(hello('laura'))

//........................................................  
// Ejemplo 4
// function add(x, y){
//     return x + y
// }
// console.log(add(10,20))
//..........................................................
// Ejemplo 5
// Default parameters
// function add(x=23, y=0){
//    return x + y
//     }
// console.log(add(10,20))

//..........................................................
// Objetos js 
//Ejemplo 6
// const user= {
// name:'laura',
// lastname:'Vasquez',
// addres:{
//     country:'Colombia',
//     city:'bogota',
//     street:'ibague',
// },
// friends:['brandon','natalia'],
// active:true,
// sendMail: function() {
//  return'sending email...'
// }
// console.log(user.address.city)
// console.log(user.friends)
// console.log(user.active)
// /console.log(user.sendMail)
//............................................................
// Ejemplo 7
//  Shorthand property names
//const name = "laptop"
// const price = 3000
// const newProduct = {
//   name,
//   price
// }
// console.log(newProduct)

//............................................................
// Ejemplo 8
// manipulacion del dom 
// const title = document.createElement('h1')
// title.innerText = 'Hola mundo desde JS'

// const button = document.createElement('button')
// button.innerText = 'click'

// button.addEventListener('click', function () {  
// title.innerText = 'Texto actualizado con JS'   
//  alert('se realizo un click')})
// document.body.append(title)
// // document.body.append(button)

//............................................................
// Ejemplo 9
// destructuring
// const user = {
//     name: "joe",
//     age: 30,
// };

// function printInfo(user) {
//     const { name, age } = user;

//     console.log(name, age);
//     return "<h1>Hola " + name + "</h1>";
// }

// console.log(printInfo(user));

// document.body.innerHTML = printInfo(user);

//.............................................................................
//Ejemplo 10 Funciones flecha
//  Inline arrow functions
// const showText = () => 'Hola Mundo'
// const showNumber = () => 22;
// const showBoolean = () => true;
// const showArray = () => [1, 2, 3]
// const showObject = () => ({ name: 'ryan' })

// console.log(showText())
// console.log(showNumber())
// console.log(showBoolean())
// console.log(showArray())
// console.log(showObject())

// const button = document.createElement('button');
// button.innerText = 'click me'

// button.addEventListener('click', () => {
// alert('clicked')
// });

// document.body.append(button)
//;
//..............................................................................
// Ejemplo 11
// return
// const button = document.createElement('button');
// button.innerText = 'click me';

// const isAuthorized = true;

// button.addEventListener('click', () => {
// if (isAuthorized) {
//     return alert('esta autorizado');
// }

// alert('no esta autorizado');
// });
// document.body.append(button);
//..............................................................................
// Ejemplo 12
// String literals
// document.body.append(button);
// const background = 'yellow'
// const color = 'blue'
// const isAuthorized = true;

// const button = document.createElement("button");
// button.innerText = "click me";
// button.style = "background: ; color: white;"
// button.style = background: ${isAuthorized ? "blue" : "red"}; color: ${color}

// button.addEventListener("click", () => {
//     if (isAuthorized) {
//         return alert("esta autorizado");
//     }

//     alert("no esta autorizado");
// });

// document.body.append(button);

//..............................................................................
// Ejemplo 13 
//  metodos de arrays (map, filter, foreach, concat)
// const names = ['ryan', 'joe', 'maria']
// const newNames = ['marcos', 'mario', 'john']

// console.log(names)
// console.log(newNames)
// console.log(names.concat(newNames))
//...............................................................................
// Ejemplo 14
// spread operator
// const user = {
//     name: "ryan",
//     lastname: "ray"
// }

// const address= {
//     street: 'main street 123',
//     city: 'bogota'
// }

// const userInfo = {
//     ...user,
//     ...address
// }

// console.log(user)
// console.log(address)
// console.log(userInfo)

//................................................................................
//Ejemplo 15
// Ecmascript modules
// export function add(x, y) {
//     return x + y
// }

// export function multiply(x, y) {
//     return x * y
// }

// export const title = 'js for react'
// export const active = true
// export const points = [10, 20, 30]

// export default add
// import addModule from "./add";
// console.log(addModule())

//................................................................................
//Ejemplo 16
// optional Chaining
// const person = {
//     name: 'ryan',
//     address: {
//         city: 'london'
//     },
// }

// // console.log(person.location?.city)
// const ul = document.createElement("ul")

//................................................................................
//Ejemplo 17
// Async/await
// async function loadData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
//     data.forEach(function (post) {
//         const li = document.createElement("li");
//         li.innerText = post.title;
//         ul.append(li);
//     });
//     document.body.append(ul);
// }

// loadData()
// console.log("linea 2");

//Hoal mundo desde JS