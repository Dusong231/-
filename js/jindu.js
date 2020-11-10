window.onload=()=>{
    let jindu=document.getElementsByClassName("jindu")[0];
    let content=document.getElementsByClassName("jindu_content")[0];
    let tips=document.getElementsByClassName("jindu_tips")[0];
 
    console.log(tips.style.left);
    setInterval(function(){
       let left = tips.offsetleft;
       let width = content.offsetWidth;
        if (width<715) {
            tips.style.left=tips.offsetLeft+18+"px"; 
            content.style.width=content.offsetWidth+18+"px";
        }else{
            clearInterval()
        }
    },100)
    let one=document.getElementsByClassName("one")
    let tab=document.getElementsByClassName("config_tab")[0].getElementsByTagName("div")
    let as=document.getElementsByClassName("config_tab")[0].getElementsByTagName("a")
    for (let i = 0; i < tab.length; i++) {
       tab[i].onclick=function(){
        for (let j = 0; j < tab.length; j++) {
            as[j].className="";
            one[j].style.display = 'none';
           }
           as[i].className="on";
           one[i].style.display = 'block';
          ;
       }
        
    }
}