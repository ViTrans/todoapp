const loginBtn = document.querySelector(".login-btn");
const inputUserName = document.querySelector(
  '.input-field input[name ="username"]'
);
const inputPass = document.querySelector(
  '.input-field input[name ="password"]'
);
const user = "laptrinhweb";
const password = "123456";
loginBtn.addEventListener("click", function () {
  const userName = inputUserName.value;
  const pass = inputPass.value;
  if (userName === user && pass === password) {
    alert("dang nhap thanh cong");
    window.location.href = "index.html";
  } else {
    alert("dang nhap that bai");
  }
});
