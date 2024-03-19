function addTask() {
  var inputField = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (inputField.value !== "") {
    var li = document.createElement("li");
    li.textContent = inputField.value;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("del");
    deleteButton.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    inputField.value = "";
  } else {
    alert("Please enter a task!");
  }
}
