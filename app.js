function onReady() {
    let id = 0;
    let toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    function createNewToDo() {
        if (!newToDoText.value) {
            return;
        }

        toDos.push({
            title: newToDoText.value,
            complete: false,
            id: id
        }); ///ends ToDos

        id++;
        newToDoText.value = '';
        renderTheUI();
    } //ends createNewToDo function

    function renderTheUI() {
        const toDoList = document.getElementById('toDoList');
        toDoList.textContent = '';
        toDos.forEach(function (toDo) {
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            const deleteBtn = document.createElement('input');
            checkbox.type = "checkbox";
            deleteBtn.type = "button";
            deleteBtn.value = "delete";
            newLi.textContent = toDo.title;
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            newLi.appendChild(deleteBtn);
            deleteBtn.addEventListener('click', function () {
                deleteToDo(toDo.id);
                renderTheUI();
            }); //ends addEventListener
        }); //ends .forEach
    } //ends renderTheUI

    function deleteToDo(id) {
        toDos = toDos.filter(item => item.id !== id);
    } //compares the id of each item with the id parameter

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
        newToDoText.value = '';
    }); //ends addEventListener
} //ends onReady function

window.onload = function () {
    onReady();
}; //ends onload function
