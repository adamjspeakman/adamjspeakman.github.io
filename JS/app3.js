/*//changing the heading element to red when you select it
const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
//addding functionality for listing for mouse clicks
myButton.addEventListener('click', () =>{
myHeading.style.color = myTextInput.value;
});
*/
/*
const mylist = document.getElementsByTagName('li');

for(let i=0;i< mylist.length;i+=1){

  mylist[i].style.color='purple';
}
const errorNotPurple = document.querySelectorAll('.error-not-purple');

for(let i=0;i< errorNotPurple.length;i+=1){

errorNotPurple[i].style.color='red';
}
const evens = document.querySelectorAll('li:nth-child(odd)');

for(let i=0;i< evens.length;i+=1){

evens[i].style.backgroundColor='lightgrey';
}
*/
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');
button.addEventListener('click',()=>{

  p.innerHTML = input.value+':';

})
