"auto";

var launchResult=launchApp("学习强国");
if(!launchResult){
    toast('你还没有安装学习强国');
}

sleep(10000);

setScreenMetrics(720, 1280);

//点击文章
click(366,446);
sleep(5000);
swipe(336,886,336,329,2000);
sleep(30000);
swipe(336,886,336,329,2000);
sleep(32000);
//分享
click(670,100);
sleep(1000);
click(93,643);
sleep(2000);
click(363,609);
sleep(2000);
click(568,804);
sleep(2000);
//退出
click(50,87);
sleep(1000);
click(50,87);
sleep(1000);

toast("已阅读一篇文章");

swipe(630,515,130,515,2000);

//点击文章
click(366,446);
sleep(5000);
swipe(336,886,336,329,2000);
sleep(30000);
swipe(336,886,336,329,2000);
sleep(32000);
//分享
click(670,100);
sleep(1000);
click(93,643);
sleep(2000);
click(363,609);
sleep(2000);
click(568,804);
sleep(2000);
//退出
click(50,87);
sleep(1000);
click(50,87);
sleep(1000);

toast("已阅读两篇文章");

click(353,878);
sleep(5000);
swipe(336,886,336,329,2000);
sleep(30000);
swipe(336,886,336,329,2000);
sleep(32000);
click(50,87);
sleep(1000);
toast("已阅读三篇文章");

swipe(363,764,363,545,2000);
click(353,907);
sleep(5000);
swipe(336,886,336,329,2000);
sleep(30000);
swipe(336,886,336,329,2000);
sleep(32000);
click(50,87);
sleep(1000);
toast("已阅读四篇文章");

swipe(363,764,363,545,2000);
click(353,907);
sleep(5000);
swipe(336,886,336,329,2000);
sleep(30000);
swipe(336,886,336,329,2000);
sleep(32000);
click(50,87);
sleep(1000);
toast("已阅读五篇文章");

swipe(363,764,363,545,2000);
click(353,907);
sleep(5000);
swipe(336,886,336,329,2000);
sleep(30000);
swipe(336,886,336,329,2000);
sleep(32000);
click(50,87);
sleep(1000);
toast("已阅读六篇文章");

toast("选读文章+分享执行完毕");

launchApp("自动学习强国");