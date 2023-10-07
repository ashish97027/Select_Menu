let selectsocialmedia=document.getElementById("select_socialmedia")
let selecttext=document.getElementById("selecttext")
let listitem=document.getElementsByClassName("list_item")
let list=document.getElementById("list")
let arrow=document.getElementById("icon")

selectsocialmedia.onclick= function (){
    list.classList.toggle("hide")
    arrow.classList.toggle("rotate")

}

for(options of listitem){
    options.onclick= function (){
        selecttext.innerHTML=this.textContent;
        list.classList.toggle("hide")
    }
}