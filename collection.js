var productcontainer=document.getElementById("products")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var entervalue=event.target.value.toUpperCase()
    for (i=0;i<productlist.length;i=i++)
    {
        var productname=productlist[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(entervalue<0))
        {
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }

    }
}
)
var sidnav=document.querySelector(".sidnav")

function sidenav(){
    sidnav.style.left="0"
}
function closenav(){
    sidnav.style.left="-60%"
}
