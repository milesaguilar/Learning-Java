function sibling()
{
    const diners = document.querySelector(".headings");
    const changeBck = diners.nextElementSibling;
    const changeBck2 = diners.parentElement;

    changeBck2.setAttribute("style", "color:red");
    changeBck.setAttribute("style", "color:green");
    

}