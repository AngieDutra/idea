window.addEventListener('load', ()=>{
    const timeLine = document.querySelector('.timeLine');
    const timeText = document.querySelector('.timeText');
    const timeCount = document.querySelector('.timeCount');

    let timeValue =  15;
    let counter;
    let counterLine;
    let widthValue = 0;

        
    function startTimer(time){
        counter = setInterval(timer, 1000);
        function timer(){
            timeCount.textContent = time; //changing the value of timeCount with time value
            time--; //decrement the time value
            if(time < 9){ //if timer is less than 9
                let addZero = timeCount.textContent; 
                timeCount.textContent = "0" + addZero; //add a 0 before time value
            }
            const next_btn = document.querySelector(".endGame");
            if(time < 0){ //if timer is less than 0
                clearInterval(counter); //clear counter
                timeText.textContent = "Fin del tiempo"; //change the time text to time off
                
                const optionList = document.querySelectorAll("input");
                console.log(optionList)
                optionList.forEach((input)=>{
                    input.setAttribute("disabled", "disabled");;
                })
                /* Si el tiempo se acaba se deshabilita la selección */
                //optionList.classList.add("disabled"); //once user select an option then disabled all options
                
                next_btn.classList.remove("hide");
                next_btn.classList.add("show"); //show the next button if time is up
            } else{
                next_btn.classList.add("hide");
            }
        }
    }

    function startTimerLine(time){
        counterLine = setInterval(timer, 29);
        function timer(){
            time += 1.9; //upgrading time value with 1
            timeLine.style.width = time + "px"; //increasing width of time_line with px by time value
            if(time > 1024){ //if time value is greater than 549
                clearInterval(counterLine); //clear counterLine
            }
        }
    }

    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
})