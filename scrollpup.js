/*** author :
	 flouthoc ( http://github.com/flouthoc )

	 Contributors: Please add your names here
***/



//window.addEventListener('DOMContentLoaded', main, false);
//window.addEventListener('load', main, false);
//window.onload = main;

var scroll_pup_counter = false;



function scrollpup(doc){

if(scroll_pup_counter == false){

	//alert('hey')
	var scrollbar = doc.createElement("div");
	scrollbar.setAttribute("style","height:5px; width:20%; position:fixed;margin:0; top:0; left:0; right:0; background: #36d1dc; /* fallback for old browsers */ background: -webkit-linear-gradient(to right, #36d1dc, #5b86e5); /* Chrome 10-25, Safari 5.1-6 */background: linear-gradient(to right, #36d1dc, #5b86e5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */");
	scrollbar.setAttribute("id","scroll-pup");
	//scrollbar.id="scrollbar-pup";

	//var scrollbar = "<div style='height:10px; width:0%; position:fixed; margin:0;'></div>";
	doc.getElementsByTagName('body')[0].appendChild(scrollbar);
	scroll_pup_counter = true;
}

var full_page = doc.documentElement;
var full_body = doc.body;

var scrollTop = 'scrollTop';
var scrollHeight = 'scrollHeight';

var percent = Math.floor((full_page[scrollTop]||full_body[scrollTop]) / ((full_page[scrollHeight]||full_body[scrollHeight]) - full_page.clientHeight) * 100);
doc.getElementById("scroll-pup").setAttribute("style","height:10px; width:"+percent+"%; position:fixed; margin:0; top:0; left:0; right:0; background: #36d1dc; /* fallback for old browsers */ background: -webkit-linear-gradient(to right, #36d1dc, #5b86e5); /* Chrome 10-25, Safari 5.1-6 */background: linear-gradient(to right, #36d1dc, #5b86e5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */");
//alert(percent);

}

function scroll_pup_two(doc){

	var width = document.documentElement.clientWidth;
	 
}