function addItem(){
    let ulTag = document.querySelector(".Header-items");//se obtiene el elemento ul
    let newItem = document.createElement("li"); //se crea el nuevo nodo (<li>)
    newItem.setAttribute("class", "Header-item");//se agrega el atributo que corresponde a ese nodo
    newItem.innerHTML = `<a href="#">ItemN</a>`;//se agrega el innerHtml a ese nuevo nodo
    ulTag.appendChild(newItem);//se agrega el nuevo hijo al nodo ul
}

function boldWord(word){
    let descriptionTag = document.querySelector(".Heading-text");//Se obtiene elemento (<p>)
    let text = descriptionTag.textContent;//Se guarda el texto en una variable
    if(text.includes(word)){//se valida si contiene la palabra del parametro
        const newText= text.replace(word, `<strong>${word}</strong>`);//reemplazo con nuevo texto
        descriptionTag.innerHTML= newText;//se agrega el nuevo innerHTML.
    }    
}

function dynamicImage(){
    //declaro la lista
    let urlImages = ["./images/KittyPic1.jpg", "./images/kittyBaby.jpg", "./images/KittysGiff.gif"];
    window.setInterval(changeImg2, 2000, urlImages);//se llama a la funcion changeImg2     
}

function changeImg(urls){ 
    console.log("dynamicImg.getAttribute('src') = " +dynamicImg.getAttribute('src'));  
    for(let index = 0; index < urls.length; index = index+1){
        if(!(dynamicImg.getAttribute('src') === (urls[index]))){ 
            dynamicImg.setAttribute("src",urls[index]);
            break;
        }
    }           
};

function changeImg2(urls){
    console.log(urls);
    let dynamicImg = document.querySelector(".Heading-img");//se obtiene el nodo (<img>)
    const actualUrl = dynamicImg.getAttribute('src');//se obtiene el valor del atributo src
    const actualIndex = urls.indexOf(actualUrl);//se obtiene el indice en el array urls
    urls.splice(actualIndex,1);//se elimina el objeto encontrado del array
    if(!(actualUrl === (urls[0]))){
        dynamicImg.setAttribute("src",urls[0]);
        urls.push(actualUrl);
    }
    console.log("url ctual:" + actualUrl + "index en el array: " + actualIndex);
}

function changeOrderInterval(){
    window.setInterval(changeOrder, 8000);
}

function changeOrder(){
    let div = document.querySelector(".Circles-div:nth-of-type(2)");
    if(div.style.order === "-1"){
        div.style.order = "0";
    }else{
        div.style.order = "-1";
    }
}

function sayHi(){
    const tag = document.querySelector(".Circles-verMas");
    const input = document.getElementById("nombre");
    tag.addEventListener("click", event => {
        /** @type {HTMLElement} */
        
        if(input.value !== null && input.value !== ""){
            alert(`Hello my dear ${input.value}`);
        }else{
            input.setAttribute("class", "Error");//se puede usar classList.toggle
            alert("You didn't write anything :P");
        }
    } );
    input.addEventListener("keydown", event =>{
        /** @type {HTMLElement} */
        input.classList.remove("Error");
    });
}

//test indexof
function testIndexOf(){
    const arr = [1,1,2,3,4,1];
    const index = arr.indexOf(1);
    console.log("index-of "+index);//solo retorna el primer indice de la primera ocurrencia
}
//test apply


(function(){
    testIndexOf()
    addItem();
    boldWord("happy");
    changeOrderInterval();
    dynamicImage();
    sayHi();
})();


