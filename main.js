let todoInput = document.getElementById('todoInput');
let addTodoButton = document.getElementById('addTodoButton');
let todoList = document.getElementById('todoList');

function createDeleteButton() {
    let deleteBtn = document.createElement('span');
    deleteBtn.textContent = '×';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteBtn.parentElement.remove();
    });
    return deleteBtn;
}

addTodoButton.addEventListener('click', () => {
    let inputValue = todoInput.value.trim();

    if (inputValue !== '') {
        let listItem = document.createElement('li');
        listItem.textContent = inputValue;
        listItem.appendChild(createDeleteButton());

        todoList.appendChild(listItem);
        todoInput.value = '';
    }
});

todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTodoButton.click();
    }
});
