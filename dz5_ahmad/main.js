
const input = document.getElementById("input")
const createButton = document.getElementById("create_button")
const todoList = document.getElementById("todo_list")


const createTodo = () => {
  if (!input.value.trim()) return alert('напиши что нибудь')
  const div = document.createElement("div");
  const text = document.createElement("h3")
  const deleteBtn = document.createElement("button")
  const editBtn = document.createElement("button")


  

  div.append(text, deleteBtn, editBtn)
  todoList.append(div)
  // todoList.append(button)
  // todoList.append(button)
  




  text.innerHTML = input.value
  deleteBtn.innerHTML = "delete"
  editBtn.innerHTML = "edit"


  div.setAttribute("class", "block_text")
  deleteBtn.setAttribute("class", "delete_button")
  editBtn.setAttribute("class", "edit_button")

  deleteBtn.onclick = () => div.remove()

  editBtn.onclick = () => {
    const editedText = prompt('Edit: ${text.innerHTML}').trim()
    if (editedText) text.innerHTML = editedText
  }





  input.value = ""
};



createButton.onclick = () => createTodo()



input.onkeydown = (e) => {
  if (e.key === "Enter") createTodo()
}

  