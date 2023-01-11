const buttonNewTask  = document.querySelector('.wrapper-content-header-wrapper-button_button');

const inputEnterTask = document.querySelector('.wrapper-content-header-wrapper-input_input');
const inputEnterDate = document.querySelector('.wrapper-content-header-wrapper-date_date');

const cleaningInput = input =>{
    input.value = '';
}

function makeTask(text, date){
    const parent = document.querySelector('.wrapper-content-tasks');

        // set variables
    const objTask            = new Task(text, date, parent);
          task               = objTask.task,
          taskRemoveButton   = task.querySelector('.wrapper-content-tasks-task-header-remove_button'),
          taskCrossoutButton = task.querySelector('.wrapper-content-tasks-task-header-crossout_button');

        // set local storage 
    localStorage.setItem('Task=' + date, text)

        // set functionality for buttons
    taskRemoveButton.addEventListener('click', ()=>{
        objTask.remove();
    })
    taskCrossoutButton.addEventListener('click', ()=>{
        objTask.crossout();
    })

        // render task
    objTask.render();

    cleaningInput(inputEnterTask);
    cleaningInput(inputEnterDate);
}

function setLocalStorageTasks(){
    for( let i = (localStorage.length - 1); i >= 0; i--){
        if( localStorage.key(i).indexOf('Task') != -1 ){

            const date = localStorage.key(i).split('=')[1],
                  text = localStorage.getItem(localStorage.key(i))
                  
            makeTask(text, date)
        }
    }
}

setLocalStorageTasks()

buttonNewTask.addEventListener('click', () =>{
    const text    = inputEnterTask.value,
          date    = inputEnterDate.value;

    if( text.length != 0 ){
        makeTask(text,date)
    }
});
