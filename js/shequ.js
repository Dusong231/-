window.onload = function(){
    let af=document.getElementById("af");
    let imgs=document.getElementsByClassName("imgs");
    af.onmouseover=function(){
        for (let i = 0; i < imgs.length; i++) {
          imgs[i].classList.add('ani')
            
        }
    }
    let bf=document.getElementById("bf");
    let imgsone=document.getElementById("bf").getElementsByTagName("img");
    bf.onmouseover=function(){
           imgsone[0].classList.add('aniTwo_af')
           imgsone[1].classList.add('aniTwo_bf')
    }
    let cf=document.getElementById("cf")
    let assit=document.getElementsByClassName("assit")[0]
    let ul=document.getElementsByTagName("ul")[0]
    cf.onmouseover=function(){
        assit.classList.add("aniThree_af")
        ul.classList.add("aniThree_bf")
    }
}
  