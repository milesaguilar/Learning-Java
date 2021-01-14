function addMe(){
    const addForm = document.forms['add-book'];

    addForm.addEventListener('submit',function(e){
        e.preventDefault();
        const getValues = addForm.querySelector('input[type="text"]').value; 
       
        const li = document.createElement('li');
        const bkName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        deleteBtn.textContent ='delete';
        bkName.textContent = getValues;

        li.appendChild(bkName);
        li.appendChild(deleteBtn);
        delBtns.appendChild(li);
    });

}