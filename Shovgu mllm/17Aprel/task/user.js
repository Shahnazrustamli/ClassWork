"use strict"
let api= [
    {
        name:"Ayaz",
        surname:"Ibrahimli",
        age:19,
        address:"bileceri",
        gender:"male"        
    },
    {
        name:"Tural",
        surname:"Abdulazizov",
        age:20,
        address:"Qabilsuleymanov",
        gender:"male"        
    },

{
    name:"Emin",
    surname:"Gurbanov",
    age:21,
    address:"Natiq Hesimi",
    gender:"male"        
},

{
    name:"Ali",
    surname:"Aliyev",
    age:20,
    address:"3mkr",
    gender:"male"        
}
]


localStorage.setItem("users", JSON.stringify(api))