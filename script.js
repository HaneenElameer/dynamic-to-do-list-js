document.addEventListener('DOMContentLoaded',function(){
    const addButton = document.getElementById('add-task-btn')
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementById('task-list')
    function addTask(){
        const taskText = taskInput.value.trim()
        if (taskText ==="" ){
            alert("please enter a task")
        }else{
            const newTask = document.createElement('li')
            newTask.textContent = taskText
            taskList.appendChild(newTask)
            taskInput.value='';
            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'Remove'
            deleteBtn.className = 'remove-btn'
            newTask.appendChild(deleteBtn)
            deleteBtn.addEventListener('click',function(){
                taskList.removeChild(newTask)
            })
        }
    }
    addButton.addEventListener('click',addTask)
    taskInput.addEventListener('keypress',function(event){
        if (event.key === 'Enter'){
            addTask()
        }
    })
    addTask()
})