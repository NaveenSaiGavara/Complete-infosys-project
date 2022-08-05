var width=14;
var questions=14;
var msg=" of 97 answered";
function move(){
    var elem=document.getElementById("myBar");
     var id = setInterval(frame, 10);
       function frame() {
           width=width+1; 
           elem.style.width = width + '%';
           clearInterval(id);
         }
    questions=questions+1;
    var txt11=questions+msg;
    document.getElementById("questions").innerHTML="<b>"+txt11+"</b>";
}
    
function removeBar(){
  
    var elem=document.getElementById("myBar");
     var id = setInterval(frame, 10);
       function frame() {
           width=width-1; 
           elem.style.width = width + '%'; 
           clearInterval(id);
         }
    questions=questions-1;
    var txt11=questions+msg;
    document.getElementById("questions").innerHTML="<b>"+txt11+"</b>";

}

function satya(x){
    if(!(x.classList.contains("check"))){
        if((!(x.value=="") && !(x.value=="none"))|| (x.checked)){
            move();
            x.setAttribute("class","check");
        }

    }
   else{
    removeBar();
    x.removeAttribute("class");
   }
}

var bc=document.forms[0];
function check(){
   
var b=["schoolx3","schoolx31","boardx3","specializationx3","countryx3","statex3",
"cgpax3","passx3"];
var c=["schoolx2","schoolx4","boardx2","specializationx2","countryx2",
"statex2","cgpax2","passx2"];
var d=["backlog1","backlog2"];
var a=["school","school2","board","specializationx6","country","state","cgpa1","pass1",
"degree3","institute3","university3","country3","state3","specializationx4",
"cgpa3","pass3"];

    var m=document.getElementById("error");
    m.innerHTML="";
   
    var flag=0;
    var uma=document.getElementById("btn1");
    var uma2=document.getElementById("btn3");
    var uma5=document.getElementById("btn2");
    var uma6=document.getElementById("btn4");
    var uma3=document.getElementById("inter0");
    var uma4=document.getElementById("diploma");
    if (bc["school"].value=="none"){
        bc[1].setAttribute("value",bc["jn1"].value);
    }
    if (bc["schoolx2"].value=="none"){
        bc[14].setAttribute("value",bc["jn2"].value);

    }
    if (bc["schoolx3"].value=="none"){
        bc[24].setAttribute("value",bc["jn3"].value);

    }
    
    
    if (uma.hasAttribute("class")){
        a.push("backlog1");
    }
    else if(!(uma.hasAttribute("class") | uma5.hasAttribute('class'))){
        flag=1;
        m.innerHTML+="<a  href=\"#jahn1\"class=\"linker\"><section>5.Do you have active backlogs?</section><section>this filed is required</section><section>&#x1F441</section></a>";

    }
    
    if (uma2.hasAttribute("class")){
        a.push("backlog2");
    }
    else if(!(uma2.hasAttribute("class") | uma6.hasAttribute('class'))){
        flag=1;
        m.innerHTML+="<a  href=\"#jahn2\"class=\"linker\"><section>5.Do you have gaps in education?</section><section>this filed is required</section><section>&#x1F441</section></a>";

    }
    if((uma3.checked) && (uma4.checked)){
        for (var i=0;i<b.length;i++){
            a.push(b[i]);
        }
       for (var i=0;i<c.length;i++){
            a.push(c[i])
       }
       
       
    }
    else if(uma3.checked){
        for (var i=0;i<c.length;i++){
            a.push(c[i]);
            
        }
        console.log(a);
    }
    else if(uma4.checked){
        for (var i=0;i<b.length;i++){
            a.push(b[i])
       }
    
    }
    else{
        m.innerHTML+="<a  href=\"#inter0\"class=\"linker\"><section>2.Please provide either Class XII or Diploma details.</section><section>this filed is required</section><section>&#x1F441</section></a>";

        flag=1;

    }
    
   for (var i=0;i<a.length;i++){
    
            if (bc[a[i]].value=="" | bc[a[i]].value=="none"){
                document.getElementById("error").style.display="block";
                flag=1;
               try{ 
                item2=bc[a[i]].item(0).parentElement.parentElement.parentElement.nextElementSibling.innerHTML;
                item1=bc[a[i]].item(0).parentElement.parentElement.parentElement.firstElementChild.innerText;
                m.innerHTML+="<a  href=\"#"+a[i]+"\"class=\"linker\"><section>"+item1+"</section><section>"+item2+"</section><section>&#x1F441</section></a>";
               
            }
               catch (err){
                item2=bc[a[i]].parentElement.parentElement.parentElement.nextElementSibling.innerHTML;
                item1=bc[a[i]].parentElement.parentElement.parentElement.firstElementChild.innerText;
                m.innerHTML+="<a  href=\"#"+a[i]+"\"class=\"linker\"><section>"+item1+"</section><section>"+item2+"</section><section>&#x1F441</section></a>";
    
               }
            }
        }
        if(flag==0){
            return true;
        }
        else{
            return false;
        }
    }
    
    


function gay3(x){
   
    if (x.value=="" | x.value=="none"){
        x.parentElement.parentElement.parentElement.nextElementSibling.style.display="block";
    }
    else{
        x.parentElement.parentElement.parentElement.nextElementSibling.style.display="";
 
    }
    satya(x);

}
function vis(a){
    
    var ask1=document.getElementById("ask2");
    var ask2=document.getElementById("ask3");
    var ask3=document.getElementById("othern1");
    var ask4=document.getElementById("othern2");
    var ask5=document.getElementById("othern3");
    if (a.value=="12th"){
        if (a.checked==true){
            ask1.style.display="block";
            a.nextElementSibling.setAttribute("class","btnb");
           
           
        }
        else{
            ask1.style.display="";
            a.nextElementSibling.removeAttribute("class");
        }
    }
    else if(a.value=="diploma"){
        if (a.checked==true){
            ask2.style.display="block";
            a.nextElementSibling.setAttribute("class","btnb");
           
        }
        else{
            ask2.style.display="";
            a.nextElementSibling.removeAttribute("class");
        }

    }
    else if(a.name=="school"){
        if (a.value=="none"){
            ask3.style.display="block";
           
           
        }
        else{
            ask3.style.display="";
           
        }

    }
    else if(a.name=="schoolx2"){
        if (a.value=="none"){
            ask4.style.display="block";
           
           
        }
        else{
            ask4.style.display="";
           
        }

    }
    else if(a.name=="schoolx3"){
        if (a.value=="none"){
            ask5.style.display="block";
           
           
        }
        else{
            ask5.style.display="";
           
        }

    }
    satya(a);
    
    
}


function btns(a){
    
    if (a.getAttribute("class")==null){
        a.setAttribute("class","btn");
        if (a.id=="btn1"){
            a.nextElementSibling.removeAttribute("class");
            a.parentElement.nextElementSibling.style.display="block";
        }
        else if(a.id=="btn3"){
            a.nextElementSibling.removeAttribute("class");
            a.parentElement.nextElementSibling.style.display="block";

        }
        else if (a.id=="btn2"){
            a.previousElementSibling.removeAttribute("class");
            a.parentElement.nextElementSibling.style.display="";
        }
        else if(a.id=="btn4"){
            a.parentElement.nextElementSibling.style.display="";
            a.previousElementSibling.removeAttribute("class");
        }
        
    }
    else{
        a.removeAttribute("class");
        if (a.id=="btn1"){
            a.parentElement.nextElementSibling.style.display="";
        }
        else if(a.id=="btn3"){
            a.parentElement.nextElementSibling.style.display="";

        }
       
    }

   
    
  return false;  
}