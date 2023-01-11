var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubePlayerAPIReady() {
  new YT.Player("player", {
    videoId: "WT9rV7rZniE",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "WT9rV7rZniE",
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
