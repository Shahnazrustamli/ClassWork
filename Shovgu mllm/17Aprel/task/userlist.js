let myusers= JSON.parse(localStorage.getItem("users"));

let body= document.querySelector(".body")

for (const data of myusers) {
    let tr= document.createElement("tr")
    let td= document.createElement("td")
    body.appendChild(tr)
    body.appendChild(td)
    
    
}