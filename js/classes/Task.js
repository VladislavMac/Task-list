class Task{
    constructor(text, date, time, code, parent){
        this.text           = text;
        this.date           = date;
        this.time           = time;
        this.code           = code;
        this.parent         = parent;
        this.crossoutStatus = false;

    }
    get task(){
        this.myTask             = document.createElement('div');
        this.myTask.className   = 'wrapper-content-tasks-task';
        this.myTask.id          = this.code;
        this.myTask.innerHTML   = `
            <div class="wrapper-content-tasks-task-header">
                <div class="wrapper-content-tasks-task-header_title">
                    <h1 class="wrapper-content-tasks-task-header_title-title" id="title">${this.text}</h1>
                </div>
                <div class="wrapper-content-tasks-task-header_date">
                    <p class="wrapper-content-tasks-task-header_date-date" id="date">${this.date}</p>
                </div>
                <div class="wrapper-content-tasks-task-header_time">
                    <p class="wrapper-content-tasks-task-header_time-time" id="time">${this.time}</p>
                </div>
                <div class="wrapper-content-tasks-task-header-crossout">
                    <div class="wrapper-content-tasks-task-header-crossout_button">
                        <img class="wrapper-content-tasks-task-header-crossout_button-icon" src="imgs/notReadyTask.svg" title="Ready?">
                    </div>
                </div>
                <div class="wrapper-content-tasks-task-header-remove">
                    <div class="wrapper-content-tasks-task-header-remove_button">
                        <img class="wrapper-content-tasks-task-header-remove_button-icon" src="imgs/removeTask.svg" title="Remove task">
                    </div>
                </div>
            </div>
            <div class="wrapper-content-tasks-task-desc">

            </div>
        `

            // set base styles
        this.myTask.style.width     = '0%';
        // this.myTask.style.height    = '8vh';
        this.myTask.style.boxShadow = '0 0 0 0 transparent';
        this.myTask.style.borderBottom = ''
        
        this.hideContent = () =>{
            this.myTask.querySelector('.wrapper-content-tasks-task-header_date').style.display = 'none'  
            this.myTask.querySelector('.wrapper-content-tasks-task-header_time').style.display = 'none'  
            this.myTask.querySelector('.wrapper-content-tasks-task-header_title').style.display = 'none'  
            this.myTask.querySelector('.wrapper-content-tasks-task-header-remove_button').style.display = 'none'  
            this.myTask.querySelector('.wrapper-content-tasks-task-header-crossout_button').style.display = 'none'             
        }
        this.showContent = () =>{
            this.myTask.querySelector('.wrapper-content-tasks-task-header_date').style.display = 'flex'  
            this.myTask.querySelector('.wrapper-content-tasks-task-header_time').style.display = 'flex'  
            this.myTask.querySelector('.wrapper-content-tasks-task-header_title').style.display = 'flex'  
            this.myTask.querySelector('.wrapper-content-tasks-task-header-remove_button').style.display = 'flex'  
            this.myTask.querySelector('.wrapper-content-tasks-task-header-crossout_button').style.display = 'flex'           
        }
            // hide all content
        this.hideContent()

        return this.myTask
    }
    render(){
        this.parent.appendChild(this.myTask);
        
        setTimeout(() =>{
                // set base styles
            this.myTask.style.width        = '97%';
            this.myTask.style.boxShadow    = '0 0.5vw 1vw 0.1vw rgba(0, 0, 0, 0.144)'; 
            this.myTask.style.borderBottom = '0.2vw solid #b1b1b1'; 
        }, 5)

        setTimeout(() =>{
                // show all content
            this.showContent()       
        }, 400)
    }

    remove(){
            // set base styles
        this.height                 = this.myTask.getBoundingClientRect().height;
        this.myTask.style.width     = '0vw'
        this.myTask.style.height    = this.height + 'px'
        this.myTask.style.boxShadow = '0 0 0 0 transparent';

        localStorage.removeItem(`Task${this.myTask.id}`)
        
            // hide all content
        this.hideContent()

        setTimeout(()=>{
            this.myTask.remove();
        },400)
    };

    crossout(){
        const crossoutIcon = this.myTask.querySelector('.wrapper-content-tasks-task-header-crossout_button-icon');
        
        if( this.crossoutStatus === false ){
            const wrapperTitle        = this.myTask.querySelector('.wrapper-content-tasks-task-header_title-title'),
                  contentWrapperTitle = wrapperTitle.textContent;
                  
            wrapperTitle.innerHTML = '';
            wrapperTitle.innerHTML = `<s>${contentWrapperTitle}</s>`;
            crossoutIcon.src       = 'imgs/readyTask.svg';
            
            this.crossoutStatus = true;

        }else if( this.crossoutStatus === true ){
            const wrapperTitle        = this.myTask.querySelector('.wrapper-content-tasks-task-header_title-title'),
                  contentWrapperTitle = wrapperTitle.querySelector('s').innerHTML;
            
            wrapperTitle.innerHTML = '';
            wrapperTitle.innerHTML = contentWrapperTitle;
            crossoutIcon.src       = 'imgs/notReadyTask.svg';

            this.crossoutStatus = false;
        }
    }
}