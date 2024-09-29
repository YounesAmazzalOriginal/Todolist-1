function taskFunction(Message, dateArea) {
  return `<div class="taskAreaContainer">
          <div class="taskArea">
            <div class="taskReceptor">${Message}</div>
            <button onclick="deleteTask(this)">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>`;
}

function addTask() {
  const enterInput = document.querySelector(".enterInput");
  if (enterInput.value == "") {
    alert("Task Empty");
  } else {
    const taskReceptor = document.querySelector(".taskReceptor");
    const taskAreaContainer = document.querySelector(".taskAreaContainer");
    taskAreaContainer.innerHTML += taskFunction(enterInput.value);
    enterInput.value = "";
  }
}

function deleteTask(taskdeleteTarget) {
  taskdeleteTarget.parentElement.remove();
}
