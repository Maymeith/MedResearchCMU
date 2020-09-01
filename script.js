
function showContent(id){


    hideContent();
    
    var target = id + "-content";
    
    document.getElementById(target).style.display="block";
   


}

function hideContent(){

    document.getElementById("agenda-content").style.display ="none";
 
    var content = document.getElementsByClassName("content");
    for(var i = 0 ; i < content.length ; i++){
        content[i].style.display="none";
    }
}