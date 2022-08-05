var botton=document.getElementById('team6_btn');
botton.addEventListener('click',team6_showbg,false);
botton.addEventListener('click',team6_scrollFunction,false);
var button1=document.getElementById("team6_n180140_button");
function team6_showbg(){
    document.getElementById('team6_tick').style.display='block';
    document.getElementById('team6_btn').style.display='none';
    document.getElementById('team6_text').style.color='#7b0473';
    document.getElementById('team6_3block').style.display="none";
    document.getElementById('team6_2block').style.display='block';
    document.getElementById('team6_3inblock').style.display='block';
    var d=new Date();
    var day=d.getDate();
    var month=d.getMonth();
    var l=['jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var m=l[month];
    var year=d.getFullYear();
    var hh=d.getHours();
    var mm=d.getMinutes();
   
    var session="AM";
    if(hh>12)
        hh=hh-12;
        session="PM";
    if(hh==0)
        hh=12;
    day=(day<10)?"0"+day:day;
    hh=(hh<10) ? "0"+hh:hh;
    mm=(mm<10)?"0"+mm:mm;
    var time=(day+" "+m+" "+year+" "+hh+":"+mm+" "+session);
    document.getElementById('team6_date').innerText=time;

}
function team6_scrollFunction()
{
    window.scrollTo(0,200,document.body.scrollHeight);
}
function team6_validate()
{
    var value=document.getElementById('team6_btn').checked;
    if(value==false)
    {
        return false;
    }
}
var t6_name=document.getElementById("team6_fullname");
t6_name.addEventListener('keyup',team6_name,false);   
function team6_name()
        {
           var t6_n=document.getElementById("team6_fullname").value;
            var t6_r=/\d/;
            var t6_r1=/[`,!,@,#,$,%,^,&,*,(,),{,},\[,\],\,;,:,?,\.,\,<,>,/,~,\+,-,\*,=,]/;
            if(t6_n.length>0)
            {
                if(t6_n.length<4 || t6_n.length>20)
                {
                    var t6_name1=document.getElementById("team6_nerror");
                    t6_name1.innerHTML="min 4 and max 20 characters";
                    t6_name1.style.color="red";
                    return false;
                }

                if(t6_r.test(t6_n))
                {
                    var t6_name2=document.getElementById("team6_nerror");
                    t6_name2.innerHTML="It should not contain digits";
                    t6_name2.style.color="red";
                    return false;
                }
                if(t6_r1.test(t6_n))
                {
                    var t6_name3=document.getElementById("team6_nerror");
                    t6_name3.innerHTML="It should not contain special characters";
                    t6_name3.style.color="red";
                    return false;
                }

                var t6_ne=document.getElementById("team6_nerror");
                t6_ne.innerHTML="valid";
                t6_ne.style.color="green";
                setInterval(team6_aname,3000);
            }
            else
            {
                var t6_ne1=document.getElementById("team6_nerror");
                t6_ne1.innerHTML="Please....Enter your name";
                t6_ne1.style.color="red";
                return false;
            }
            function team6_aname()
            {
                document.getElementById('team6_nerror').style.visibility='hidden';
                return false;
            }
}
var t6_place=document.getElementById("team6_placename");
t6_place.addEventListener('keyup',team6_place,false);
function team6_place()
{
           var t6_p=document.getElementById("team6_placename").value;
           var t6_rp=/\d/;
           var t6_rp1=/[`,!,@,#,$,%,^,&,*,(,),{,},\[,\],\,;,:,?,\.,\,<,>,/,~,\+,-,\*,=,]/;
            if(t6_p.length>0)
            {
                if(t6_p.length<4 || t6_p.length>15)
                {
                    var t6_place=document.getElementById("team6_perror");
                    t6_place.innerHTML="min 4 and max 15 characters";
                    t6_place.style.color="red";
                    return false;
                }
                if(t6_rp1.test(t6_p))
                {
                    var t6_place1=document.getElementById("team6_perror");
                    t6_place1.innerHTML="It should not contain special characters";
                    t6_place1.style.color="red";
                    return false;

                }

                if(t6_rp.test(t6_p))
                {
                    t6_place2=document.getElementById("team6_perror");
                    t6_place2.innerHTML="It should not contain digits";
                    t6_place2.style.color="red";
                    return false;
                }
                var t6_pe=document.getElementById("team6_perror");
                t6_pe.innerHTML="valid";
                t6_pe.style.color="green";
                setTimeout(team6_pname,3000);
            }
            else
            {
                var t6_pe1=document.getElementById("team6_perror");
                t6_pe1.innerHTML="Please....Enter your place";
                t6_pe1.style.color="red";
                return false;
            }
            function team6_pname()
            {
                document.getElementById('team6_perror').style.visibility='hidden';
                return false;
            }

}
function team6_n180140_validation()
{
    var t6_call1=team6_validate();
    if(t6_call1==false)
    {
        return false;
    }
    var t6_call2=team6_name();
    if(t6_call2==false)
    {
        return false;
    }
    var t6_call3=team6_place();
    if(t6_call3==false)
    {
        return false;
    }
    var t6_sri=document.getElementById("team6_check").checked;
    if(t6_sri==false)
    {
        document.getElementById("mani").style.visibility="visible";
        document.getElementById("srilakshmi").style.visibility="hidden";
        return false;
    }
    else
    {
        document.getElementById("srilakshmi").style.visibility="visible";
        document.getElementById("mani").style.visibility="hidden";
        return true;
    }
}
