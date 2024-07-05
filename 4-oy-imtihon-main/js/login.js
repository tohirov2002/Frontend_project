

const elForm = document.querySelector("#form")
const elForm1 = document.querySelector(".form1")
const elInput = document.querySelector(".input")
const elBtn = document.querySelector(".regis-btn")
const elBtn1 = document.querySelector(".regis-btn1")
const elInput1 = document.querySelector(".input1")
const elInput2 = document.querySelector(".input2")
const elInput3 = document.querySelector(".input3")
const elInput4 = document.querySelector(".input4")
const elInput5 = document.querySelector(".input5")
const elInpText = document.querySelector(".input-text")
const elInpText1 = document.querySelector(".input-text1")
const elFonmInp = document.querySelector(".form-inp")

elForm1.addEventListener("submit", function (evt) {
  evt.preventDefault();

  console.log("form1");

  if (elInput1.value === "" || elInput4.value === "") {
    elInpText.textContent = "Iltimos  malumotni tuliq kiriting";
  } else {
    elInpText.textContent = "";
    elInpText1.textContent = "siz mufaqqoyatli tarzda utdingiz!!!";
    window.location.href = "./index4.html";
  }
});

