const boxmenu = document.querySelector('.box_menu');
const herolist = document.querySelector('.hero-list')
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
boxmenu.addEventListener('click',()=>{
    boxmenu.classList.toggle('active')
    herolist.classList.toggle('active')

})

const apiKey = 'R7VajZ1YC_rMVFbH3xxgwmm33hjUfr85bL55rN-keXs';
const url = 'https://api.newscatcherapi.com/v2/search';
const sectioncards = document.querySelector("#section_cards");
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    },
    body: JSON.stringify({
        lang: 'en',
        q: 'Tesla',
        sort_by: 'relevancy',
        page: 4
    })
};


async function creatfun() {
    const mainList = document.querySelector(".main-list")

     const respons = await fetch(url,options)
     const data = await respons.json()
    //  console.log(data);
     const elData = data.articles.slice(0,3)
    //  console.log(elData);
     elData.map((item) => {
        // console.log(item);
        let elItem = document.createElement("li")
        let elImg = document.createElement("img")
        let elData = document.createElement("p")
        let elTitle = document.createElement("h1")
        let elText = document.createElement("p")

        elImg.src = item.media
        elData.textContent = item.published_date
        elTitle.textContent = item.title
        elText.textContent = item.excerpt
        elItem.appendChild(elImg)  
        elItem.appendChild(elData)     
        elItem.appendChild(elTitle)         
        elItem.appendChild(elText)     
        mainList.appendChild(elItem)
        // elTitle.classList.add("titleactive")
        elText.classList.add("textactive")
        elData.classList.add("datactive")
        elImg.classList.add("imgactive")
        elItem.classList.add("activeItem")
     })
}
creatfun();










