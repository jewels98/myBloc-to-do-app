function onReady() {
<<<<<<< HEAD
    var toDos = [];
    var addToDoForm = document.getElementById('addToDoForm');


    function createNewToDo() {
        var newToDoText = document.getElementById('newToDoText');

        toDos.push({
            title: newToDoText.value,
            complete: false
        });

=======
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
>>>>>>> assignment-8-events
        newToDoText.value = '';
        renderTheUI();
    } //ends createNewToDo function

<<<<<<< HEAD
        renderTheUI(toDos);
    }

    function renderTheUI(toDos) {
        var toDoList = document.getElementById('toDoList');

        toDoList.innerHTML = '';

        toDos.forEach(function (toDo) {
            var newLi = document.createElement('li');
            var checkbox = document.createElement('input');
            var deleteButton = document.createElement('input')
            deleteButton.type = "button";
            deleteButton.value = "Delete";
            checkbox.type = "checkbox";

            newLi.innerHTML = toDo.title;

            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            newLi.appendChild(deleteButton);

            deleteButton.addEventListener('click', (event) => {
                event.preventDefault();
                toDoList.removeChild(newLi);
            });
        });



    }

    addToDoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        createNewToDo();
    });

    renderTheUI(toDos);

}

window.onload = function () {
    onReady();
};
=======
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
>>>>>>> assignment-8-events
