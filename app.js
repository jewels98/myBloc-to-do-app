function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let title = newToDoText.value;
        let newLi = document.createElement('li');
        let checkbox = document.createElement('input');
        let deleteButton = document.createElement('input')
        deleteButton.className = 'dltbtn';
        deleteButton.type = 'button';
        deleteButton.name = 'delbtn';
        deleteButton.value = "Delete";
        checkbox.type = "checkbox";
        newLi.textContent = title;
        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(deleteButton);
        newToDoText.value = '';

        deleteButton.addEventListener('click', (event) => {
            event.preventDefault();
            toDoList.removeChild(newLi);
        });
    });
}


window.onload = function () {
    //alert("The window has loaded!");
    onReady();
};

