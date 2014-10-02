function EnterPressed(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  if (tecla==13){
    GetTask();
  }
}
function GetTask(){
  var task = document.getElementById("task").value;
  var input = document.getElementById("task");
  var taskAsString = task.trim();

  if(taskAsString == ""){
    input.focus();
    input.className = "error";
  }else{
    AddTask(taskAsString);
  }
}
function AddTask(task){
  var ul = document.getElementById("tasks");
  var li = document.createElement("li");

  li.className = "not_done";
  li.appendChild(document.createTextNode(task));
  ul.appendChild(li);

  ClearInput();
  CreateButtons();
}
function ClearInput(){
  var input = document.getElementById("task");
  input.value = "";
  return;
}
function CreateButtons(){
  var ul = document.getElementById("tasks");
  var input = document.createElement("button");

  ul.appendChild(input);
}

document.addEventListener("click", function(event){
  var elem = event.srcElement;
  if(elem.className === "not_done"){
    elem.className = "done";
  }else{
    elem.className = "not_done";
  }
});