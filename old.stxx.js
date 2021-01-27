"auto";

var launchResult=launchApp("学习强国");
if(!launchResult){
    toast('你还没有安装学习强国');
}

sleep(10000);

setScreenMetrics(720, 1280);

click(507,1145);
sleep(2000);
click(616,200);
sleep(2000);
click(130,840);
sleep(62000);
toast("已观看一分钟");
click(365,840);
sleep(62000);
toast("已观看两分钟");
click(600,840);
sleep(62000);
toast("已观看三分钟");
click(124,1005);
sleep(62000);
toast("已观看四分钟");
click(380,1005);
sleep(62000);
toast("已观看五分钟");
click(602,1005);
sleep(62000);

toast("视听学习执行完毕");

launchApp("自动学习强国");