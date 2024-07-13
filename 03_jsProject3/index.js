let isDobOpen = false;
let dateOfBirthSave;
const content = document.querySelector('#content')
const dobInput = document.querySelector('#dobInput')
const dobButton = document.querySelector('#dobButton')
const settingimg = document.querySelector('#settingImg')
const finalContent = document.querySelector('#finalContent')
const initialContent = document.querySelector('#initialContent')
const yearEl = document.querySelector('#year')
const monthEl = document.querySelector('#month')
const dayEl = document.querySelector('#day')
const hourEl = document.querySelector('#hour')
const minuteEl = document.querySelector('#minute')
const secondEl = document.querySelector('#second')


const toggleDob = () => {
    if (isDobOpen){
        content.classList.add("hide")
    } else{
        content.classList.remove("hide")
    }
isDobOpen = !isDobOpen
console.log("toggle: ",isDobOpen);
}


const makeTwoDigit = (number) => {
    return number > 9 ? number : `0${number}`
}


const updateAge = () => {
    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirthSave;
    const year = Math.floor(dateDiff/(1000 * 60 * 60 * 24 * 365))
    const month = Math.floor((dateDiff/(1000 * 60 * 60 * 24 * 365)) % 12)
    const day = Math.floor((dateDiff/(1000 * 60 * 60 * 24)) % 30)
    const hour = Math.floor((dateDiff/(1000 * 60 * 60)) % 24)
    const minute = Math.floor((dateDiff/(1000 * 60)) % 60)
    const second = Math.floor((dateDiff/1000) % 60)

    yearEl.innerHTML = makeTwoDigit(year)
    monthEl.innerHTML = makeTwoDigit(month)
    dayEl.innerHTML = makeTwoDigit(day)
    hourEl.innerHTML = makeTwoDigit(hour)
    minuteEl.innerHTML = makeTwoDigit(minute)
    secondEl.innerHTML = makeTwoDigit(second)
}



const saveDob = () => {
    const dateInsert = dobInput.value
    dateOfBirthSave = dateInsert ? new Date(dateInsert) : null;
    if(dateOfBirthSave){
        initialContent.classList.add("hide")
        finalContent.classList.remove("hide")
        updateAge();
        setInterval(() => updateAge() , 1000)

    }else{
        finalContent.classList.add("hide")
        initialContent.classList.remove("hide")
    }
}

saveDob()

settingimg.addEventListener("click" , toggleDob)
dobButton.addEventListener("click" , saveDob)