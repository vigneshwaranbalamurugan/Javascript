function addToList() {
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    if (input.value.trim() === '') {
        alert('Enter Todo');
        return;
    }

    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', markCompleted);
    listItem.appendChild(checkbox);

    const taskText = document.createElement('span');
    taskText.textContent = input.value;
    listItem.appendChild(taskText);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener('click', removeTask);
    listItem.appendChild(removeBtn);

    list.appendChild(listItem);
    input.value = "";
}

function markCompleted(event) {
    const listItem = event.target.parentNode;
    listItem.classList.toggle('completed');
}

function removeTask(event) {
    const listItem = event.target.parentNode;
    listItem.remove();
}

document.getElementById('add-btn').addEventListener('click', addToList);