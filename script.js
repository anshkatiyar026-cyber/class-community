let students = JSON.parse(localStorage.getItem("students") || "[]")

function addStudent(){

const name=document.getElementById("name").value
const roll=document.getElementById("roll").value
const phone=document.getElementById("phone").value

students.push({name,roll,phone})

localStorage.setItem("students",JSON.stringify(students))

renderStudents()

}

function renderStudents(){

const box=document.getElementById("students")

box.innerHTML=""

students.forEach(s=>{

box.innerHTML+=`
<p><b>${s.name}</b> - Roll ${s.roll} - ${s.phone}</p>
`

})

}

renderStudents()



let chat = JSON.parse(localStorage.getItem("chat") || "[]")

function sendMsg(){

const name=document.getElementById("chatName").value
const msg=document.getElementById("chatMsg").value

chat.push({name,msg})

localStorage.setItem("chat",JSON.stringify(chat))

renderChat()

}

function renderChat(){

const box=document.getElementById("chatBox")

box.innerHTML=""

chat.forEach(m=>{

box.innerHTML+=`
<p><b>${m.name}:</b> ${m.msg}</p>
`

})

}

renderChat()