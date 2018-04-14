/**
 * Created by Seanna on 2018/4/14.
 */

//添加鼠标事件，并对函数进行调用。
function showPic(whichPic) {

    //实现图片替换
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    //实现文本切换
    var text=whichPic.getAttribute("title");
    var description=whichPic.getElementById("description");
    alert(description.nodeValue);
}

//页面加载时调用的函数
window.onload=function countBodyChilddren(){
    var body_element=document.getElementsByTagName("body")[0];
    //alert(body_element.length);
    alert(body_element.childNodes.length);
}

