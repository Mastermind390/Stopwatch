//This piece of code get the start button from the HTML file and add eventlistener to trigger the function in the addEventListener Object.
const startBtnEl = document.getElementById('js-start-button').addEventListener('click', ()=>{
    updateWatch()
});

//This a variable declare to as a minute whenever the seconds count up to 60.
let watch = 0;

//This is a variable declare to serve as a seconds to update the watch variable.
let num = 0

//This part of the code reset the minute and seconds to zero whenever the reset button is click.
const resetBtnEl = document.getElementById('js-reset-button').addEventListener('click', ()=>{
    //this the function that is been trigger whenever the reset button is click.
    resetWatch();
});

//The function inside the reset button that get triggered whenever the button is clicked.
function resetWatch() {
    //The watch variable is reset back to zero.
    watch = 0;
    //The num variable is reset back to Zero.
    num = 0;
    //The reset watch variable is parse back to the minute element in HTML code.
    document.getElementById('js-minute-text').innerHTML = watch;
    //The reset num variable is parse back to the minute element in HTML code.
    document.getElementById('js-seconds-text').innerHTML = num;
}

//Whenever setInverval is used in a code it always return an a number and that number is an ID. The variable intervalId below is set to undefined to be used later in the code to store the number returned by the setInverval() function.
let intervalId;

//This variable is declare to check whether the clock is running or not and it is set to false at first
let isWatchUpdating = false;

//This function is the powerhouse of this whole project this function is where we set the setInterval() to set our code running. This function is triggered whenever the start button is clicked.
function updateWatch() {
   
    //if the watch is not running we want to run the code inside this if statement. This is the same as saying if(isWatchUpdating === false).
    if (!isWatchUpdating) {

        //remember the intervalId variable we set to undedefined the other time this where we set to equal to the return value the setInterval method gives us every time we call the code inside this method every 1s.
        intervalId = setInterval(() => {
            //for every seconds this method is called we want to increase the num variable by 1, we set that variable as our seconds in watch.
            num++;

            //after the variable have been updated every seconds we want to parse it to the HTML element we set as seconds in the HTML code.
            document.getElementById('js-seconds-text').innerHTML = num;

            //60 seconds make 1 minute, so we want to increment the watch variabe by 1 whenever the incremented num variable get to 60. This if statement do that for us.
            if (num === 60) {

                //whenever the variable num get to 60 we want to reset the seconds element in our html code back to zero, so it won't count more that 60 since we are dealing clock seconds.
                document.getElementById('js-seconds-text').innerHTML = 0;
                
                //the watch variable is incremented by 1 when the num variable get to 60.
                watch++;

                //the num variable is reset back to zero to start all over again just as our clock behaves.
                num = 0;

                //the watch variable is parse into the minute HTML element in the HTML file.
                document.getElementById('js-minute-text').innerHTML = watch;
                //logging the watch variable to the console
                console.log(watch);
            }
            //logging the num variable to the console
            console.log(num);

         }, 1000);

         //setting the isWatchUpdating to true, to indicate that the clock is running.
         isWatchUpdating = true;
         //when the clock is running this line of code change the text inside the start button to stop.
         document.getElementById('js-start-button').innerHTML = 'Stop';

    } else {
        //when we click the stop button button the running clock will stop, the setInterval() metheod will return a number, this line line of code is used to return the number.
        clearInterval(intervalId);

        //setting the isWatchUpdating to false, to indicate that the clock is not running.
        isWatchUpdating = false;

        //when the clock is not running this line of code change the text inside the start button to start.
        document.getElementById('js-start-button').innerHTML = 'Start';
        
        //logging num to the console.
        console.log(num);
    }
}