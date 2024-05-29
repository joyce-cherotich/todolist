const apiUrl ='http:/localhost;8080/todos';

async function fetchTodos () {
    const response = await fetch(apiUrl);
    const todosDiv = document.getElementById('todos');
    todosDiv.innerHTML ='';
    todosDiv.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.className = 'list-group-item list-group-item-action todo';
        todoDiv.innerHTML =`
        <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${todo.title}</h5>
        <small>
        <input type="checkbox" ${todo.complete ? 'checked' : ''} data-id="${todo.id}">
        </small>
        </div>
        <p class ="mb-1>${todo.desription}</p>
        <button class=">btn-danger btn-sm" data-id="${todo.id}">Delete</button>
        `;
        todosDiv.appendChild(todoDiv);
    });
}
async function addTodo() {
    const title = document.getElementById('title').Value
    const description = document.getElementById('description').Value
    const response = await fetch(apiUrl, {
        method: 'POST'
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ title, description, completed: false })
    });
    if (response.status ===201) {
        fetchTodos();
    }
}

async function deleteTodo(id) {
    const response = await fetch(`${apiUrl}/${id}`,{
        method: 'DELETE'
    });
    if(response.status ===204)
        fetchTodos();
}
document.getElementById('todo-form').addEventListener('submit', async (event) => {
    





