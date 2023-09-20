`use strict`;
const inputList = document.querySelectorAll("input");
const labelList = document.querySelectorAll("label");
for(let i=0;i<inputList.length;i++)
{
    inputList[i].addEventListener('change',()=>{
        labelList[i].classList.toggle("checkedList");
    }
    )
}