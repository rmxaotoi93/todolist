let masterTodoList = []


let addItem = () =>{
    let todo = 
    {text: document.getElementById('input').value, isDone: false}
    masterTodoList.push(todo)
    updateList(masterTodoList)
}

// let showList = (list) =>{
//     let mess =  list.map(item => `<li>${item.contents}</li>`).join('')
    
//     document.getElementById('resultArea').innerHTML = mess
// }


let updateList = () =>{
    let html ="";
    for(i = 0; i< masterTodoList.length; i++){
        html += `<li> <input type="checkbox" onlick="check(${i})">${masterTodoList[i].text} 
        ${masterTodoList[i].isDone} <button href='#' onclick='remove(${i})'>Del</button> <a href='#' id="done" onclick='toggle(${i})'>Mark done</a> </li>\n`;
    }
    document.getElementById('resultArea').innerHTML = html
}

let remove = (i) =>{
   
    masterTodoList.splice(i,1)
    updateList()
}


toggle = (i) =>{

    masterTodoList[i].isDone = !(masterTodoList[i].isDone)

    if(masterTodoList[i].isDone){
        document.getElementById('resultArea').style.textDecoration= "line-through";
        document.getElementById("done").innerHTML = "Mark not done";
        document.getElementById("done").style.textDecoration = "line-through";
    }
    else{
        document.getElementById('resultArea').style.textDecoration= "none";
        document.getElementById("done").style.textDecoration = "none";
        document.getElementById("done").innerHTML = "Mark done";
    }

    updateList()
}


