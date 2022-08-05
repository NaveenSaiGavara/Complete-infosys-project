var gen1=document.getElementById("checkbox1");
var gen2=document.getElementById("checkbox2");
var gen3=document.getElementById("checkbox3");
var flag=1;
var l=[0,0,0,0,0,0,0,0,0,0,0,0,0]
var err=["gen_err" ,"fir_err","las_err","ema_err","pho_err","res_err","con_err","acon_err","dob_err","cit_err","pas_err","num_err","pin_err"]
var div_err=["gender_required1","first_required","second_required",["email_required1","email_required2"],"photo_required","resume_required",["phone_required1","india_required1"],"phone_required2","date_required1","citizen_required","passport_required","street1","post1"]
var sum;
var email_err_flag=-1;
var phone_err_flag=-1;
function progress_bar_fun()
{
    sum=0;
    var p=document.getElementById("progress_inner");
    for(let t=0;t<l.length;t++)
    {
        sum+=l[t];
    }
    document.getElementById("progress_num").value=sum.toString()+" of 97 answered"
    var temp=sum*1.65844912;
    var j=temp.toString()+"px";
    document.getElementById("progress_inner").style.width=j;
}
function submission()
{
    if(sum==13)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function link_fun(k)
{
    if(sum===13)
    {
        document.getElementById("consolidated_errors").style.display="none";
        k.type="submit";
    }
    else
    {
        document.getElementById("consolidated_errors").style.display="block";
        k.type="button";
        for(let tem=0;tem<l.length;tem+=1)
        {
            if(tem==3 && l[tem]==0)
            {
                document.getElementById(err[tem]).style.display="block";
                email_function()
                if(email_err_flag==0)
                {
                    document.getElementById(div_err[tem][0]).style.display="initial";
                }
                if(email_err_flag==1)
                {
                    document.getElementById(div_err[tem][1]).style.display="initial";
                }
            }
            else if(tem==3 && l[tem]==1)
            {
                document.getElementById(err[tem]).style.display="none";
                document.getElementById(div_err[tem][0]).style.display="none";
                document.getElementById(div_err[tem][1]).style.display="none";
            }
            else if(tem==6 && l[tem]==0)
            {
                document.getElementById(err[tem]).style.display="block";
                phone_num_valid()
                if(phone_err_flag==0)
                {
                    document.getElementById(div_err[tem][0]).style.display="initial";
                }
                if(phone_err_flag==1)
                {
                    document.getElementById(div_err[tem][1]).style.display="initial";
                }
            }
            else if(tem==6 && l[tem]==1)
            {
                document.getElementById(err[tem]).style.display="none";
                document.getElementById(div_err[tem][0]).style.display="none";
                document.getElementById(div_err[tem][1]).style.display="none";
            }
            else if(l[tem]==0) 
            {
                document.getElementById(div_err[tem]).style.display="initial";
                document.getElementById(err[tem]).style.display="block";
            }
            else
            {
                document.getElementById(div_err[tem]).style.display="none";
                document.getElementById(err[tem]).style.display="none";
            }
        }
    }
}
function highlight(k)
{
    k.style.backgroundColor="white";
    k.style.boxShadow="10px 10px 4px rgba(0,0,0,0.2)";
}
function delight(k)
{
    k.style.backgroundColor="rgb(230, 242, 253)";
}
function underline_fun(k)
{
    k.style.borderBottom="2px solid #bf40bf";
}
function pin_underline_fun(k)
{
    if(k.value.length!=6)
    {
        k.style.borderBottom="2px solid red";
    }
    else
    {
        k.style.borderBottom="2px solid black";
    }
}
function star_fun_on(k)
{
   k.style.marginTop="-30px";
}
function star_fun_off(k)
{
    k.style.marginTop="0px";
}
function gender_fun1()
{
    gen1.checked=true;
    if(gen1.checked){
        document.getElementById("male").style.color="#bf40bf";
        window.scrollBy(0, 150);
        gen2.checked=false;
        gen3.checked=false;
        flag=1;
        document.getElementById("female").style.color="#000";
        document.getElementById("none").style.color="#000";
        l[0]=1;
    }
    else{
        l[0]=0;
        document.getElementById("male").style.color="#000";
    }
}
function gender_fun2()
{
    gen2.checked=true;
    if(gen2.checked){
        document.getElementById("female").style.color="#bf40bf";
        window.scrollBy(0, 150);
        gen1.checked=false;
        gen3.checked=false;
        flag=1;
        document.getElementById("male").style.color="#000";
        document.getElementById("none").style.color="#000";
        l[0]=1;
    }
    else{
        l[0]=0;
        document.getElementById("female").style.color="#000";
    }
}
function gender_fun3(){
    gen3.checked=true;
    if(gen3.checked){
        document.getElementById("none").style.color="#bf40bf";
        gen1.checked=false;
        gen2.checked=false;
        window.scrollBy(0, 150);
        flag=1;
        document.getElementById("male").style.color="#000";
        document.getElementById("female").style.color="#000";
        l[0]=1;
    }
    else{
        l[0]=0;
        document.getElementById("none").style.color="#000";
    }
}

function first_function(){
    var first_name=document.getElementById("firstname");
    var first_pat=/^[a-z]+$/i;
    if(!first_pat.test(first_name.value) || first_name.value==null)
    {
        document.getElementById("first_required").style.display="initial";
        flag=0;
        document.getElementById("star1").style.color="red";
        l[1]=0;
    }
    else{
        document.getElementById("first_required").style.display="none";
        flag=1;
        l[1]=1;
        document.getElementById("star1").style.color="grey";
    }
}
function second_function(){
    var second_name=document.getElementById("secondname");
    var second_pat=/^[a-z]+$/i;
    if(!second_pat.test(second_name.value) || second_name.value==null)
    {
        document.getElementById("second_required").style.display="initial";
        flag=0;
        l[2]=0;
        document.getElementById("star2").style.color="red";
    }
    else{
        document.getElementById("second_required").style.display="none";
        document.getElementById("star2").style.color="black";
        flag=1;
        l[2]=1;
    }
}
function email_function(){
    var email_name=document.getElementById("emaili");
    var email_pat=/^[a-z0-9]+@[a-z]+\.(com)|(in)|(net)|(edu)$/i;
    var eval=email_name.value;
    if(eval.length>0)
    {
        if(!email_pat.test(eval))
        {
            document.getElementById("email_required2").style.display="initial";
        document.getElementById("email_required1").style.display="none";
        document.getElementById("star3").style.color="black";
        email_err_flag=1;
        l[3]=0;
        }
        else{
            l[3]=1;
            document.getElementById("email_required1").style.display="none";
            document.getElementById("email_required2").style.display="none";
            email_err_flag=-1;
        }
    }
    else{
        document.getElementById("email_required1").style.display="initial";
        email_err_flag=0;
        document.getElementById("email_required2").style.display="none";
        document.getElementById("star3").style.color="red";
        l[3]=0;
    }
}
function photo_fun(k)
{
    k.style.backgroundColor="#eeeeee";
    k.type="file";
    document.getElementById("photo_alert1").style.display="none";
    alert(document.getElementById("photo_alert1").value);
}
function submit_resume(k)
{
    k.type="file"
    alert(k.value)
    alert(1)
}
function pincode_fun(){
    var pin=document.getElementById("pincode").value;
    if(pin==523187 || pin==400001 || pin==600001 || pin==520012 || pin==221001){
    if(pin==523187)
    {
        document.getElementById("state").value="Andhra Pradesh";
        document.getElementById("state").style.marginTop="10px";
        document.getElementById("district").style.marginTop="10px";
        document.getElementById("city").style.marginTop="10px";
        document.getElementById("state").style.fontSize="17px";
        document.getElementById("state").style.color="black";
        document.getElementById("district").value="Bapatla";
        document.getElementById("district").style.fontSize="17px";
        document.getElementById("district").style.color="black";
        document.getElementById("city").value="Vetapalem";
        document.getElementById("city").style.color="black";
        document.getElementById("city").value="Vetapalem";
        document.getElementById("city").style.fontSize="17px";
        document.getElementById("statelegend").style.display="initial";
        document.getElementById("districtlegend").style.display="initial";
        document.getElementById("citylegend").style.display="initial";
        document.getElementById("11").style.display="initial";
        document.getElementById("12").style.display="initial";
        document.getElementById("13").style.display="initial";
        document.getElementById("21").style.display="none";
        document.getElementById("22").style.display="none";
        document.getElementById("23").style.display="none";
        document.getElementById("21").style.display="none";
        document.getElementById("22").style.display="none";
        document.getElementById("23").style.display="none";
        document.getElementById("31").style.display="none";
        document.getElementById("32").style.display="none";
        document.getElementById("33").style.display="none";
        document.getElementById("51").style.display="none";
        document.getElementById("52").style.display="none";
        document.getElementById("53").style.display="none";
    }
    else if(pin==520012)
    {
        document.getElementById("state").value="Andhra Pradesh";
        document.getElementById("state").style.marginTop="10px";
        document.getElementById("district").style.marginTop="10px";
        document.getElementById("city").style.marginTop="10px";
        document.getElementById("state").style.fontSize="17px";
        document.getElementById("state").style.color="black";
        document.getElementById("district").value="NTR";
        document.getElementById("city").value="Vijayawada";
        document.getElementById("statelegend").style.display="initial";
        document.getElementById("districtlegend").style.display="initial";
        document.getElementById("citylegend").style.display="initial";
        document.getElementById("21").style.display="initial";
        document.getElementById("22").style.display="initial";
        document.getElementById("23").style.display="initial";
        document.getElementById("11").style.display="none";
        document.getElementById("12").style.display="none";
        document.getElementById("13").style.display="none";
        document.getElementById("41").style.display="none";
        document.getElementById("42").style.display="none";
        document.getElementById("43").style.display="none";
        document.getElementById("41").style.display="none";
        document.getElementById("32").style.display="none";
        document.getElementById("33").style.display="none";
        document.getElementById("51").style.display="none";
        document.getElementById("52").style.display="none";
        document.getElementById("53").style.display="none";
    }
    else if(pin==400001)
    {
        document.getElementById("state").value="Maharashtra";
        document.getElementById("state").style.marginTop="10px";
        document.getElementById("district").style.marginTop="10px";
        document.getElementById("city").style.marginTop="10px";
        document.getElementById("state").style.fontSize="17px";
        document.getElementById("state").style.color="black";
        document.getElementById("district").value="Konkan";
        document.getElementById("city").value="Mumbai";
        document.getElementById("statelegend").style.display="initial";
        document.getElementById("districtlegend").style.display="initial";
        document.getElementById("citylegend").style.display="initial";
        document.getElementById("41").style.display="initial";
        document.getElementById("42").style.display="initial";
        document.getElementById("43").style.display="initial";
        document.getElementById("11").style.display="none";
        document.getElementById("12").style.display="none";
        document.getElementById("13").style.display="none";
        document.getElementById("21").style.display="none";
        document.getElementById("22").style.display="none";
        document.getElementById("23").style.display="none";
        document.getElementById("31").style.display="none";
        document.getElementById("32").style.display="none";
        document.getElementById("33").style.display="none";
        document.getElementById("51").style.display="none";
        document.getElementById("52").style.display="none";
        document.getElementById("53").style.display="none";
    }
    else if(pin==221001)
    {
        document.getElementById("state").value="Uttar Pradesh";
        document.getElementById("state").style.marginTop="10px";
        document.getElementById("district").style.marginTop="10px";
        document.getElementById("city").style.marginTop="10px";
        document.getElementById("state").style.fontSize="17px";
        document.getElementById("state").style.color="black";
        document.getElementById("district").value="Varanasi";
        document.getElementById("city").value="Varanasi";
        document.getElementById("statelegend").style.display="initial";
        document.getElementById("districtlegend").style.display="initial";
        document.getElementById("citylegend").style.display="initial";
        document.getElementById("41").style.display="initial";
        document.getElementById("42").style.display="initial";
        document.getElementById("43").style.display="initial";
        document.getElementById("11").style.display="none";
        document.getElementById("12").style.display="none";
        document.getElementById("13").style.display="none";
        document.getElementById("21").style.display="none";
        document.getElementById("22").style.display="none";
        document.getElementById("23").style.display="none";
        document.getElementById("31").style.display="none";
        document.getElementById("32").style.display="none";
        document.getElementById("33").style.display="none";
        document.getElementById("51").style.display="none";
        document.getElementById("52").style.display="none";
        document.getElementById("53").style.display="none";
    }
    else if(pin==600001)
    {
        document.getElementById("state").value="Tamil Nadu";
        document.getElementById("state").style.marginTop="10px";
        document.getElementById("district").style.marginTop="10px";
        document.getElementById("city").style.marginTop="10px";
        document.getElementById("state").style.fontSize="17px";
        document.getElementById("state").style.color="black";
        document.getElementById("district").value="Chennai";
        document.getElementById("city").value="Vadapalani";
        document.getElementById("statelegend").style.display="initial";
        document.getElementById("districtlegend").style.display="initial";
        document.getElementById("citylegend").style.display="initial";
        document.getElementById("51").style.display="initial";
        document.getElementById("52").style.display="initial";
        document.getElementById("53").style.display="initial";
        document.getElementById("11").style.display="none";
        document.getElementById("12").style.display="none";
        document.getElementById("13").style.display="none";
        document.getElementById("21").style.display="none";
        document.getElementById("22").style.display="none";
        document.getElementById("23").style.display="none";
        document.getElementById("31").style.display="none";
        document.getElementById("32").style.display="none";
        document.getElementById("33").style.display="none";
        document.getElementById("41").style.display="none";
        document.getElementById("42").style.display="none";
        document.getElementById("43").style.display="none";
    }
    l[12]=1;
    }
    else{
        document.getElementById("state").value="";
        document.getElementById("district").value="";
        document.getElementById("city").value="";
        document.getElementById("state").style.marginTop="20px";
        document.getElementById("district").style.marginTop="20px";
        document.getElementById("city").style.marginTop="20px";
        document.getElementById("statelegend").style.display="none";
        document.getElementById("districtlegend").style.display="none";
        document.getElementById("citylegend").style.display="none";
        document.getElementById("11").style.display="none";
        document.getElementById("12").style.display="none";
        document.getElementById("13").style.display="none";
        document.getElementById("21").style.display="none";
        document.getElementById("22").style.display="none";
        document.getElementById("23").style.display="none";
        document.getElementById("31").style.display="none";
        document.getElementById("32").style.display="none";
        document.getElementById("33").style.display="none";
        document.getElementById("41").style.display="none";
        document.getElementById("42").style.display="none";
        document.getElementById("43").style.display="none";
        document.getElementById("51").style.display="none";
        document.getElementById("52").style.display="none";
        document.getElementById("53").style.display="none";
        l[12]=0;
    }
}
function phone_num_valid(){
    var num=document.getElementById("phone_number").value;
    if(num.length==0)
    {
        document.getElementById("phone_required1").style.display="initial";
        document.getElementById("phone_required1").style.marginBottom="-20px";
        document.getElementById("india_required1").style.display="none";
        phone_err_flag=0;
        l[6]=0;
    }
    else{
    if(num.length!=10)
    {
        document.getElementById("india_required1").style.display="initial";
        document.getElementById("india_required1").style.marginBottom="-20px";
        document.getElementById("phone_required1").style.display="none";
        phone_err_flag=1;
        l[6]=0;
    }
    else
    {
        document.getElementById("india_required1").style.display="none";
        document.getElementById("phone_required1").style.display="none";
        phone_err_flag=-1;
        l[6]=1;
    }}
}
function alt_num_valid(){
    var num=document.getElementById("alte").value;
    if(num.length!=10 && num.length>0)
    {
        document.getElementById("phone_required2").style.display="initial";
        document.getElementById("phone_required1").style.marginBottom="-20px";
        l[7]=0;
    }
    else
    {
        document.getElementById("phone_required2").style.display="none";
        document.getElementById("phone_required2").style.marginBottom="20px";
        l[7]=1;
    }
}
function date_fun(k){
    if(k.value=='')
    {
        document.getElementById("date_required1").style.display="initial";
        l[8]=0;
    }
    else{
        document.getElementById("date_required1").style.display="none";
        l[8]=1;
    }
}
function citizen_function(){
    var citi=document.getElementById("citizen").value;
    if(!citi.length>0)
    {
        document.getElementById("citizen_required").style.display="initial";
        document.getElementById("star5").style.color="red";
        l[9]=0;
    }
    else{
        document.getElementById("citizen_required").style.display="none";
        document.getElementById("star5").style.color="black";
        l[9]=1;
    }
}
function street_req(k)
{
    var st=document.getElementById("street1");
    if(!k.value.length>0)
    {
        st.style.display="initial";
        l[11]=0;
    }
    else{
        st.style.display="none";
        l[11]=1;
    }
}
function pin_req(k)
{
    var pinn=document.getElementById("pincode").value;
    if(pinn.length!=6)
    {
        k.style.display="initial";
    }
    else{
        k.style.display="none";
    }
}
function house_fun(k)
{
    var hou=document.getElementById("id2").value;
    if(hou.length>0)
    {
        k.style.color="black";
    }
    else{
        k.style.color="red";
    }
}
function pin_fun(k)
{
    var hou=document.getElementById("pincode").value;
    if(hou.length>0)
    {
        k.style.color="black";
    }
    else{
        k.style.color="red";
    }
}
var yes=1;
var no=1;
function yes_fun_on(){
    document.getElementById("yes").src="yesac.png";
}
function yes_fun_off(){
    if(yes==1)
    {
        document.getElementById("yes").src="yesbc.png";
    }
}
function no_fun_on(){
    document.getElementById("no").src="noac.png";
}
function no_fun_off(){
    if(no==1)
    {
        document.getElementById("no").src="nobc.png";
    }
}
function yes_fun(){
    document.getElementById("yes").src="yesac.png";
    document.getElementById("no").src="nobc.png";
    document.getElementById("passport_required").style.display="none";
    yes=0;
    no=1;
    l[10]=1;
}
function no_fun(){
    document.getElementById("no").src="noac.png";
    document.getElementById("yes").src="yesbc.png";
    document.getElementById("passport_required").style.display="none";
    no=0;
    yes=1;
    l[10]=1;
}
function next_page(){
    document.getElementById("next").style.boxShadow="5px 10px 18px grey";
}
function no_next_page(){
    document.getElementById("next").style.boxShadow="0px 0px 0px white";
}
function OnFileValidation() {

    var image = document.getElementById("image");

    if (typeof (image.files) != "undefined") {

        var size = parseFloat(image.files[0].size / (1024 * 1024)).toFixed(2);
        if(size > 5)
        {
            image.value="";
            l[4]=0
            document.getElementById("photo_required").style.display="initial";
        }
        else
        {
            l[4]=1
            document.getElementById("photo_required").style.display="none";

        }

    } 
}
function OnFileValidationRes() {

    var image = document.getElementById("resume");

    if (typeof (image.files) != "undefined") {

        var size = parseFloat(image.files[0].size / (1024 * 1024)).toFixed(2); 
        if(size > 5 || image.value.split("\\")[image.value.split("\\").length-1].split(".")[1]!="pdf")
        {
            image.value="";
            l[5]=0
            document.getElementById("resume_required").style.display="initial";
        }
        else
        {
            l[5]=1
            document.getElementById("resume_required").style.display="none";
            document.getElementById("uploaded").innerText=image.value.split("\\")[image.value.split("\\").length-1];

        }

    } 
}