var pics_src = new Array("img/463.png","img/image.jpeg","img/image2.jpeg","img/image3.png");
              var num = -1;

              slideshow_timer();

              function slideshow_timer(){
                  if (num == 3){
                      num = 0;
                  }
                  else {
                      num ++;
                  }
                  document.getElementById("mypic").src=pics_src[num];
                  setTimeout("slideshow_timer()",1000);
              }