window.onload=function(){
    // 轮播
    let imglist = getClass('img-list')[0];
    let imgs = imglist.getElementsByTagName('li');
    let imgW = parseInt(getComputedStyle(imglist,null).width);
    let btn1 = getClass('banner-box')[0];
    let lefts = getClass('banner-left',btn1)[0];
    let rights = getClass('banner-right',btn1)[0];
    let btn = getClass('yuan-list')[0];
    let lis = btn.getElementsByTagName('li');
    console.log(lis);
    let now = 0;
    let next = 0;
    let flag=true;
    let t;
    t=setInterval(move,2000);
    // 自动轮播
    function move(){
       next++;
       if(next==imgs.length){
        next=0;
       }      
       imgs[next].style.left = `${imgW}px`;
       animate(imgs[now],{left:-imgW});
       animate(imgs[next],{left:0},function(){
        flag=true;
       });
        lis[now].style.background=' #78584F';
       lis[next].style.background='#fff';
       now=next;
    }
    function movel(){
       next--;
       if(next<0){
        next=imgs.length-1;
       }      
       imgs[next].style.left = `${-imgW}px`;
       animate(imgs[now],{left:imgW});
       animate(imgs[next],{left:0},function(){
        flag=true;
       });
       now=next;
    }
    // 鼠标移入自动轮播停止
    btn1.onmouseover=function(){
        clearInterval(t);
    }
    btn1.onmouseout=function(){
        t=setInterval(move,2000);
    }
    // 左右按钮
    rights.onclick=function(){
        if(!flag){
            return;
        }
        move();
        flag=false;
    }
    lefts.onclick=function(){
        if(!flag){
            return;
        }
        movel();
        flag=false;
    }
    // 移入
    for(let i=0;i<lis.length;i++){
        lis[i].onclick=function(){
            if(now==i){
                return;
            }
            lis[now].style.background=' #78584F';
            lis[i].style.background='#fff';
            imgs[i].style.left=imgW+'px';
            animate(imgs[now],{left:-imgW});
            animate(imgs[i],{left:0});
            now=next=i;
        }
    }
    // 侧导航
    let aside = getClass('cedaohang')[0];
    let asideli = aside.getElementsByTagName('li');
    let items = getClass('item');
    for(let i=0;i<asideli.length;i++){
        asideli[i].onmouseover=function(){
            items[i].style.display='block';
        }
        asideli[i].onmouseout=function(){
            items[i].style.display='none'
        }
    }
    // 小米明星单品
    let goods = getClass('goods2')[0];
    let goodsW = parseInt(getComputedStyle(goods,null).width);
    console.log(goodsW)
    let bigg = document.querySelector('ul.bigg');
    let biggW = parseInt(getComputedStyle(bigg,null).width);
    console.log(biggW)
    let btn0 = getClass('nei-left')[0];
    let btn00 = getClass('nei-right')[0];

    console.log(btn0)
    btn0.onclick=function(){
        // bigg.style.left = goodsW+'px';
        animate(bigg,{left:-goodsW});
        clearInterval(t2);     
    }
    btn00.onclick=function(){
        // bigg.style.left = goodsW+'px';
        animate(bigg,{left:0}) 
        clearInterval(t2);     
    }
    let t2 = setInterval(fn,3000);
    function fn(){
         animate(bigg,{left:-goodsW});
         if(bigg.style.left=='-1226px'){
            animate(bigg,{left:0}) 
         }
         if(bigg.style.left=='0px'){
            animate(bigg,{left:-goodsW});
         }
    }
    
    

    
}