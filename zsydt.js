"auto";

var launchResult=launchApp("学习强国");
if(!launchResult){
    toast('你还没有安装学习强国');
}

sleep(10000);

setScreenMetrics(1080, 1920);

//进入答题页面
click(797, 155);
sleep(3000);
swipe(582, 1583, 575, 509, 2000);
swipe(582, 1583, 575, 509, 2000);
sleep(1000);
click(957, 1390);
sleep(3000);

var l = 1;
while (l<=2){
    
click(558, 1363);
sleep(14000);

//开始疯狂点击
toast("此过程将持续若干秒，请耐心等待，勿动手机");
var i=0;
while(i<=90){
click(551, 1019);
click(510, 1160);
click(515, 841);
click(521, 1138);
click(551, 1500);

i = i + 1;
}

sleep(3000);
click(112, 152);
sleep(1000);
click(112, 152);
sleep(1000);
click(957, 1390);
sleep(1000);

l = l + 1;
}