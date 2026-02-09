// Problem Description – Event Loop Execution Order
//
// You are given a script that mixes synchronous code, Promises (microtasks),
// and timers (macrotasks).
//
// Your task is to understand and predict the order in which the logs
// are printed to the console.
//


function eventLoopRace() {
    console.log("Start");
    Promise.resolve().then(() => {
        console.log("I am a resolved promise!")
    })
    console.log("End")
}
setTimeout(eventLoopRace, 2000);

/* 
as per my understanding thread will start with console.log mentioned at start which is "start"
then thread will procced with promise and it will be a async function, so promise will start to resolve 
and then thread will continue with its normal execution, and "end" will be logged
the thread which was delegated to resolving promise will resolve or reject and will return promise accordingly
meanwhile this case only demonstrates resolved state so it will resolve promise.
*/