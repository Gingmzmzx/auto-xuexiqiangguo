"auto";

var launchResult=launchApp("学习强国");
if(!launchResult){
    toast('你还没有安装学习强国');
}

sleep(10000);

setScreenMetrics(720, 1280);

click(450,193);
sleep(3000);
click(465,408);
sleep(5000);

//返回
click(58,96);
sleep(2000);
click(27, 179);
sleep(2000);

toast("本地频道执行完毕");

launchApp("自动学习强国");