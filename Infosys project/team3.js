function yes()
{

                document.getElementById("blocks").style.display="block";
                document.getElementById("yes").style.backgroundColor="violet";
                 document.getElementById("no").style.backgroundColor="white";
                 move();

            }
    function no()
    {

                    document.getElementById("blocks").style.display="none";
                    document.getElementById("no").style.backgroundColor="violet";
                    document.getElementById("yes").style.backgroundColor="white";
                   

                }


                function validate(){

                    document.getElementById("kk").style.display="block" ;
                    document.getElementById("g").style.backgroundColor="violet";
                    document.getElementById("h").style.backgroundColor="white";
                    move();
                   

                }
                function validate1(){

                  document.getElementById("kkk").style.display="block";
                  document.getElementById("r").style.backgroundColor="violet";
                  document.getElementById("b").style.backgroundColor="white";
                  move();

                }
                function validate2(){

                   document.getElementById("kkkk").style.display="block";
                   document.getElementById("c").style.backgroundColor="violet";
                   document.getElementById("d").style.backgroundColor="white";
                   move();

               }
               function validate3(){

                   document.getElementById("kkkkk").style.display="block";
                   document.getElementById("e").style.backgroundColor="violet";
                    document.getElementById("f").style.backgroundColor="white";
                    move();
                }


                function validate4(){

                document.getElementById("kk").style.display="none";
                document.getElementById("g").style.backgroundColor="white";
                document.getElementById("h").style.backgroundColor="violet";



               }
                function validate5(){

              document.getElementById("kkk").style.display="none";
              document.getElementById("r").style.backgroundColor="white";
              document.getElementById("b").style.backgroundColor="violet";
             }
             function validate6(){

              document.getElementById("kkkk").style.display="none";
               document.getElementById("c").style.backgroundColor="white";
              document.getElementById("d").style.backgroundColor="violet";
            }
             function validate7(){

            document.getElementById("kkkkk").style.display="none";
             document.getElementById("e").style.backgroundColor="white";
            document.getElementById("f").style.backgroundColor="violet";
             }





                function validate8(){

                    document.getElementById("aa").style.display="block" ;
                    document.getElementById("i").style.backgroundColor="violet";
                    document.getElementById("j").style.backgroundColor="white";
                   move();

                }
                function validate10(){

                  document.getElementById("aaa").style.display="block";
                  document.getElementById("q").style.backgroundColor="violet";
                  document.getElementById("l").style.backgroundColor="white";
                  move();

                }
                function validate12(){

                   document.getElementById("aaaa").style.display="block";
                   document.getElementById("m").style.backgroundColor="violet";
                   document.getElementById("n").style.backgroundColor="white";
                   move();

               }
               function validate14(){

                   document.getElementById("aaaaa").style.display="block";
                   document.getElementById("o").style.backgroundColor="violet";
                    document.getElementById("p").style.backgroundColor="white";
                    move();

                }


                function validate9(){

                document.getElementById("aa").style.display="none";
                document.getElementById("i").style.backgroundColor="white";
                document.getElementById("j").style.backgroundColor="violet";


               }
                function validate11(){

              document.getElementById("aaa").style.display="none";
              document.getElementById("q").style.backgroundColor="white";
              document.getElementById("l").style.backgroundColor="violet";
             }
             function validate13(){

              document.getElementById("aaaa").style.display="none";
               document.getElementById("m").style.backgroundColor="white";
              document.getElementById("n").style.backgroundColor="violet";
            }
             function validate15(){

            document.getElementById("aaaaa").style.display="none";
             document.getElementById("o").style.backgroundColor="white";
            document.getElementById("p").style.backgroundColor="violet";
             }


var width=46;
var questions=46;
var msg=" of 97 answered";

function move(){
    var elem=document.getElementById("myBar");
    var id= setInterval(frame,10);
    function frame(){
        width=width+1;
        elem.style.value=width +'%';
        clearInterval(id);
    }
    questions=questions+1;
    var txt1= questions+msg;
    document.getElementById("progress").innerHTML ="<b>"+txt1+"</b>";

}



