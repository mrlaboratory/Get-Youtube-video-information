/*Developed this code Md Mijanur Rahaman
Developer Details :
Name : Md Mijanur Rahaman 
Facebook : fb.com/mdmijanurrahaman.mr
Web : www.mrlaboratory.com
Number : +8801854650673
*/
function getytdatamr(){
var geturl = document.querySelector("#youtubevideolink").value;
var urlsplit= geturl.split(/^.*(youtu.be\/|v\/|embed\/|watch\?|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*/);
var videoIdmr = urlsplit[3];	
	
vMRchannelId = "UC8uhhaqA9s540gufCwKwrKA";
var mrApi = "AIzaSyDSwN5XQQfJvYhY4iLMf3DZmUr6MdCjawg";
var videoData1 = "https://www.googleapis.com/youtube/v3/videos?part=statistics&id="+videoIdmr+"&key="+mrApi+"";
var videoData2 = "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id="+videoIdmr+"&key="+mrApi+"";
var videofrmSRC = "https://www.youtube.com/embed/"+videoIdmr+"?rel=0&autoplay=1";
var videoMRThumbnail = "https://i.ytimg.com/vi/"+videoIdmr+"/maxresdefault.jpg";
document.getElementById('iframMR').src=videofrmSRC;

var channelTitlem = document.querySelector(".mrVideochannelTitle");
var channelUr = document.querySelector(".subscriber");
var devchannelUr = document.querySelector(".devsubscriber");
var ytdown1 = "https://youtube.mrlaboratory.info/p/download.html?ytdown=https://keepvid.pro/en/youtube/"+videoIdmr;
var ytdown2 = "https://youtube.mrlaboratory.info/p/download.html?ytdown=https://www.y2mate.com/youtube/"+videoIdmr;
var ytdown3 = "https://en.savefrom.net/18/#url=http://youtube.com/watch?v="+videoIdmr;
document.getElementById('videdown1').href=ytdown1;
document.getElementById('videdown2').href=ytdown2;
document.getElementById('videdown3').href=ytdown3;

$.ajax({
type: "GET",
dataType: "json",
url: videoData1,
success: function(data1) {
var viewCount = data1.items[0].statistics.viewCount;
$(".mrVideoView").html(viewCount);
var likeCount = data1.items[0].statistics.likeCount;
$(".mrVideoLike").html(likeCount);
var dislikeCount = data1.items[0].statistics.dislikeCount;
$(".mrVideoDislike").html(dislikeCount);
}
});
/*Developed this code Md Mijanur Rahaman
Developer Details :
Name : Md Mijanur Rahaman 
Facebook : fb.com/mdmijanurrahaman.mr
Web : www.mrlaboratory.com
Number : +8801854650673
*/
$.ajax({
type: "GET",
dataType: "json",
url: videoData2,
success: function(data2) {
var videoMRTtitle = data2.items[0].snippet.title;
$(".mrVideoTitle").html(videoMRTtitle);
var vtitle =videoMRTtitle+" - MR Laboratory";
$(".titlem").html(vtitle);
var videoMRDescription = data2.items[0].snippet.description;
$(".mrVideoDescription").html(videoMRDescription);
var videoMRpublishedAt = data2.items[0].snippet.publishedAt;
$(".mrVideopublishedAt").html(videoMRpublishedAt);
var videoMRchannelTitle = data2.items[0].snippet.channelTitle;
$(".mrVideochannelTitle").html(videoMRchannelTitle);
var videoMRchannelId = data2.items[0].snippet.channelId;
var sbutton = "https://www.youtube.com/channel/"+videoMRchannelId+"?sub_confirmation=1";
$(".mrsButton").html(sbutton);
channelTitlem.href=sbutton;
channelUr.href=sbutton;
var len = data2.items[0].snippet.tags.length;
$(".mrVideotagsCount").html(len);
var tag = data2.items[0].snippet.tags;
var text = "Tags : <a href='https://www.mrlaboratory.com' target='_blank'>MR Laboratory</a><br/>";
var x = 1;
for (var i = 0; i < len; i++) {
  y = x+i;
  text +=y+": <a href='https://youtube.mrlaboratory.info/search/label/' target='_blank'"+tag[i]+">"+tag[i]+"</a><br/>";
}
$(".mrVideotags").html(text);

var metatag = "MR Laboratory, ";
for (var i = 0; i < len; i++) {
  metatag +=tag[i]+",";
}

document.head.querySelector('meta[name="keywords"]').content=metatag;
document.head.querySelector('meta[name="description"]').content=videoMRDescription;
}
});
var videoData3 = "https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id="+vMRchannelId+"&key=AIzaSyDSwN5XQQfJvYhY4iLMf3DZmUr6MdCjawg";
$.ajax({
type: "GET",
dataType: "json",
url: videoData3,
success: function(data3) {
var channelIcon = data3.items[0].snippet.thumbnails.default.url;;
document.getElementById('developerCIcon').src=channelIcon;
var devsbutton = "https://www.youtube.com/channel/"+vMRchannelId+"?sub_confirmation=1";
channelUr.href=devsbutton;
}
	});
	};
	
