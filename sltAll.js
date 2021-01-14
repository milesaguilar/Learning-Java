function sltAll(){
    const menu = document.querySelectorAll("#menuList li.ly");
    
    Array.from(menu).forEach(function(menu){
        console.log(menu);
    })
}