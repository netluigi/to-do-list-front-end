const inputBox = document.querySelector("#inputBox");
const listContainer = document.querySelector(".list-container");
const rating=document.querySelector(".rating")

let taskDone=[];
let taskPending=[];



let setPriority='';

rating.addEventListener("click", function(e){
    if(e.target.classList.contains("important")){
        setPriority="important";
    }else if(e.target.classList.contains("average")){
        setPriority="average";
    }else if(e.target.classList.contains("soft")){
        setPriority="soft"
    }

})

function addTask(){
    if(inputBox.value === ''){
        alert('Write something !!') /*Verifica se o input não esta vazio */
    }
    else{
        let li= document.createElement("li"); /*Cria um elemento localmente */
        li.innerHTML=inputBox.value; /*Adiciona o valor do input ao elemento criado */

        //Inserir modificador de Importancia
        if(setPriority==="important"){
            li.style.color="red";
        }else if(setPriority==="average"){
            li.style.color="yellow";
        }else if(setPriority==="soft"){
            li.style.color="green"
        }       
  
        let span=document.createElement("span");
        span.innerHTML="\u00d7"; // Caractere de "x" para remover
        li.appendChild(span);
        listContainer.appendChild(li); /*Inseri novo elemento ao HTMl */
        taskPending.push(inputBox.value);
    }

    

    inputBox.value=''; /*Por fim voltar ao input para o estado inicial */
    saveData()
    
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        taskDone.push(li.value)
        saveData()
    } 
    
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask()
