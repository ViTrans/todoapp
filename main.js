
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
    if(!isvalid){
        return;

    }
    // tao moi cac the html
    createTodo(value)
    countTodo()
    clearInputValue()
})
function clearInputValue(){
    inputElem.value = ''
}
function countTodo(){
    const allItemts = document.querySelectorAll('.content')
    const counter = allItemts.length
    counterElem.textContent = counter;
}
// khi người dùng nhập dữ liệu ấn Enter thì dữ liệu sẽ được hiển thị
inputElem.addEventListener('keyup',function(event){ 
    if(event.keyCode ===13){
        event.preventDefault();
        push.click();
    }
})
function validateData(value){
    let valid = false
    if(value.trim() !== ''){
        valid = true
    }
    return valid;
}
// hàm thay đổi trạng thái văn bản khi ấn vào nút input chẹckbox
function changeStastus(input,p){
    // them su kien gach
    input.addEventListener('change',function(event){
        const checked = event.target.checked;
        if (checked){
            p.style.textDecoration = 'line-through'
        }
        else{
            p.style.textDecoration = '' 
        }
    })
}
// hàm xóa tất cả các danh sách todo
function deleteTodoAll(li){
    clearAll.addEventListener('click',function(){
        li.remove()
        countTodo()
    })

}
// Hàm xóa từng item trong danh sách todo
function deleteTodoItem(i){
    i.addEventListener('click',function(){
        const itemt = i.parentElement
        itemt.remove()
        countTodo()
    })
}
// hàm thay đổi trạng thái khi click vào text
function changeText(li,input,p){
    li.addEventListener('click',function(event){
        if(!event.ctrlKey) return;
        if(input.checked == false){
            input.checked = true
            p.style.textDecoration = 'line-through'
        }
        else{
            input.checked =false
            p.style.textDecoration = ''
        }
    })
}
function createTodo(value){
    const li = document.createElement('li')
    const input = document.createElement('input')
    const p = document.createElement('p')
    const i = document.createElement('i')

    li.className = 'content' 
    input.type = 'checkbox'
    input.className = 'input-checkbox'
    i.className = 'bx bx-trash trash'
    p.innerHTML = value;
    changeText(li,input,p)
    changeStastus(input,p)
    deleteTodoItem(i)
    deleteTodoAll(li)
    
    
    li.appendChild(p)
    li.appendChild(input)
    li.appendChild(i)
    todoList.appendChild(li)
}