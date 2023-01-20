export function timeStart(){
        const timer = document.querySelector('.time');
        let arrTimer = timer.innerHTML.split(':');
        let minutes = +(arrTimer[0]);
        let seconds = +(arrTimer[1]) + 1;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    timer.innerHTML = `${minutes > 9 ? minutes :'0' + minutes}:${(
        seconds > 9 ? seconds : '0' + seconds)}`;
}



