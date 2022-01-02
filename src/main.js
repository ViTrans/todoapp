import { validateData } from "./logic";

const inputElem = document.querySelector('.input__field input')
const push = document.querySelector('.push')
const todoList = document.querySelector('.todo__list')
const clearAll = document.querySelector('.clear-all')
const counterElem = document.querySelector('.pendingTasksNumb')

// rang buoc su kien cho button push
push.addEventListener('click',function(){
    // hien thi totoList moi trong danh sach
    const value = inputElem.value;
    // validate du lieu
    const isvalid = validateData(value)
    console.log("isvalid",isvalid)
    if(!isvalid){
        return;

    }
    // tao moi cac the html
    // createTodo(value)
    // countTodo()
    // clearInputValue()
})
