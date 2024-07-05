const searchInp = document.querySelector(".searchinp")

// let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc4fc595f8234b89a44fb770f9672e6d"
// https://newsapi.org/v2/everything?q=
const option = {
    method: 'GET',
    headers: {'x-api-key':'cc4fc595f8234b89a44fb770f9672e6d' } ,
};

let curnetpage = 1
let min = 1
let max = 10
async function creatfun() {
    if(!searchInp.value) {
         url = "https://newsapi.org/v2/top-headlines?country=us&category="
    } else{
       url = `https://newsapi.org/v2/everything?q=${searchInp.value}`

    }
    const mainList = document.querySelector(".start-list");
     const respons = await fetch(url, option);
     const data = await respons.json();
     console.log(data);
     const elData = data.articles.slice(0,5);
     console.log(elData);
     mainList.innerHTML = ""
     elData.map((item) => {
        // console.log(item);
        let elItem = document.createElement("li")
        let elImg = document.createElement("img")
        let elData = document.createElement("a")
        let elTitle = document.createElement("h1")
        let elText = document.createElement("p")
        let div = document.createElement("div")
        elImg.src = item.urlToImage
        elData.href = item.url
        elData.textContent = item.source.name
        // console.log(elData);
        elData.style.color = "blue"
        elTitle.textContent = item.title
        elText.textContent = item.description
        div.append(elData,elTitle,elText)   
        elItem.appendChild(elImg)  
        elItem.appendChild(div)        
        mainList.appendChild(elItem)
         
        elData.classList.add("activdata")
        div.classList.add("activdiv")
        elImg.classList.add("Imgactiv")
        elItem.classList.add("Itemactiv")
        elTitle.classList.add("Titleactiv")
        elText.classList.add("Textactiv")
     })
}
creatfun();
const elPage = document.querySelector(".pagination")

function creatPage() {

   for(let i = min; i <= max; i++) {
   
      let elPageBtn = document.createElement("button")
      elPageBtn.textContent = i
      if(curnetpage == i) {
         elPageBtn.classList.add("activbtn")
      }
      elPageBtn.addEventListener("click", function() {
     curnetpage = i
     elPage.innerHTML = ""
     creatPage();
        if(elPageBtn.textContent == max) {
           elPage.innerHTML = ""
           max += 5
           min += 5 
           creatPage();
        } else if(min == 1){
          elPage.innerHTML = ""
          elPageBtn.textContent = i
          creatPage()
        } else if(elPageBtn.textContent == min) {
          elPage.innerHTML = ""
          max -= 5
          min -= 5 
          creatPage();
        }
      })     
      elPage.appendChild(elPageBtn)
   }
}
creatPage();

searchInp.addEventListener("input", function(evt) {
   evt.preventDefault();
   creatfun();
})