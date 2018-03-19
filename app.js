// Create highlighting effect


var transcript = document.getElementById("bodyWrapper").getElementsByTagName("span");
var video = document.getElementsByTagName("video")[0];
var firstlink = document.getElementsByTagName('a')[0];

video.addEventListener("timeupdate", function() {
for (var i = 0; i < transcript.length; i++) {
  var now = video.currentTime;
  console.log(video.currentTime);
  var start = transcript[i].getAttribute("data-start");
    var end = transcript[i].getAttribute("data-end");

      if (now >= start && now <= end) {
        transcript[i].className = "current";
      } else {
        transcript[i].className = "";
      }
    }
});

//
firstlink.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.currentTime = 0.240;
    myvideo.play();
}, false);
