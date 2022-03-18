const menuIcon = document.querySelector('.hamburger-menu');
const mySideBar = document.querySelector('.sidebar');
const container = document.querySelector('.navbar-container')

menuIcon.addEventListener('click', () => {
    mySideBar.classList.toggle('change');
    container.classList.toggle('change')
});


//-----------my storage section------

let name = document.getElementById('name')
let email = document.getElementById('email')
let message = document.getElementById('message')
let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    e.preventDefault()


    contactInfo = {}

    if (name !== '' && email !== '' && message !== '') {
        contactInfo.name = name.value
        contactInfo.email = email.value
        contactInfo.message = message.value

    } else {
        alert(`please enter your info`)

        sessionStorage.setItem('mess', JSON.stringify(contactInfo))
        console.log(contactInfo)
    }
});