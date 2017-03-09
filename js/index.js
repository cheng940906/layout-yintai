window.onload=function(){

//超值特卖
	var chaoshit=getClass("shaozhhi_tit1");
	var chaozhile=getClass("chaozhi_leftt");
	for (var i = 0; i < chaoshit.length; i++) {
		    chaoshit[i].name=i;
			chaoshit[i].onmouseover=function(){
				for (var j = 0; j < chaozhile.length; j++) {
					chaozhile[j].className="chaozhi_leftt";
					chaoshit[j].className="shaozhhi_tit1";

				};
				chaozhile[this.name].className="chaozhi_leftt active";
	            chaoshit[this.name].className="shaozhhi_tit1 zi";
		    }
	};


//专柜同款
	var zgtop=getClass("zg_top0");
	var zgtu=getClass("zg_tu");
	for (var a = 0; a < zgtop.length; a++) {
		zgtop[a].name=a;
		zgtop[a].onmouseover=function(){
			for (var b = 0; b < zgtu.length; b++) {
					zgtop[b].className="zg_top0 ";
					zgtu[b].className="zg_tu ";

				};
				zgtop[this.name].className="zg_top0 zg_top1";
	           zgtu[this.name].className="zg_tu zgtu";
		}
	};


//banner
function banner(i){


  var banner=$(".banner")[i];
  var ban=$("a",$(".bannerdi")[i]);
  var dian=$("li",$(".banner_dian")[i]);
  var bgimg=["url(img/zz.jpg)","url(img/ba.jpg)","url(img/bann.jpg)","url(img/banne.jpg)"]
  var num=0;
  var lefts=$(".lunbo")[0];
  var rights=$(".lunbo1")[0];
  function change(type){
  	  type=type||"right";
  	  if(type=="right"){
  	  	num++;
        if(num>=ban.length){
        num=0;
        }
  	  }else if(type=="left"){
  	  	num--;
  	  	if(num<=-1){
        num=ban.length-1;
        }
  	  }
     
      for (var i = 0; i < ban.length; i++) {
          ban[i].style.opacity=0;
          dian[i].className="banner_dianji";
      };
      animate(ban[num],{opacity:1});
      dian[num].className="banner_dianji lunbodian";
      banner.style.backgroundImage=bgimg[num];
  }
  var b=setInterval(change,4000)

  //轮播按钮
  
  banner.onmouseover=function(){
  	clearInterval(b);
  	lefts.style.display="block";
  	rights.style.display="block";
  }
  banner.onmouseout=function(){
  	b=setInterval(change,4000);
  	lefts.style.display="none";
  	rights.style.display="none";
  }
  rights.onclick=function(){
  	change();
  }
  lefts.onclick=function(){
  	 change("left");
  }

	//点击轮播点进行换图 
  for (var k = 0; k < dian.length; k++) {
  	dian[k].bb=k;
  	dian[k].onmouseover=function(){
  		for (var i = 0; i < ban.length; i++) {
  			ban[i].style.opacity=0;
  			dian[i].className="banner_dianji";
  		};
        ban[this.bb].style.opacity=1;
  		dian[this.bb].className="banner_dianji lunbodian";
  		num=this.bb;
  	}
  };

}
banner(0);
//边框效果
   var box=$(".chao");
   var to=$(".tops")
   var le=$(".lefts")
   var ri=$(".rights")
   var bo=$(".bottoms")

   for (var i = 0; i < box.length; i++) {
      box[i].name=i;
      
      box[i].onmouseover=function(){
        var w=parseInt(getStyle(this,"width"))+2
         var h=parseInt(getStyle(this,"height"))+2
        animate(to[this.name],{width:w})
        animate(ri[this.name],{height:h})
        animate(le[this.name],{height:h})
        animate(bo[this.name],{width:w})

      }
     box[i].onmouseout=function(){
        animate(to[this.name],{width:0})
        animate(ri[this.name],{height:0})
        animate(le[this.name],{height:0})
        animate(bo[this.name],{width:0})

      }
   };


//小轮播
  function xlun(b){
    var imgs=$("a",$(".fcbanner")[b]);  //获取元素
    var list=$("li",$(".fcbtn")[b]);
    var fa=$(".fashion_c")[b];
    var n=0; 
    var les=$(".fashion_center_lunbo")[b];
    var rits=$(".fashion_center_lunbo1")[b];

    for (var i = 1; i < imgs.length; i++) {
      imgs[i].style.left="-390px"
    };


      function move(type){
        type=type||"right"
        
        if(type=="right"){
              animate(imgs[0],{left:390})
              animate(imgs[1],{left:0});
              list[1].className="fc_da fd";
              list[0].className="fc_da";
        }else if(type=="left"){
              animate(imgs[1],{left:-390});
              animate(imgs[0],{left:0});
              list[0].className="fc_da fd";
              list[1].className="fc_da";
        }  
        
      }
      
      /*var p=setInterval(move,2000);*/
      fa.onmouseover=function(){
        /*clearInterval(p)*/
        les.style.display="block";  //轮播按钮消失
        rits.style.display="block";
      }
      fa.onmouseout=function(){
       /* p=setInterval(move,2000);*/
        les.style.display="none";  //轮播按钮消失
        rits.style.display="none";
      }
      rits.onclick=function(){
        move();
      }
      les.onclick=function(){
         move("left");
      } 
      //轮播点
      for (var i = 0; i < list.length; i++) {
        list[i].name=i;
        list[i].onclick=function(){
        next=this.name;
        imgs[now].style.left="0px";
        imgs[next].style.left="390px";
        animate(imgs[now],{left:-390});
        animate(imgs[next],{left:0});
        list[next].className="fc_da fd";
        list[now].className="fc_da";
        now=next;
        }
      };
  }
  for (var i = 0; i <6; i++) {
     xlun(i);
  };
//*********************跑马灯****************


  function dd(i){
    var pbanner=$(".ffff")[i];
    var box=$(".fal")[i];
    var len=getChild(box).length;
    var w=getStyle(getFirst(box),"width");
    var btnleft=$(".fashion_left_sub")[i];
    var btnright=$(".fashion_left_sub1")[i];
    box.style.width=len*w+"px";
     btnright.onclick=function(){
        var first=getFirst(box);
       animate(first,{width:0},500,function(){
          box.appendChild(first)
          animate(first,{width:180});
       });
     }
     btnleft.onclick=function(){
       var last=getLast(box);
       last.style.width=0;
       box.insertBefore(last,getFirst(box))
        animate(last,{width:180});
     }

  }
  for (var i = 0; i < 10; i++) {
      dd(i)
  };  
//******************侧滑******************
    var z=$(".chaozhi")[0];   
    var fu=$(".fu")[0];  //模块导航
    var list=$("li",fu);
    var louu=$(".lou")[0];
    var loo=$(".l");
    var noow=0
    var objj=document.documentElement.scrollTop?document.documentElement:document.body;   //获取窗口的滚动条内容超出可视窗口的距离
    window.onscroll=function(){  //监测滚动条位置的变化
      
      if(objj.scrollTop>=z.offsetTop){   //如果滚动条比类名为baihuo的元素到窗口的距离大，就显示隐藏的模块导航
        fu.style.display="block";
      }else{
        fu.style.display="none";  //否则就不显示
      }
         
         //取出模块导航和楼的下标，对应显示哪层楼，选中哪个导航
      for (var i = 0; i < loo.length; i++) {   //遍历楼
        if(objj.scrollTop+100>=loo[i].offsetTop){   
            noow=i; 
          for (var j = 0; j < list.length; j++) {  //遍历模块导航
            list[j].style.lineHeight="999px";
            list[j].style.background="";  //
          };
            list[i].style.background="#E2024B";
            list[i].style.lineHeight="22px";


          
        }//默认状态下的模块导航
        if(loo[i].offsetTop==loo[0].offsetTop-10){
          for (var j = 0; j < list.length; j++) {
            list[j].style.background="";
          };
        }
            
      };
    }
    //移入哪个模块导航哪个背景变换，点击哪个模块窗口显示哪层楼
    for (var i = 0; i < list.length; i++) {
      list[i].aa=i;
      list[i].onclick=function(){
        /*obj.scrollTop=lo[this.aa].offsetTop-50;*/
            animate(objj,{scrollTop:loo[this.aa].offsetTop})
      }
      list[i].onmouseover=function(){
        list[this.aa].style.background="#E2024B";
        list[this.aa].style.lineHeight="22px";

      }
      list[i].onmouseout=function(){
        if(noow!=this.aa){list[this.aa].style.background="";list[this.aa].style.lineHeight="300px";}
      }
    };
    list[9].onclick=function(){
        animate(objj,{scrollTop:0})
    }
}
   

