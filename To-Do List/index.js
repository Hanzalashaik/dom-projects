//variables

const button = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

button.addEventListener('click',function(){
    const task = document.createElement('div')
    task.classList.add('task')

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = "<i class='bx bx-check'></i>";
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton)
    
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "<i class='bx bxs-trash'></i>";
    deleteButton.classList.add('deleteTask')
    task.appendChild(deleteButton)
    
    if(inputTask.value === ""){
        alert("Please Enter Task")
    }else{
        taskContainer.appendChild(task)
    }

    inputTask.value = "";

    checkButton.addEventListener('click',function(){
        checkButton.parentElement.style.textDecoration = "line-through"
    });

    deleteButton.addEventListener('click',function(e){
        let target = e.target;
        // console.log(target);
        
        let i = target.parentElement.parentElement.remove();
        // console.log(i);
        
    })
})