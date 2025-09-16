const ul=document.getElementById("ul");
const input=document.getElementById("input");
const addBtn=document.getElementById("add-btn");
const saveBtn=document.getElementById("save-btn");
const darkbtn=document.getElementById("dark-btn");
const sun=document.getElementById("sun");
const moon=document.getElementById("moon");
darkbtn.addEventListener("click",()=>{
if(document.body.classList.contains("dark")){
    sun.style.display="none";
    moon.style.display="block";
}else{
    sun.style.display="block";
    moon.style.display="none";
}
document.body.classList.toggle("dark");
}
)
addBtn.addEventListener("click",()=>{
    if(input.value.trim().length<1){
        alert("malumot kiriting")
    }else{
        addtodo()
    }
});
 
function addtodo(){
    const li=document.createElement("li");
    li.innerHTML=` <div class="left">
    <input type="checkbox" id="check" onclick="chckTodo(this)">
    <p>${input.value}<p>
</div>
<div class="right">
    <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
    <button class="delete-btn"onclick="delTodo(this)"><i class="fa-solid fa-trash-can"></i>    </button>
</div>
`
ul.appendChild(li);
input.value=""
}



function delTodo(e){
    ul.removeChild(e.parentNode.parentNode)
}

function chckTodo(e){
  if(e.checked==true){
    e.parentNode.chindren[1].style.textDecoration="line-through";    
    e.parentNode.parentNode.chindren[1].style.display="none";   
  }else{
      e.parentNode.parentNode.chindren[1].style.display="block"; 
    e.parentNode.chindren[1].style.textDecoration="none"
  }

}



function editTodo(e){
    input.value=e.parentNode.parentNode.children[0].children[1].textContent;
    ul.removeChild(e.parentNode.parentNode);

}



