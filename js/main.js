'use strict'
{



const btn = document.querySelector('div.button');
const del = document.getElementById('del');
const all_delete= document.getElementById('all_del');



btn.addEventListener('click',()=>{
 const li = document.createElement('li');
const input = document.querySelector('input');
li.textContent = input.value;
const ul = document.querySelector('ul');
ul.appendChild(li);



input.value =' ';
input.focus();

})

del.addEventListener('click',()=>{
  const item = document.getElementById('ul');
item.lastElementChild.remove();

})

all_delete.addEventListener('click',()=>{const all_del= document.querySelectorAll('li');
all_del.forEach(a =>{
  a.remove();
});
})





}