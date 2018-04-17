
function prepareGallery() {
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementsByTagName){
        return false;
    }
    if(!document.getElementById("imagegallery")){
        return false;
    }
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function () {
            return showPic(this);
        }
       // links[i].onkeypress=links[i].onclick;不建议使用鼠标事件
    }
}



function showPic(whichPic){
    if (!document.getElementById("placeholder")) {
        return true;
    }
    //var source=whichPic.getAttribute("href");
    var source=whichPic.href;
    var placeholder=document.getElementById("placeholder");
    if(placeholder.nodeName !='IMG'){
        return true;
    }
    //placeholder.setAttribute("src",source);
    placeholder.src=source;
    if(!document.getElementById("description")){
        return false;
    }
    // if(whichPic.getAttribute("title")){
    // var text=whichPic.getAttribute("title");
    // }else{
    //     text='';
    // }
    var text=whichPic.getAttribute("title")? whichPic.getAttribute("title") : '';//三元操作符
    var description=document.getElementById("description");
    if (description.firstChild.nodeType==3){
        description.firstChild.nodeValue=text;
    }
    return false;
}

function addLoadEvent(func) {
    var oldonload=window.onload;
    if (typeof window.onload !='function'){
        window.onload=func;
    }else{
        window.onload=function () {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);

