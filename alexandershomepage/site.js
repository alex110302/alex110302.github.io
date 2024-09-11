const hours = new Date().getHours() // get the current hour
const minutes = new Date().getMinutes()

const time = {
    hour: hours,
    minute: minutes 
}

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcome = document.querySelector('#welcome')
const h3 = document.createElement('h3')
welcome.append(h3)

if (time.minute < 10) time.minute = `0 ${time.minute}` 

if (isMorning) h3.textContent = `Good Morning its ${time.hour}:${time.minute}`
else if (isAfternoon) h3.textContent = `Good Afternoon its ${time.hour}:${time.minute}`
else if (isEvening) h3.textContent = `Good Evening its ${time.hour}:${time.minute}`