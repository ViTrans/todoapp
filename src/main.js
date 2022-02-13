import {
  validateData,
  createTodo,
  countTodo,
  clearInputValue,
  deleteTodoAll,
  deleteTodoItem,
  changeStastus,
} from "./logic";
import {
  setItem,
  getItem,
  getJSONItemt,
  setJSONItemt,
  removeItem,
} from "./storage";
const inputElem = document.querySelector(".input__field input");
const push = document.querySelector(".push");
// rang buoc su kien click cho button push
push.addEventListener("click", function () {
  // hien thi totoList moi trong danh sach
  const value = inputElem.value;
  // validate du lieu
  const isvalid = validateData(value);
  if (!isvalid) {
    return;
  }
  // tao moi cac the html
  createTodo(value);
  function saveTodo() {
    const listArr = getJSONItemt("todo");
    if (!listArr) {
      setJSONItemt("todo", [value]);
    } else {
      listArr.push(inputElem.value);
      setJSONItemt("todo", listArr);
    }
  }
  saveTodo();
  countTodo();
  clearInputValue();
});
// hàm hiển thị danh sách todo
function showlist() {
  const listArr = getJSONItemt("todo");
  for (let i = 0; i < listArr.length; i++) {
    const todo = listArr[i];
    createTodo(todo);
    countTodo(getJSONItemt("todo"));
  }
}
showlist();
