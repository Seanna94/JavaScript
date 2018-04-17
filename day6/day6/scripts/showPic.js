
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
addLoadEvent(f);

function f() {
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/7.jpg");
    placeholder.setAttribute("alt","图片画廊");
    var description=document.createElement("p");
    description.setAttribute("id","description");
    var desctext=document.createTextNode("选择一个图片");
    description.appendChild(desctext);
    //document.getElementsByTagName("body")[0].appendChild(description);
    //document.getElementsByTagName("body")[0].appendChild(desctext);
    document.body.appendChild(placeholder);//简化
    document.body.appendChild(description);

    var gallery=document.getElementById("imagegallery");
    gallery.parentNode.insertBefore(placeholder,gallery);
}

//insertAfter函数
function insertAfter(newElement,targetElement) {
    var parent=targetElement.parentNode;
    if(targetElement.lastChild==parent){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}