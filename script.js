
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const btn = document.querySelector('button').addEventListener('click',addTask);
function addTask(){
    if(inputBox.value === ''){
        alert('You must write something!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';       // \u indicates unicode character escape. 00d7 -  hexadecimal code for multiplication sign(x) in unicode character set
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
    
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName ==="LI"){                   //LI tagName for the list items
        e.target.classList.toggle('checked');       //toggle method adds the'checked' class if it is not present and removes it if it is present. if used'add' instead of toggle ,it wont remove the class if its already present . use the toggle if u wanna switch the class on and off with each click
        saveData();
    }
    else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();            //parentElement is li 
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();