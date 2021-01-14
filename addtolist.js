function addList()
{

var newDiner = document.getElementById("name").value;
const addDiner = document.querySelector("#dinerTable");

addDiner.innerHTML += "<li>" + newDiner +"</li>";
}