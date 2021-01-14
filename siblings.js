function siblings()
{
    const diners = document.querySelector(".headings");
    const changeBck = diners.nextElementSibling;
    const changeBck2 = diners.parentElement;

    changeBck2.setAttribute("style", "color:violet");
    changeBck.setAttribute("style", "color:green");
    

}