function addTask() {
    let input = document.getElementById("taskInput");
    let ul = document.getElementById("taskList");
    if (input.value === "") return;

    let li = document.createElement("li");
    li.textContent = input.value;
    li.onclick = function() { this.remove(); saveTasks(); };
    ul.appendChild(li);
    input.value = "";
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

window.onload = function() {
    document.getElementById("taskList").innerHTML = localStorage.getItem("tasks") || "";
    document.querySelectorAll("li").forEach(li => li.onclick = function() { this.remove(); saveTasks(); });
};
