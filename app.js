function onReady() {
    var toDos = [];
    var addToDoForm = document.getElementById('addToDoForm');


    function createNewToDo() {
        var newToDoText = document.getElementById('newToDoText');

        toDos.push({
            title: newToDoText.value,
            complete: false
        });

        newToDoText.value = '';

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
