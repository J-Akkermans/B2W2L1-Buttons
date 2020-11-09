var imgID = document.getElementById("img-1");
var containerBackground = document.getElementById("container");

function imgChange(id){
    switch(id) {
        case 1:
          imgID.src = "images/1.jpg";
          containerBackground.style.backgroundImage="url(images/bg1.jpg)";
          break;
        case 2:
          imgID.src = "images/2.jpg";
          containerBackground.style.backgroundImage="url(images/bg2.jpg)";
          break;
        case 3:
          imgID.src = "images/3.jpg";
          containerBackground.style.backgroundImage="url(images/bg3.jpg)";
            break;
        default:

        break;
      }
}


