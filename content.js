function sltAll(){
    const diners = document.querySelectorAll("#dinerTable li.ly");
 
 Array.from(diners).forEach(function(diner){
     diner.innerHTML = diner.textContent.toUpperCase();
   
 })



}