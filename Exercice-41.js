function init(){
    // const inputs = [...document.querySelectorAll("input")]
    // const pushButton = inputs.filter(elt => elt.name == "push");
    //  pushButton[0].addEventListener("click",lifo_push,false);
    
    const formulaire = document.querySelector("form");
    formulaire.addEventListener("submit",pressEnter,false);

    const pushButton = document.querySelector("input[name='push']");
    pushButton.addEventListener("click",lifo_push,false);

    const textZone = document.getElementById("newItem")
    textZone.addEventListener("blur",check,false);
    textZone.addEventListener("focus",reinitialise,false)


    const popButton = document.querySelector("input[name='pop']");
    const  tmp = document.createElement("span");
    tmp.classList.add("error")
    tmp.innerHTML = "Erreur!! La liste est vide"
    popButton.after(tmp);
    tmp.style.display = "none"
    popButton.addEventListener("click",lifo_pop,false)

    const peekButton = document.querySelector("input[name='peek']");
    const  tmp_peek = document.createElement("span");
    tmp_peek.classList.add("error_peek")
    tmp_peek.innerHTML = "Erreur!! La liste est vide"
    peekButton.after(tmp_peek);
    tmp_peek.style.display = "none"
    peekButton.addEventListener("click",lif_peek,false)

}


function pressEnter(event){
    event.preventDefault();
}

function check (){
    const textZone = document.getElementById("newItem")
    if(textZone.value.length == 0){
        const spanErreur = document.createElement("span");
        spanErreur.innerHTML = "Ce champ ne peut être vide"
        textZone.after(spanErreur);
    }
}

function reinitialise(){
    const suivant = document.getElementById("newItem").nextElementSibling;
    if(suivant && suivant.innerHTML === "Ce champ ne peut être vide"){
        suivant.remove();
    }
}


function lifo_push(){
    const textZone = document.getElementById("newItem")
    const tmp = "" + textZone.value;
    let noeud = document.createElement("li")
    const texte = document.createTextNode(tmp);
    const lifo = document.getElementById("lifo");
    lifo.prepend(noeud);
    noeud.appendChild(texte);
    textZone.value = "";    noeud.appendChild(texte);
}

function lifo_pop (){
    const liste = document.getElementById("lifo");
    let tmp = liste.children.length;
    let tp = document.querySelector("span[class='error']")
    if(tmp === 0){
        tp.style.display = "block";
    }
    else {
        liste.firstElementChild.remove();
        tp.style.display = "none"
    }
}

function lif_peek(){
    const liste = document.getElementById("lifo");
    let tp = document.querySelector("span[class='error_peek']")
    if(liste.childElementCount != 0){
        let tmp = liste.firstElementChild.textContent;
        let textfield = document.getElementById("peek-area");
        textfield.innerHTML = "";
        textfield.innerHTML = tmp;
        tp.style.display = "none"

    }
    else {
        tp.style.display = "block"
    }
}


window.addEventListener("load",init,false)
