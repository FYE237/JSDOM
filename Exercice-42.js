
function initialize(){
   const tmp =  [...document.querySelectorAll("input")]
tmp.forEach(element => {
    element.addEventListener('click',liste,false);

});

}

function liste(){
    const tmp = document.getElementById("contents")
    const supp = document.querySelector("dl");
    //If a dl is there we delete it from the dom before
    if(supp != null){
        var child = supp.lastElementChild; 
        while (child) {
            supp.removeChild(child);
            child = supp.lastElementChild;
        }
    }

    //We create <dl><dt><dd><ul>
    const liste = getDefinition(parseInt(this.value));
    const dl = document.createElement('dl');
    tmp.prepend(dl)
    const dt = document.createElement('dt');
    const titre = document.createTextNode(liste.title)
    dt.appendChild(titre)
    dl.appendChild(dt);
    const dd = document.createElement('dd');
    dl.appendChild(dd);
    const ul = document.createElement('ul');
    dd.appendChild(ul);

    liste.items.forEach(element => {
        if ( !element.title ) {
            //For every child who is not an JSON object we create <li>
            const li = document.createElement("li")
            ul.appendChild(li)
            li.appendChild(document.createTextNode(element));
        }
        else {  
            //If not we call this function
            parcour(element,ul);               
           
        }
    });

}


function parcour(liste,parent){

    //We create <dl><dt><dd><ul>
    const dl = document.createElement('dl');
    parent.appendChild(dl)
    const dt = document.createElement('dt');
    const titre = document.createTextNode(liste.title)
    dt.appendChild(titre)
    dl.appendChild(dt);
    const dd = document.createElement('dd');
    dl.appendChild(dd);
    const ul = document.createElement('ul');
    dd.appendChild(ul);
    liste.items.forEach(element => {
        if ( !element.title ) {
            //For every child who is not an JSON object we create <li>
            const li = document.createElement("li")
            ul.appendChild(li)
            li.appendChild(document.createTextNode(element));
        }
        else {
            //If not we call this function
            parcour(element,ul)   
        }
    });
}

window.addEventListener('load',initialize,false)