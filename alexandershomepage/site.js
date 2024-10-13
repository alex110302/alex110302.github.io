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

if (time.minute < 10) time.minute = `0${time.minute}` 

if (isMorning) h3.textContent = `Good Morning its ${time.hour}:${time.minute}`
else if (isAfternoon) h3.textContent = `Good Afternoon its ${time.hour}:${time.minute}`
else if (isEvening) h3.textContent = `Good Evening its ${time.hour}:${time.minute}`

//secret message for rayn
const key = `It's a secret to everybody.`
localStorage.setItem(`It's a secret to everybody.`, 'please please please buy our game.... From A5J studios when it releases at some point')

//code for image carousel
const nextButton = document.querySelector('#next')
const previousButton = document.querySelector('#prev')

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

setInterval(() => {
    currentImage++
    showImages()
}, 5000)

nextButton.addEventListener('click' ,() => {
    currentImage++
    showImages()
})

previousButton.addEventListener('click' ,() => {
    currentImage--
    showImages()
})

//code for todo lsit
const todoList = document.querySelector('.todo-list')

const inputNewTodo = document.querySelector('#todoListInputs input')

const buttonAddNewTodo = document.querySelector('#todoListInputs button')
const clearTodo = document.querySelector('#clearTodo #buttonClear button')
const clearDoneTodos = document.querySelector('#clearTodo #buttonDoneClear button') //will get to this eventually. should clear the done tasks

const renderTodos = () => { 
    const todos = JSON.parse(localStorage.getItem('todoList')) || []
    
    todoList.innerHTML = ''
    
    if (inputNewTodo.value !== '') todos.push({ text: inputNewTodo.value, completed: false})
        
    localStorage.setItem('todoList', JSON.stringify(todos))
  
    todos.filter(todo => { if (todo.completed) todoList.innerHTML = ''      
        const li = document.createElement('li')
        li.style.listStyleType = 'none'
        li.style.color = 'lightblue'
        li.style.fontSize = '20px'
        li.textContent = todo.text
        todoList.append(li)
    })
        
    inputNewTodo.value = ''
}

renderTodos()

buttonAddNewTodo.addEventListener('click', () => renderTodos())

clearTodo.addEventListener('click', () => {
    localStorage.removeItem('todoList')
    renderTodos() 
})

