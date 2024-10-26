document.addEventListener('DOMContentLoaded',function(){

    const addButton = document.getElementById('add-task-btn')
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementById('task-list')
    

    function addTask (){
        const taskText = taskInput.value.trim()

        if (taskText){
            createNewElement(taskText)
            taskInput.value = ""
            saveTasks()
        }else{
            alert('please enter a task.')
        }
    }

    addButton.addEventListener('click',addTask)
    taskInput.addEventListener('keypress',function(event){
        if (event.key === 'Enter'){
            addTask()
        }
    })



    function createNewElement(taskText){
        const newTask = document.createElement('li')
        newTask.textContent = taskText

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Remove'
        deleteBtn.classList.add ('remove-btn')

        taskList.appendChild(newTask)
        newTask.appendChild(deleteBtn)
        deleteBtn.addEventListener('click',function(){
            taskList.removeChild(newTask)
            saveTasks( )
        } )


        
    }


    function saveTasks( ){
        let tasks = []
        taskList.querySelectorAll('li').forEach(function(item){
            tasks.push(item.textContent.replace('Remove',"").trim())
        })
        localStorage.setItem('tasks',JSON.stringify(tasks))

    }

    function loadTasks(){
        const tasks = JSON.parse(
            localStorage.getItem('tasks')) || []
       tasks.forEach(createNewElement)
    }
    loadTasks()
})
