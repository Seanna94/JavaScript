/**
 * Created by Seanna on 2018/4/14.
 */

//�������¼������Ժ������е��á�
function showPic(whichPic) {

    //ʵ��ͼƬ�滻
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    //ʵ���ı��л�
    var text=whichPic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text;
    //alert(description.nodeValue);//null
    //alert(description.childNodes[0].nodeValue);//�����ı��ڵ�
    //alert(description.firstChild.nodeValue);//firstChild===childNodes[0]
}

//ҳ�����ʱ���õĺ���
//window.onload=function countBodyChilddren(){
//    var body_element=document.getElementsByTagName("body")[0];
//    alert(body_element.length);
//    alert(body_element.childNodes.length);
//}

