const supabaseClient = supabase.createClient(
"https://wdpubcyglzanbxeddcia.supabase.co",
"sb_publishable_rOSQoFKmpTplEOHUqzFGrw_6dg_01tJ"
let students = JSON.parse(localStorage.getItem("students") || "[]")

function addStudent(){

let students = JSON.parse(localStorage.getItem("students") || "[]")

function addStudent(){

const name=document.getElementById("name").value
const roll=document.getElementById("roll").value
const phone=document.getElementById("phone").value
const bio=document.getElementById("bio").value
const photo=document.getElementById("photo").value

students.push({name,roll,phone,bio,photo})

localStorage.setItem("students",JSON.stringify(students))

renderStudents()

}

function renderStudents(){

const box=document.getElementById("students")

box.innerHTML=""

students.forEach(s=>{

box.innerHTML+=`
<div class="student-card">

<img src="${s.photo || 'https://i.pravatar.cc/100'}">

<div class="student-info">

<b>${s.name}</b><br>
Roll: ${s.roll}<br>
${s.phone}<br>
<small>${s.bio}</small>

</div>

</div>
`

})

}

renderStudents()

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
async function addStudent(){

const name=document.getElementById("name").value
const roll=document.getElementById("roll").value
const phone=document.getElementById("phone").value
const bio=document.getElementById("bio").value
const photo=document.getElementById("photo").value

await supabaseClient
.from("students")
.insert([{name,roll,phone,bio,photo}])

loadStudents()

}async function loadStudents(){

let { data } = await supabaseClient
.from("students")
.select("*")

const box=document.getElementById("students")

box.innerHTML=""

data.forEach(s=>{

box.innerHTML+=`
<div class="student-card">

<img src="${s.photo || 'https://i.pravatar.cc/100'}">

<div>

<b>${s.name}</b><br>
Roll: ${s.roll}<br>
${s.phone}<br>
${s.bio}

</div>

</div>
`

})

}

loadStudents()
