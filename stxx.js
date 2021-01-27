"auto";

var launchResult=launchApp("学习强国");
if(!launchResult){
    toast('你还没有安装学习强国');
}

sleep(10000);

setScreenMetrics(720, 1280);

click(224,1166);
sleep(3000);
click(390,460);
sleep(542000);
click(66,111);

//返回
click(367,1153);
sleep(2000);

toast("视听学习执行完毕");

launchApp("自动学习强国");