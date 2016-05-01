/**
 * Created by hao on 2016/1/26.
 */
window.onload=function(){
    var oTemp=document.getElementById('temp');
    var oLi=oTemp.getElementsByTagName('li');

    var oNav=document.getElementById('nav');
    var oNavSelect=getByClass(oNav,'selected')[0];
    var oText=getByClass(document,'text');

    var arr=['red','yellow','blue','black','green'];
    var n;

    //事件绑定
    for(var i=0;i<oLi.length;i++){
        (function(){
            var p=i;
            oLi[p].onclick=function(){
                changeTemp(arr[p]);
            }
        })();
    }

    n=arr.indexOf(localStorage.temp);
    //默认样式
    if(localStorage.temp){
        localStorage.temp='green';
    }
    //模拟点击
    oLi[n].click();

    //更改样式主题
    function changeTemp(str){
        switch (str){
            case 'red':
                oNavSelect.style.background='#E64270';
                oNav.style.borderTopColor='#E64270';
                for(var i=0; i<6 ;i++){
                    oText[i].style.color='#E64270';
                }
                localStorage.temp="red";
                break;

            case 'yellow':
                oNavSelect.style.background='#EFD61B';
                oNav.style.borderTopColor='#EFD61B';
                for(var i=0; i<6 ;i++){
                    oText[i].style.color='#EFD61B';
                }
                localStorage.temp="yellow";
                break;

            case 'blue':
                oNavSelect.style.background='#3D80F5';
                oNav.style.borderTopColor='#3D80F5';
                for(var i=0; i<6 ;i++){
                    oText[i].style.color='#3D80F5';
                }
                localStorage.temp="blue";
                break;

            case 'black':
                oNavSelect.style.background='#353B45';
                oNav.style.borderTopColor='#353B45';
                for(var i=0; i<6 ;i++){
                    oText[i].style.color='#353B45';
                }
                localStorage.temp="black";
                break;

            case 'green':
                oNavSelect.style.background='#0AA770';
                oNav.style.borderTopColor='#0AA770';
                for(var i=0; i<6 ;i++){
                    oText[i].style.color='#0AA770';
                }
                localStorage.temp="green";
                break;

        }

    }

    /**
     * 函数 getbyclass
     * @param oParent 目标的父极dom
     * @param sClass 目标classname
     * @returns {Array} 找到的class符合的dom array
     */
    function getByClass(oParent,sClass){
        var aEle=oParent.getElementsByTagName('*');
        var aResult=[];
        var re=new RegExp('\\b'+sClass+'\\b', 'i');

        for(var i=0;i<aEle.length;i++){
            if(re.test(aEle[i].className)){
                aResult.push(aEle[i])
            }
        }
        return aResult;
    }


};