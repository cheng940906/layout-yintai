/*****************************************************/
//1.解决类名的兼容问题
function getClass(classname,father){
	father=father||document
	if(father.getElementsByClassName){  //判断浏览器如果是现代的话直接获取类名
		return father.getElementsByClassName(classname);
	}else{//如果是IE8/IE8以下进行获取标签名
		var all=document.getElementsByTagName("*");
		var newarr=[];
        for (var i = 0; i < all.length; i++) {   //对标签进行遍历
        	if(checkRap(classname,all[i].className)){  //如果传入的类名与遍历的类名一样
                 newarr.push(all[i]);  //将遍历到的一样的类名放入新数组
        	}
        };
	}
    return false;
}
function checkRap(val,string){  //判断
	var arr=string.split(" ");  //将传入的字符串以空格为分隔符，分成两段
	for(i in arr){      //遍历传入的string
		   if(arr[i]==val){   //传入的val与遍历出来的string的元素一样时返回真
              return true;
		   }
	}
    return false;
}

//2.获取样式的值的兼容问题函数
function getStyle(obj,attr){
	if(obj.currentStyle){
       return obj.currentStyle[attr];
	}else{
       return getComputedStyle(obj,null)[attr];
	}
}


//3.获取元素的兼容函数（可以支持标签、id、class）
function $(selector,father){
	father=father||document;
  if(typeof selector=="string"){
	  	selector=selector.replace(/^\s*|\s*$/g,"");
	  	if(selector.charAt(0)=="."){
	        return getClass(selector.substring(1),father);
	  	}else if(selector.charAt(0)=="#"){
	  		return document.getElementById(selector.substring(1));
	  	}else if(/^[a-z][1-6a-z]*/g.test(selector)){
	        return father.getElementsByTagName(selector);
	  	}
  }else if(typeof selector=="function"){
     window.onload=function(){
     	selector();
     }
  }
}


//4.获取所有的子节点的兼容函数
//father
function getChild(father,type){
	type=type||"a";
     var all=father.childNodes;
     var newarr=[];
     for (var i = 0; i < all.length; i++) {
     	if(type=="a"){
     		if(all[i].nodeType==1){
     		    newarr.push(all[i]);
     	    }
     	}else if(type="b"){
     		if(all[i].nodeType==1||all[i].nodeType==3&&all[i].nodeValue.replace(/^\s*|\s*$/g,"")!=""){
     		    newarr.push(all[i]);
     	    }
     	}
     	
     };
    return newarr;
}

//5.获取第一个子节点
function getFirst(father){
	return getChild(father)[0];
}

function getLast(father){
	return getChild(father)[getChild(father).length-1];
}


function getNum(father,xb){
	return getChild(father)[xb];
}

//获取下一个兄弟节点
function  getNext(obj){
	var next=obj.nextSibling;
	if(!next){
		return false;
	}
	while(next.nodeType==3||next.nodeType==8){
		next=next.nextSibling;
		if(!next){
			return false;
		}
	}
	return next;
}
//获取上一个兄弟节点
function  getPrevious(obj){
	var next=obj.previousSibling;
	if(!next){
		return false;
	}
	while(next.nodeType==3||next.nodeType==8){
		next=next.previousSibling;
		if(!next){
			return false;
		}
	}
	return next;
}