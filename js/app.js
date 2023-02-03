const buttonNewTask  = document.querySelector('.wrapper-content-header-wrapper-button_button');

const inputEnterTask = document.querySelector('.wrapper-content-header-wrapper-input_input');
const inputEnterDate = document.querySelector('.wrapper-content-header-wrapper-date_date');

const codeWord       = 'Task'; // this word use for searching only tasks in localStorage  

const cleaningInput = input =>{
    input.value = '';
}

function makeTask(text, code, date, time){
        // set variabless
    const parent = document.querySelector('.wrapper-content-tasks');
    
    const objTask            = new Task(text, date, time, code, parent),
          task               = objTask.task;

    const taskRemoveButton   = task.querySelector('.wrapper-content-tasks-task-header-remove_button'),
          taskCrossoutButton = task.querySelector('.wrapper-content-tasks-task-header-crossout_button');

        // set local storage 
    localStorage.setItem('Task' + code, `{"text" : "${text}", "code" : "${code}", "date" : "${date}", "time" : "${time}"}`);

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
        if( localStorage.key(i).indexOf(codeWord) != -1 ){
            const text = JSON.parse(localStorage.getItem(localStorage.key(i))).text,
                  code = JSON.parse(localStorage.getItem(localStorage.key(i))).code,
                  date = JSON.parse(localStorage.getItem(localStorage.key(i))).date,
                  time = JSON.parse(localStorage.getItem(localStorage.key(i))).time

            makeTask(text, code, date, time);
        }
    }
}

setLocalStorageTasks()

buttonNewTask.addEventListener('click', () =>{
    const inputText    = inputEnterTask.value,
          inputDate    = inputEnterDate.value;

    const code = new Code();

    let date,
        time;
  
    if( inputDate != '' ){
        date = inputDate.split('T')[0],
        time = inputDate.split('T')[1];
    }else{
        date = '',
        time = '';
    }
  
    if( inputText.length != 0 ){
        makeTask(inputText, code.code, date, time)
    }
});
