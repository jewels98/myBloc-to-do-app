function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    //addToDoForm.addEventListener();
addToDoForm.addEventListner('submit', (event) => {
    event.preventDefault();

let title = newToDoText.value;
let newLi = document.createElement('li');
let checkbox = document.createElement('input');
let deleteButton = document.createElement('button');
checkbox.type = "checkbox";
deleteButton.textContent = 'delete';

newLi.textContent = title;
newLi.appendChild(checkbox);
toDoList.appendChild(newLi);
toDoList.appendChild(deleteButton);
newToDoText.value = '';

deleteButton.onclick = () => {
    toDoList.removeChild(newLi);
    toDoList.removeChild(deleteButton);
};
    });
}

window.onload = function(){
    onReady();
};
