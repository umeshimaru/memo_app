'use strict'
{



const btn = document.getElementById('btn');



btn.addEventListener('click',()=>{
 const li = document.createElement('li');
const input = document.querySelector('input');
li.textContent = input.value;
const ul = document.querySelector('ul');
ul.appendChild(li);


input.value =' ';
input.focus();

})





}