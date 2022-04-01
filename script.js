document.getElementById("myList").addEventListener("click",function(e) {
    var tgt = e.target;    
    if (tgt.tagName.toUpperCase() == "LI") {
        tgt.parentNode.removeChild(tgt);
    }
});

function addTaskToDo() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);    
    document.getElementById("myList").appendChild(li);    
    document.getElementById("myInput").value = ""; 
  }