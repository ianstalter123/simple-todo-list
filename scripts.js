body = document.querySelector('body');
input = document.createElement('input')
button = document.createElement('button')
item = document.createElement('div')
ul = document.createElement('ul')
h1 = document.createElement('h1')

h1.innerHTML = 'Todo List'

input.placeholder  = "what do you need to do"




item.innerHTML = 'test';
button.name = "Add Todo"
button.id = "add_todo"
button.innerHTML = "Add Todo"

body.appendChild(h1)
body.appendChild(input)
body.appendChild(button)
body.appendChild(ul)

button.addEventListener('mousedown',function(e) {
console.log(e);

li = document.createElement('li')
li.innerHTML = input.value

	ul.appendChild(li)

	})

input.addEventListener('keypress',function(e) {
console.log(e);

if(e.which === 13)
{
	li = document.createElement('li')
	li.innerHTML = input.value
	ul.appendChild(li)
}

var x = this.value;
console.log(x);
	})