var imgObj = null;
imgObj = document.getElementById('idImg');
function Moveleft() {
    var img=document.getElementById('idImg');
    img.style.left=parseInt(img.style.left)-10+'px';
}
function MoveRight() {
    var imgObj=document.getElementById('idImg');
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

function init(){
    imgObj = document.getElementById('idImg');
    imgObj.style.position= 'relative';
    imgObj.style.left = '0px';
}
window.onload=init;