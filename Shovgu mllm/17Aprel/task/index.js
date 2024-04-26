"use strict"
    let minus = document.querySelector(".minus");
    let pilus= document.querySelector(".pilus");
    let count= 0
    let artma = document.querySelector(".artma")
    console.log()

    pilus.addEventListener("click",(e)=>{
        count+=1
        artma.innertext=count
    })
    minus.addEventListener("click",(e)=>{
        count-=1
        artma.innertext=count
    })