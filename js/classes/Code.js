class Code{
    get code(){
        const tasks = document.querySelectorAll('.wrapper-content-tasks-task');
    
        const randomNum = () =>{
            return Math.floor(Math.random() * (10 - 1)) + 1
        } 
        
        let code;

        function generateCode(){
            code = `0x${randomNum()}${randomNum()}${randomNum()}${randomNum()}${randomNum()}`;

            function checkReplayId(){
                for( let i = 0; i < tasks.length; i++ ){
                    if( code == tasks[i].id ){
                        code = `0x${randomNum()}${randomNum()}${randomNum()}${randomNum()}${randomNum()}`;
                        checkReplayId();
                    }
                }
            }
            
            checkReplayId();
        }

        generateCode();

        return code;
    }
}