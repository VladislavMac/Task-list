const buttonNewTask  = document.querySelector('.wrapper-content-header-wrapper-button_button');

const inputEnterTask = document.querySelector('.wrapper-content-header-wrapper-input_input');
const inputEnterDate = document.querySelector('.wrapper-content-header-wrapper-date_date');

const cleaningInput = input =>{
    input.value = '';
}

    // Add new task
buttonNewTask.addEventListener('click', () => {
    const text    = inputEnterTask.value,
          date    = inputEnterDate.value;

    const parent = document.querySelector('.wrapper-content-tasks');

    if( text.length != 0 ){

            // set variables
        const objTask            = new Task(text, date, parent);
        const task               = objTask.task;
        const taskRemoveButton   = task.querySelector('.wrapper-content-tasks-task-header-remove_button');
        const taskCrossoutButton = task.querySelector('.wrapper-content-tasks-task-header-crossout_button')

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
});

