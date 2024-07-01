const inputBox = document.getElementById("input-field");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value === '' ){
        alert("ใส่งานที่จะดองก่อนสิพี่ชายย !");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    saveList();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveList();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveList();
    }
    }, false);

function saveList() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadList() {
    listContainer.innerHTML = localStorage.getItem("data");
}
loadList();