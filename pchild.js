function parChi()
{
    const findDiner = document.querySelector("#dinerTable");
    var inarray = findDiner.children;
    //var i;

   /* for(i=0; i < inarray.length; i++){
        if (i != inarray.length)
        {
            console.log(inarray[i] + "la");
            continue;
        }else{
            console.log(inarray[i].value + "*");
        }
    }*/

        Array.from(inarray).forEach(function(ins){
        ins.innerHTML = ins.textContent.toUpperCase();
        })
    //console.log(inarray);
    //console.log(findDiner.children);
}