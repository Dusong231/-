window.onload=()=>{
    let list=document.getElementById("list");
    let main_roll=document.getElementById("main_roll");
    let dots=document.getElementById("dot").getElementsByTagName("span");
    let index=0;
    let left=0;
    
    // 绑定点击焦点图标的事件
    
    for(let i=0;i<dots.length;i++){   
        dots[i].onclick=()=>{
            left=parseInt(list.style.left)
            let new_index=i;
           
            index=new_index > 4 ? 0 :new_index;
            
            let new_left=index*-750;
            index=new_index;
           
            antoPlay(new_left);           
            
        }
    }
    // 轮播转动的方法
    function antoPlay(new_left){
        // 现在起点的位置
       let left = parseInt(list.style.left);
        
        let offset=new_left -left 
        let interval=50;
        let speed=offset/(750/interval);
       
        function go(){
            left =parseInt(list.style.left);
            let next_left=left+speed;
           
            list.style.left=next_left+"px";
        //    console.log(index)
            if (speed<0 && next_left>=new_left) {
                setTimeout(()=> {
                  
                    // changeDot();
                   go(); 
                }, interval)
            }else {
                list.style.left = new_left + "px"; // 由于移动可能会有一部偏差，所以最后时把list的位置强制放到终点上
               
            }
            
        
        }
        go();
    }
    // 自动轮播图片的方法
    function animate() {
        // for(let i=0;i<dots.length;i++){
           
        // }
        auto = setInterval(() => {
            left=parseInt(list.style.left)
            let new_left=index*-750;
            changeDot()
            index= ++index > 4 ? 0 :index;
            // console.log(index)
           
            antoPlay(new_left);
        
        }, 2000);
    }
      // 检查并显示对应片图焦点图标签的方法
    function changeDot(){
        for(let i=0;i<dots.length;i++){
            dots[i].className="";
        }
        console.log(index)
        dots[index].className="on";
    }

    
    // antoPlay();
     animate();
    //  导航切换
    let navChange=document.getElementById("navChange").getElementsByTagName("div");
    let navs=document.getElementById("navs").getElementsByTagName("span");
    
   for (let i = 0; i < navChange.length; i++) {
        navs[i].onclick =function(){
           
           for (let j = 0; j < navChange.length; j++) {
               navChange[j].style.display = 'none'
               navs[j].className=""
           }
           navChange[i].style.display = 'block' 
           navs[i].className="on"
        }
       
   }
   let configChange=document.getElementById("config").getElementsByTagName("span");
   let afContent=document.getElementById("afContent").getElementsByTagName("div");
   for (let i = 0; i < afContent.length; i++) {
    configChange[i].onclick =function(){
       
       for (let j = 0; j < afContent.length; j++) {
        configChange[j].className="";
        afContent[j].style.display = 'none';
       }
       afContent[i].style.display = 'block';
       configChange[i].className="on";
    }
   
}
   
        

    
}