//配置项
var colNumber = 1;	//列数
var rowNumber = 2;	//行数
var width = 300;	//框高
var height = 100;	//框宽

/**
根据配置项搭建UI
*/
function makeUI(){
//从html标签读取配置项
	var htmlColNumber = $('#LXXUploadPic').attr('LXXCol');
	var htmlRowNumber = $('#LXXUploadPic').attr('LXXRow');
	colNumber = htmlColNumber ? parseInt(htmlColNumber) : colNumber;
	rowNumber = htmlRowNumber ? parseInt(htmlRowNumber) : rowNumber;

	var htmlWidth = $('#LXXUploadPic').attr('LXXWidth');
	var htmlHeight = $('#LXXUploadPic').attr('LXXHeight');
	width = width ? parseInt(htmlWidth) : width;
	height = height ? parseInt(htmlHeight) : height;


	//开始搭建UI
	var html = "<table class='LXXUploadPic'>";

	for(var i = 0; i<rowNumber; i++){
		html += "<tr>";
		for(var j = 0; j<colNumber; j++){
			html += "<td><input type='file' name='pic"+ (i * rowNumber + j + 1) +"' /></td>";
		}
		html += "</tr>";
	}
	html += "</table>";

	$('#LXXUploadPic').html(html);
	$('.LXXUploadPic tr td').css('width', width).css('height', height);
}

/**
根据input[file]对象获取添加的图片url
*/
function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) {
        url = window.createObjectURL(file)
    } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file)
    } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file)
    }
    return url
};

/**
选中图片将图片显示出来
*/
function changeToShow(){
  	$('input[type="file"]').change(function(){
  		//根据input[file]对象获取添加的图片url
  		var src = getObjectURL(this.files[0]);
  		$(this).parent().css('background', 'url(' + src + ') no-repeat center center').css('background-size', '100%');
  	});
}


$(document).ready(function(){
	//根据配置项搭建UI
	makeUI();
	//选中图片将图片显示出来
	changeToShow();
});