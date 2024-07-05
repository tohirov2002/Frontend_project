const url = "https://reqres.in/api/user";

fetch(url)
  .then((repons) => repons.json())
  .then((data) =>
    data.data.forEach((item) => {
      //   console.log(item);
    })
  );

const elregisbtn = document.querySelector(".regis-btn");
const elDiv = document.querySelector(".add-img");
const elInp1 = document.querySelector(".inp1");
const elInp2 = document.querySelector(".inp2");
const elInp3 = document.querySelector(".inp3");
const elInp4 = document.querySelector(".inp4");




elregisbtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const elInp = document.querySelector(".file-inp").files[0];

  console.log(elInp);
  const reader = new FileReader()

reader.readAsDataURL(elInp)

reader.onload = () => {
    const imgUrl = reader.result
    console.log(imgUrl);

    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: elInp1.value,
        vaqt: elInp2.value,
        title: elInp3.value,
        matn: elInp4.value,
      }),
    })
      .then((repons) => repons.json())
      .then((data) => console.log(data));
    let elImages = document.createElement("img")
    let elName = document.createElement("h3");
    let elAge = document.createElement("p");
    let title = document.createElement("h1");
    let matn = document.createElement("p");
    elAge.style.marginTop = "10px";
  
    // console.log(elInp);
    elImages.src = imgUrl
    elName.textContent = elInp1.value;
    elAge.textContent = elInp2.value;
    title.textContent = elInp3.value;
    matn.textContent = elInp4.value;
    elDiv.append(elImages,elName, elAge, title, matn);
    
    elAge.style.marginTop = "7px"
    elAge.style.marginBottom = "7px"
    title.style.marginTop = "7px"
    title.style.marginBottom = "7px"
    elInp1.value = "";
    elInp2.value = "";
    elInp3.value = "";
    elInp4.value = "";
  
    elDiv.style.marginBottom = "35px ";
}

});
