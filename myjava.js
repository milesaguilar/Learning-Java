document.addEventListener('DOMContentLoaded',function(){
    const addDiners = document.querySelector('#dinerTable');
    const addForm = document.forms['add-diner'];
    //create eventlistener
    addForm.addEventListener('submit',function(e){
    e.preventDefault();
    //to capture the value from the textbox
    const getValues = addForm.querySelector('input[type="text"]').value; 
    
    //create li element
    const li = document.createElement('li');
    //insert the value to li
    li.textContent = getValues;
    //add li to dinertable
    addDiners.appendChild(li);
    //to add class name
    li.classList.add('ly');
             
     });
     //hide diner list
    const hideDiner = document.querySelector('#hide');
    hideDiner.addEventListener('change',function(e){
        if(hideDiner.checked){
            addDiners.style.display ="none";
        } else{
            addDiners.style.display = "initial";
        }
    });
    
    //search
    const searchBar = document.forms['search-diner'].querySelector('input');
    searchBar.addEventListener('keyup',function(e){
        const ins = e.target.value.toLowerCase();
        const dinerNames = addDiners.getElementsByTagName('li');
        Array.from(dinerNames).forEach(function(dinerName){
            const specificName = dinerName.textContent;
            if(specificName.toLowerCase().indexOf(ins) != -1){
                dinerName.style.display = 'block';
            } else{
                dinerName.style.display = 'none';
            }
        });
    });
    
    //tabs
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', function(e) {
     if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
     Array.from(panels).forEach(function(panel) {
      if(panel == targetPanel){
       panel.classList.add('active');
     }else{
        panel.classList.remove('active');
      }
    });
    }
    });



});