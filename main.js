

// tạo hàm để tìm đối tượng
const qall = (str) => {
    return document.querySelectorAll(str)
}

const q = (str) => {
    return document.querySelector(str)
}
const push = document.querySelector('#push')
const inputField = document.querySelector('.input__field input')
let index = 1;

function createElement (tag){
    return document.createElement(tag)
}
push.addEventListener('click',function(){
    const ul = createElement('ul');
    ul.classList.add('todo__list')
    ul.innerHTML = 
    console.log(ul)
    inputField.appendChild(ul)
})

const inputs = qall('.input-checkbox')
console.log(inputs)

for (let i = 0; i < inputs.length; i++) {
    const inputCheckbox = inputs[i];
    // ràng buộc sự kiện 
    inputCheckbox.addEventListener("change",(e) =>{
        const target = e.target;
        const checked = target.checked;
        // console.dir(e.target.checked)
        // console.log(target.dataset)
        const data = target.dataset
        // console.log(data.id)
        const content = q((`.content-${data.id}`))
        console.log(content)
        console.log('checked',checked)
        content.style.textDecoration = 'line-through'
        if(checked){
            content.style.textDecoration = 'line-through'
        }
        else{
            content.style.textDecoration = 'none'
        }


    })
    
}
