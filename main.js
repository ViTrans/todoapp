

// create 1 ham de tim 
const qall = (str) => {
    return document.querySelectorAll(str)
}

const q = (str) => {
    return document.querySelector(str)
}
// tim class input check box
const inputs = qall('.input-checkbox')
console.log(inputs)

for (let i = 0; i < inputs.length; i++) {
    const inputcheckbox = inputs[i];
    inputcheckbox.addEventListener("change",(e) =>{
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
