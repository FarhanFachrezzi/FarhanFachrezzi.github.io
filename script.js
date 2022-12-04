const todo = [];

const buttonTambah = document.querySelector(".buttonTambah");

buttonTambah.addEventListener("click", function (event) {
  event.preventDefault();
  const input = document.querySelector(".form-control").value;
  const inputReset = document.querySelector(".forms");
  if (todo.length < 7 && input.length <= 19 && input.length > 0) {
    todo.push(input);
    console.log(todo);
    show();
  }
  if (input.length > 20) {
    showAlertInputlength();
  }
  if (todo.length >= 7) {
    showAlertTodolength();
  }
  inputReset.reset();
});

// function

function show() {
  resetTodo();
  for (let i = 0; i < todo.length; i++) {
    const todoList = todo[i];
    add(todoList, i);
  }
}
function removeTodo(index) {
  todo.splice(index, 1);
  console.log(todo);
  show();
}
function add(todo, i) {
  const ul = document.querySelector(".list-group");
  // ul.classList.add("list-group");
  // ul.classList.add("text-start");

  const li = document.createElement("li");
  li.classList.add("list-group-item");

  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("btn");
  button.classList.add("btn-danger");
  button.classList.add("btn-sm");
  button.classList.add("btn-list");
  button.textContent = "hapus";
  console.log(button);
  li.textContent = todo;
  li.appendChild(button);
  ul.appendChild(li);
  button.addEventListener("click", function () {
    removeTodo(i);
  });
}

function resetTodo() {
  const ulDua = document.querySelector(".list-group");
  while (ulDua.firstChild) {
    ulDua.removeChild(ulDua.firstChild);
  }
}

function showAlertInputlength() {
  const buttonAlert = document.querySelector(".tombol-alert");
  const alert = document.querySelector(".alertcuy");
  buttonAlert.classList.add("alert-animasi");
  alert.classList.add("alert-animasi");
  alert.textContent = "maksimal 20 kata";
  buttonAlert.addEventListener("click", function (e) {
    buttonAlert.classList.remove("alert-animasi");
    alert.classList.remove("alert-animasi");
  });
}
function showAlertTodolength() {
  const buttonAlert = document.querySelector(".tombol-alert");
  const alert = document.querySelector(".alertcuy");
  buttonAlert.classList.add("alert-animasi");
  alert.classList.add("alert-animasi");
  alert.textContent = "catatan sudah maksimal";
  buttonAlert.addEventListener("click", function (e) {
    buttonAlert.classList.remove("alert-animasi");
    alert.classList.remove("alert-animasi");
  });
}
show();

// selesaii
