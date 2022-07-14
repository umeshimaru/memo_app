'use strict'
{



const btn = document.querySelector('div.button');
const a = document.querySelector('div.button1');
const all_delete= document.querySelector('div.button2');



btn.addEventListener('click',()=>{
 const li = document.createElement('li');
const input = document.querySelector('input');
li.textContent = input.value;
const ul = document.querySelector('ul');
ul.appendChild(li);



input.value =' ';
input.focus();

});

a.addEventListener('click',() => {
  const item = document.getElementById('ul');
item.lastElementChild.remove();
});

all_delete.addEventListener('click',()=>{const all_del= document.querySelectorAll('li');
all_del.forEach(a =>{
  a.remove();
});
});





}