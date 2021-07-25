const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveAway = document.querySelector('.giveaway');
const deadLine = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDays = tempDate.getDate();

// set plus 1 week
const futureDate = new Date(tempYear, tempMonth, tempDays + 7, 0, 0, 00);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const date = futureDate.getDate();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();

let month = futureDate.getMonth();
month = months[month];

let days = futureDate.getDay();
days = weekdays[days];

giveAway.textContent = `giveaway end on ${days}, ${date} ${month} ${year}, ${hours}:${minutes}:${seconds}`;

const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const remainTime = futureTime - today;
    
    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;

    let days = Math.floor(remainTime / oneDay);
    let hours = Math.floor((remainTime % oneDay) / oneHour);
    let minutes = Math.floor((remainTime % oneHour) / oneMinute);
    let seconds = Math.floor((remainTime % oneMinute) / oneSecond);
    const values = [days, hours, minutes, seconds];

    function format(item){
        if (item < 10){
            return `0${item}`;
        }
        return item;
    }

    items.forEach((item, index)=>{
        item.textContent = format(values[index]);
    });

    if (remainTime < 0){
        clearInterval(times);
        deadLine.innerHTML = `<h4 class="expire">Sorry, This giveaway has expired!</h4>`;
    }
}

const times = setInterval(getRemainingTime, 1000);