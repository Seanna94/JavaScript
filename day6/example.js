window.onload=function () {
    // var testDiv=document.getElementById("testdiv");
     // alert(testDiv.innerText);
     // testDiv.innerHTML="<p>Tis is <em>my</em> content.</p>";

    // var para=document.createElement("p");//创建元素节点
    // var testdiv=document.getElementById("testdiv");
    // testdiv.appendChild(para);//追加到某个节点之后
    // var text=document.createTextNode("hello word");//创建文本节点
    // para.appendChild(text);//追加到某个元素之后


    // var info="nodeName:";
    // info += para.nodeName;
    // info += "nodeType:";
    // info += para.nodeType;
    // alert(info);

    var para1=document.createElement("p");
    var text1=document.createTextNode("This is");
    para1.appendChild(text1);
    var para2=document.createElement("em");
    var text2=document.createTextNode(" my");
    para2.appendChild(text2);
    para1.appendChild(para2);
    var text3=document.createTextNode("  content.");
    para1.appendChild(text3);
    var testdiv=document.getElementById("testdiv");
    testdiv.appendChild(para1);
}