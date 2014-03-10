﻿$(document).ready(function () {
    var id = 0;
    var mode = 'getTree';
    setMenuTree(0);
});

//root     根节点
//level    默认显示级次
//url      链接
//img     默认图片
//imgOnClick 鼠标点击时图片
//isOpen   是否打开
function addTree(jsonData, root, level, url, img, imgOnClick, isOpen) {
    var arr = [];
    var treeView = getList(root);
    for (var i = 0; i < treeView.length; i++) {
        if (treeView[i].Has_Children == "true") {
            $div = $("<div><span><img src='" + img + "'/>" + treeView[i].Menu_Name + "</span></div>");
        }
    }
}

//初始化生成树
//root默认显示层次
function setMenuTree(root) {
    var arr = new Array();
    var treeView = getList(root);
    for (var i = 0; i < treeView.length; i++) {
        var node = treeView[i].Has_Children;
        $div = $("<div id=" + treeView[i].Menu_Id + " data-flag=" + node + " class=\"tree_li_header\"><span class=\"tree_title\">" + treeView[i].Menu_Name + "</span><span class=\"tree_loading\" ></span><span class=\"div_tree_collapsed\"></span></div>");
        ToggleIcon($div);
        $(".tree_div").append($div);
    }
}

//图标轮转并获取绑定单击事件函数
function ToggleIcon($div) {
    var flag = true;
    var id = $div.attr("id");
    var hasChild = $div.attr("data-flag");
    $div.toggle(function () {
        $(this).children("span").eq(1).show();
        var jsonData = getList(id);
        var node = addTree(jsonData);
        node.hide();
        node.insertAfter($div);
        $(this).next().slideDown(150);
        $(this).children("span").last().removeClass("div_tree_collapsed");
        $(this).children("span").last().addClass("div_tree_expanded");
        $(this).children("span").eq(1).hide();
    }, function () {
        $(this).children("span").last().removeClass("div_tree_expanded");
        $(this).children("span").last().addClass("div_tree_collapsed");
        $(this).next().slideUp(150);
    });
}

//获取节点数据JSON列表列表,返回为
function getList(id) {
    var result = null;
    var type = 'a';
    $.ajax({
        type: "post",
        async: false,
        url: "Handler/TreeView.ashx",
        data: "type=" + type + "&Id=" + id,//data:"Id="+id+"&a="+a+"&b="+b;    示例
        dataType: "json",
        success: function (data) {
            result = eval(data);
        }
    });
    return result;
}

//根据节点数据列表生成<div></div>子节点树
function addTree(jsonTree) {
    $div = $("<div id=\"div_" + jsonTree[0].Menu_Id + "\" ></div>");
    for (var i = 0; i < jsonTree.length; i++) {
        var node = jsonTree[i].Has_Children;
        id = jsonTree[i].Menu_Id;
        $div1 = $("<div id=" + jsonTree[i].Menu_Id + "><span id=" + jsonTree[i].Menu_Id + " class=\"tree_hit tree_collapsed \"></span><span class=\"tree_folder\"></span><div class=\"tree_title\">" + jsonTree[i].Menu_Name + "</div></div>");
        $div.append($div1);
        //iconToggle($div1, id);
        //}
        //else {
        //    $div1 = $("<div><span class=\"tree_file\"></span><div dd=" + jsonTree[i].Link_Url + " id=" + jsonTree[i].Menu_Id + " class=\"tree_title\">" + jsonTree[i].Menu_Name + "</div></div>");
        //    $div.append($div1);
        //}
    }
    return $div;
}

//设置Url
function setIframeSrc() {
    var url = $(this).attr('dd');
    url = "Advertisement/" + url;
    //alert(url);
    $("#frameContent").attr("src", "" + url + "");
}

//通用设置监听事件函数
function addEvent(elememt, type, fn) {
    if (window.attachEvent) {
        addEvent = function (elememt, type, fn) {
            elememt.attachEvent("on" + type, fn);
        };
    }
    else {
        addEvent = function (elememt, type, fn) {
            elememt.addEventListener(type, fn, false);
        }
    }
    addEvent(elememt, type, fn);
}


