 let hallo = document.getElementById('hallo');
 hallo.onclick = function () {
    hallo.classList.toggle('name');// toogle add ein class .....
 }


let text = document.getElementById('txt');

 text.oncontextmenu = function () {
     text.placeholder = 'hallo welt';
    hallo.click();

}

 console.log(' _________-scroll /Y /X /BY ------------------');

 let btn = document.getElementById('btn');

 onscroll = function () {
     if (scrollY >= 50) {
        btn.style.display = 'block';
   }else if(scrollY <= 50){
        btn.style.display = 'none';
   }
}

 btn.onclick = function (){
     scroll({
      top:0,
        left:0,
        behavior:'smooth'
    })

 }



console.log(screen.availWidth);
console.log(screen.availHeight);


console.log(screen.colorDepth);
console.log(screen.pixelDepth);


console.log(screen.orientation.type)