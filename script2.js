const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// analog clock functions
function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
//digital clock fucntions

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial update
updateTime();
//darkmode and light mode
const body = document.querySelector('body');
const darkmode= document.getElementById('darkmode');
const lightmode = document.getElementById('lightmdoe');
const analog_clock = document.getElementById('clock');
const outer_clock = document.querySelector('.outer-clock-face')
const inner_face = document.querySelector('.inner-clock-face')
const digital_clock = document.getElementById('digital-clock')
const time_digital= document.getElementById('time')

console.log(time_digital)



lightmode.addEventListener('click',()=>{
    body.style.backgroundColor = 'white';
    darkmode.style.display = 'flex';
    lightmode.style.display = 'none';
    analog_clock.classList.add('clock-light');
    digital_clock.style.border ='7px solid white'
    outer_clock.style.background ='white';
    inner_face.style.background ='white';
    time_digital.style.color ='black'
    
})

darkmode.addEventListener('click',()=>{
    body.style.backgroundColor = '#282828';
    lightmode.style.display = 'flex';
    darkmode.style.display = 'none';
    analog_clock.classList.remove('clock-light');
    digital_clock.style.border ='7px solid #282828'
    outer_clock.style.background ='#282828'
    inner_face.style.background ='#282828'
    time_digital.style.color ='white'
    

})



