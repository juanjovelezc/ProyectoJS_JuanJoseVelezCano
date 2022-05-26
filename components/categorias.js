/*VARIABLES*/ 
const mostrarCategorias = document.getElementById("containerCategorias")

let dataCat= []

const categoriasjson = fetch('/data/categorias.json')
.then(resp => resp.json())
.then(data => {
  dataCat = data
  mostrarCats(dataCat)
})




function mostrarCats(dataCategorias = []){
   
    dataCategorias.map((c) => {

        const categoryCard = document.createElement("div");
        categoryCard.classList.add("categoryCard");

        const categoryImage = document.createElement("div");
        categoryImage.classList.add("categoryImage");
    
        const imgcategory = document.createElement("img");
        imgcategory.src = c.img;
        imgcategory.classList.add("imagen-categoria");

        const categoryInfo = document.createElement("div");
        categoryInfo.classList.add("categoryInfo");
    
        const categoryName = document.createElement("div");
        categoryName.classList.add("categoryName");
    
        const categoryNameText = document.createElement("h3");
        categoryNameText.textContent = c.nombre;

        const categoryBtn = document.createElement("button");
        categoryBtn.className = "categoryBtn";
        categoryBtn.textContent = "Ver Productos";
        categoryBtn.onclick= () => {
            
        }

        categoryCard.appendChild(categoryImage)
        categoryImage.appendChild(imgcategory)
        categoryCard.appendChild(categoryInfo)
        categoryInfo.appendChild(categoryNameText)
        categoryInfo.appendChild(categoryBtn)

        mostrarCategorias.appendChild(categoryCard)
    })
}