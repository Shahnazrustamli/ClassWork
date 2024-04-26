import { usersURL} from "./mainURL.js";

const getAllDatas = async (url) => {
        let res = await axios(url);
        let data = res.data;
        return data;
}
const postDatasId = async (url,obj) => {
    let res = await axios.post(url,obj);
    let data = res.data;
    return data
}

let createUser = document.querySelector(".CreateElements")
let tableMain = document.querySelector(".table-main")





async function createProducts() {
    let data = await getAllDatas(usersURL);
    let mainData = data
    createData(mainData)

  createUser.addEventListener("click", (e) => {
        e.preventDefault();

        const name = document.querySelector(".name")
        const surname = document.querySelector(".surname")
        const age = document.querySelector(".age")

        let obj = {
            name:name.value,
           surname:surname.value,
           age:age.value
        };
        
        postDatasId(usersURL, obj);
    })
}


createProducts()




function createData(mainData){
    tableMain.innerHTML =''
    mainData.forEach(elem => {
        tableMain.innerHTML +=`
        <tr>
            <td>${elem.id}</td>
            <td>${elem.name}</td>
            <td>${elem.surname}</td>
            <td>${elem.age}</td>
            <td>
            <button class="EditBtn">Edit</button>
            </td>
        </tr>`
    });
}






let editBtn = document.querySelector(".EditBtn")
        menu.appendChild(editBtn);
        editBtn.addEventListener('click', function(){
            let saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            editBtn.replaceWith(saveButton);
            saveButton.addEventListener('click', function(){
                para.setAttribute('contenteditable', false);
                saveButton.replaceWith(editBtn);
            });
        });