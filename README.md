# LXXUploadPic－图片上传UI框架

## 简介
#### LXXUploadPic是一个用户上传图片的Web前端框架，在引入头文件的前提下，开发者只需要在HTML源码中添加一行标记就能够在页面上生成美观的UI。该框架基于JQuery，使用了HTML、CSS、Javascript完成。

## 使用方法
1. 引入css/javascript文件

```html
<link href="./LXXUploadNeeded/LXXUploadPic.css" rel="stylesheet" type="text/css">
<script src="./LXXUploadNeeded/jquery-2.2.1.js"></script>
<script src="./LXXUploadNeeded/LXXUploadPic.js"></script>
```

2. 添加HTML标记

```html
<div id="LXXUploadPic"></div>
```

3. 设置属性
    - 通过HTML直接设置

    ```html
    <div id="LXXUploadPic" LXXCol="3" LXXRow="1" LXXWidth="100" LXXHeight="100"></div>
    ```

    - 通过js设置配置项

    ```javascript
    //配置项
    var colNumber = 1;	//列数
    var rowNumber = 2;	//行数
    var width = 300;	//框高
    var height = 100;	//框宽
    ```

## 效果展示
### 3x3
![3 x 3](http://img.blog.csdn.net/20160323214844805)

### 1x3
 ![3x1](http://img.blog.csdn.net/20160323214919087)

### 3x1
![3x1](http://img.blog.csdn.net/20160323214947509)

