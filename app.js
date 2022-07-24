const fiverr_form = document.getElementById('fiverr-form');
const alarm = document.getElementById('alarm');
const stop_alarm = document.getElementById('stopalarm');
const counter = document.querySelector('.counter');
const per = document.querySelector('.per');
const percent = document.querySelector('.percent');


let count;
fiverr_form.onsubmit = (e) => {

    e.preventDefault();
    clearInterval(count);

    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata.entries());
    const { date, time } = Object.fromEntries(formdata.entries());

    let start_time = Date.now();
    let end_time = new Date(date + ' ' + time);

    count = setInterval(() => {

        futuretime(date, time, counter, count, alarm);
        let perr = counterper(start_time, end_time);

        if (perr > 0 && perr < 30) {
            per.style.backgroundColor = 'red';
        } else if (perr > 30 && perr < 70) {

            per.style.backgroundColor = 'blue';

        } else {
            per.style.backgroundColor = 'green';
        }

        perr && (per.style.display = 'block');

        per.style.width = `${perr}%`;

        perr && (percent.style.display = 'block');

        percent.innerHTML = `${perr}%`;




    }, 1000)


}

stop_alarm.onclick = (e) => {

    e.preventDefault();

    alarm.pause();
}