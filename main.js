

// tạo hàm để tìm đối tượng
const qall = (str) => {
    return document.querySelectorAll(str)
}

const q = (str) => {
    return document.querySelector(str)
}
document.querySelector('#push').onclick = function(){
    if(document.querySelector('.input__field input').value.length ==0){
        alert("xin hãy nhập vào")
    }
    else{
        document.querySelector('.todo__list').innerHTML
        += `
        <li class="content content-1">${document.querySelector('.input__field input').value}
                <input data-id ="1" class="input-checkbox" type="checkbox">
            </li>
            `;
    }
}

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
