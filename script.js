function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (!taskText) return;
  
  const li = document.createElement('li');
  li.innerHTML = `${taskText} <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>`;
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}