import { getItem, setItem } from "./storage";
const loginBtn = document.querySelector(".login-btn");
const userNameInp = document.querySelector(
  '.input-field input[name ="username"]'
);
const passwordInp = document.querySelector(
  '.input-field input[name ="password"]'
);

loginBtn.addEventListener("click", () => {
  const username = userNameInp.value;
  const password = passwordInp.value;
  const users = JSON.parse(getItem("users") || "[]");

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    if (username === user.username && password === user.password) {
      setItem("authenticated", "true");
      console.log("success");
      window.location.reload();
      break;
    }
  }
});
