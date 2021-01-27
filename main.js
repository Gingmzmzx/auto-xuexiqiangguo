"ui";

alert("协议及说明", "此应用仅供练习娱乐使用，切勿用于商业行为和正规场所。若出事使用者承担所有法律责任，开发者盖不承担责任。\n如果继续使用此应用即代表您同意此协议\n说明：此应用仅适用于Android7.0以上的版本，且已开启虚拟导航栏！\n请竖屏使用应用");
toast("请竖屏使用应用");

var color = "#005757";

ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar" title="自动学习强国"/>
                <tabs id="tabs"/>
            </appbar>
            <viewpager id="viewpager">
                <frame>
                    <vertical>
                        <button text="先点我开启无障碍,如果没有反应，说明已经开启" style="Widget.AppCompat.Button.Colored" id="click_me" w="*" />
                        <button text="一键刷积分" style="Widget.AppCompat.Button.Colored" id="click_me4" w="*" />
                        <button text="-------以下为单个任务执行-------" style="Widget.AppCompat.Button.Borderless.Colored" w="*"/>
                        <button text="选读文章+分享" style="Widget.AppCompat.Button.Colored" id="click_me1" w="*" />
                        <button text="视听学习" style="Widget.AppCompat.Button.Colored" id="click_me2" w="*" />
                        <button text="本地频道" style="Widget.AppCompat.Button.Colored" id="click_me3" w="*" />
                        <button text="争上游答题" style="Widget.AppCompat.Button.Colored" id="click_me5" w="*" />
                        <button text="-------公告-------" style="Widget.AppCompat.Button.Borderless.Colored" w="*"/>
                        <button text="此应用仅适用于Android7.0以上的版本，且已开启虚拟导航栏！" style="Widget.AppCompat.Button.Borderless.Colored" w="auto"/>
                    </vertical>
                </frame>
                <frame>
                <vertical>
                    <text id="v220" />
                    <text id="v204" />
                    <text id="v203" />
                    <text id="v202" />
                    <text id="v201" />
                    <text id="v200" />
                    <text id="v101" />
                    <text id="v100" />
                </vertical>
                </frame>
                <frame>
                <vertical>
                    <webview id="webview" h="300" margin="0 16"/>
                    <text text="官方网站：http://xzy.free.idcfengye.com/" />
                    <text text="有时访问会显示not found请过后重试或联系站长" />
                </vertical>
                </frame>
            </viewpager>
        </vertical>
        <vertical layout_gravity="left" bg="#ffffff" w="280">
            <img w="280" h="200" scaleType="fitXY" src="http://images.shejidaren.com/wp-content/uploads/2014/10/023746fki.jpg"/>
            <list id="menu">
                <horizontal bg="?selectableItemBackground" w="*">
                    <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}"/>
                    <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center"/>
                </horizontal>
            </list>
        </vertical>
    </drawer>
);

ui.v220.setText("v2.2.0:2021.1.27\n1，添加争上游答题\n2，修复个别执行没有返回的问题\n3，添加协议及说明\n");
ui.v204.setText("v2.0.4:2020.8.29\n1，添加应用安装检测\n2，修复视听学习不能加积分的bug\n");
ui.v203.setText("v2.0.3:2020.8.28\n1，修复一些bug\n2，添加公告\n");
ui.v202.setText("v2.0.2:2020.8.27\n1，修复选读文章bug\n2，添加更新记录\n");
ui.v201.setText("v2.0.1:2020.8.27\n1，修复一些bug\n2，添加弹窗提示\n");
ui.v200.setText("v2.0.0:2020.8.27\n1，修复视听学习及一些bug\n2，添加本地频道及分享功能\n3，更新UI界面\n4，添加一键刷积分\n");
ui.v101.setText("v1.0.1:2020.8.26\n1，修复一些bug\n");
ui.v100.setText("v1.0.0:2020.8.26\n原始版本，构建UI布局。添加选读文章及视听学习功能");

//创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu=>{
    menu.add("协议");
    menu.add("关于");
});
//监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item)=>{
    switch(item.getTitle()){
        case "协议":
            alert("协议", "此应用仅供练习娱乐使用，切勿用于商业行为和正规场所。若出事使用者承担所有法律责任，开发者盖不承担责任。\n如果继续使用此应用即代表您同意此协议");
            break;
        case "关于":
            alert("关于", "自动学习强国 v2.2.0 ，徐子越制作");
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

//设置滑动页面的标题
ui.viewpager.setTitles(["自动", "更新记录", "xzy的网站"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

//让工具栏左上角可以打开侧拉菜单
ui.toolbar.setupWithDrawer(ui.drawer);

ui.menu.setDataSource([
  {
      title: "作者QQ：2417481092",
      icon: "@drawable/ic_android_black_48dp"
  },
  {
      title: "作者微信：xu13515380920",
      icon: "@drawable/ic_settings_black_48dp"
  },
  {
      title: "作者电话：13515380920",
      icon: "@drawable/ic_favorite_black_48dp"
  },
  {
      title: "退出",
      icon: "@drawable/ic_exit_to_app_black_48dp"
  }
]);

ui.menu.on("item_click", item => {
    switch(item.title){
        case "退出":
            ui.finish();
            break;
    }
})

ui.webview.loadUrl("http://xzy.free.idcfengye.com/");

ui.click_me.on("click", ()=>{
    toast("选择'自动学习强国'开启无障碍");
    engines.execScript("选择'自动学习强国'开启无障碍","click(0,0);");
});

ui.click_me1.on("click", ()=>{
    toast("过程中请不要动手机！");
    engines.execScriptFile("wyxdwz.js");
});

ui.click_me2.on("click", ()=>{
    toast("过程中请不要动手机！");
    engines.execScriptFile("stxx.js");
});

ui.click_me3.on("click", ()=>{
    toast("过程中请不要动手机！");
    engines.execScriptFile("bdpd.js");
});

ui.click_me4.on("click", ()=>{
    toast("过程中请不要动手机！");
    engines.execScriptFile("xxqg.js");
});

ui.click_me5.on("click", ()=>{
    toast("过程中请不要动手机！");
    engines.execScriptFile("zsydt.js");
});