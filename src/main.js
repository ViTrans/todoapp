import { validateData,createTodo,countTodo,clearInputValue} from "./logic";
import { setItem,getItem,getJSONItemt,setJSONItemt } from "./storage";
const inputElem = document.querySelector('.input__field input')
const push = document.querySelector('.push')
function showList(){
    const listArr = getJSONItemt('todo');
    if(!listArr){
        setJSONItemt('todo',[value])
    }
    else{
        listArr.push(inputElem.value)
        setJSONItemt('todo',listArr)
    }
}
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
    const listArr = getJSONItemt('todo');
    if(!listArr){
        setJSONItemt('todo',[value])
    }
    else{
        listArr.push(inputElem.value)
        setJSONItemt('todo',listArr)
    }
    countTodo()
    clearInputValue()
})
