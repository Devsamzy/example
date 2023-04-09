  document.querySelector('#open').onclick=()=>{
    document.querySelector('#nav').style.width='70%'
  }
  document.querySelector('#close').onclick=()=>{
    document.querySelector('#nav').style.width='0'
  }
    document.querySelector('#bar').onclick = () => {
        document.querySelector('#nav').style.width = '0'}
  function change(){
var value=document.querySelector('select').value;
if(value != "white"){
   var b=document.getElementsByTagName('body');
  b.style.backgroundColor=value;
}
}
//window.onload = function()
//{
  //if (document.cookie.length != 0)
 //. {
  ////  var array = document.cookie.split("=");
    //document.querySelector('select'//).value = array[1];
//   // document.bgColor = array[1];
///  }
//}
document.querySelector('#switch').onclick=()=>{
  document.querySelector('body').classList.toggle('dark')
  //.color='white'
}
const photos = ['1.jpg', 'nnn.png', '3.jpg'];

var imgId = document.getElementById('image');
var count = 0;

let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
button1.addEventListener('click', function() {
  count--;

  if (count < 0) {
    count = photos.length - 1;
    imgId.src = photos[count];

  }

  else {
    imgId.src = photos[count];
  }
});
button2.addEventListener('click', function() {
  count++;

  if (count >= photos.length) {
    count = 0;
    imgId.src = photos[count];

  }

  else {
    imgId.src = photos[count];
  }
});