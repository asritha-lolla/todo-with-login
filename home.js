const enteredEmail= document.getElementById('email');

const email= localStorage.getItem('email');

enteredEmail.innerHTML= email;

const todoButton= document.getElementById('btn');

const finaldata=async () => {
    const res=await fetch('https://dummyjson.com/todos');
    const data= await res.json();
    const showTodoData= document.getElementById('todoData');
    showTodoData.innerHTML=data.todos.map(todo => `<li>${todo.todo}</li>`).join('');
    const listCount= document.getElementById('count');
    listCount.innerHTML= data.todos.length;

}

todoButton.addEventListener('click', finaldata);


