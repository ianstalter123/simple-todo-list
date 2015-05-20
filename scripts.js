body = document.querySelector('body');
input = document.createElement('input')
button = document.createElement('button')
item = document.createElement('div')
ul = document.createElement('ul')
ul.id = "ul-top"
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
body.addEventListener("click",function(e) {
	// e.target was the clicked element
if(e.target && e.target.id === 'add_todo' && input.value !== "") { 
li = document.createElement('li')
li.innerHTML = input.value
	span = document.createElement('span')
span.innerHTML = 'delete'
span.id = "delete"
ul.appendChild(li)
li.appendChild(span)

}
else if (e.target.id === 'delete') {

ul.removeChild(e.target.parentNode)

  
  }
});

input.addEventListener('keypress',function(e) {
console.log(e);

if(e.which === 13 && input.value !== "")
{
	li = document.createElement('li')
	li.innerHTML = input.value
	span = document.createElement('span')
span.innerHTML = 'delete'
span.id = "delete"


	ul.appendChild(li)
	li.appendChild(span)
}
})

ul.addEventListener('click',function(e) {

	if(e.target.className !== "completed" )
	{
	e.target.className = "completed"; 
	}
	else
	{
	e.target.className = "";	
	}
	})
	








