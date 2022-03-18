let url = "https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients"

fetch(url).then(response => response.json()).then(data => {
    console.log(data)
    let totalPatients = data.totalPatients;
    let totalWaitingRoom = data.waitinfRoom;
    let totalAppointSchedule = data.scheduledAppointments;
    let totalPoints = data.appointments;

    document.getElementById('patients').innerHTML = totalPatients;
    document.getElementById('appointment').innerHTML = totalPoints.length;
    document.getElementById('waiting').innerHTML = totalWaitingRoom;
    document.getElementById('have').innerHTML = totalAppointSchedule;
    document.getElementById('currently').innerHTML = totalWaitingRoom;

    // document.getElementById('appointment').innerHTML=totalPoints.length
    //toget the patients
    totalPoints.forEach(elements => {
        console.log(elements.name)
        document.querySelector('.your-next-patients-container').innerHTML += `
        <div class="the-timeandimages">
        <div class="time">09:00am</div>
        <div class="nameandimages">
            <div class="guys">
                <div><img src="./imagess/Ellipse 2.png" alt=""></div>
                <div>${elements.name}</div>
            </div>
            <div class="dotted">...</div>
        </div>
    </div>
        `
    });

})

let activites = "https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites"
fetch(activites).then(response => response.json()).then(data => {
    console.log(data)
    data.activities.forEach(items => {
        console.log(items.title)
        document.querySelector('.common').innerHTML += `<div class="activity-card">
        <div><img src="./imagess/Group 9005 (2).png" alt=""></div>
        <div>
            <p>${items.title}</p>
        </div>
    </div>`
    })
})

let togMenu = document.querySelector('.toggle');
let nav = document.querySelector('.col-1')
togMenu.addEventListener('click', () => {
    nav.classList.toggle('display-block')
    console.log('clicked')
})