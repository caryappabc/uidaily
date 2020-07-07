music_name = "SWEET CHILD O MINE.mp3";
var play_btn = document.querySelector("#play");
var prev_btn = document.querySelector("#pre");
var next_btn = document.querySelector("#next");
var range = document.querySelector("#range");
var play_img = document.querySelector("#play_img");
var total_time = 0;
var currentTime = 0;
var isPlaying = false;
var song = new Audio();
window.onload = playSong;


function playSong(){
    song.src = music_name;
    console.log(song);
    document.querySelector("#song_name").innerHTML = music_name;
    
    play_btn.addEventListener('click',function(){
        if(!isPlaying){
            song.play();
            isPlaying = true;
            total_time = song.duration;
            range.max = total_time;
            play_img.src = "pause.png";
        }else{
            song.pause();
            isPlaying = false;
            play_img.src = "play.png";
        }
       song.addEventListener('ended',function(){
            song.currentTime = 0;
            song.pause();
            isPlaying = false;
            range.value = 0;
            play_img.src = "play.png";
        });
        song.addEventListener('timeupdate',function(){
            range.value = song.currentTime;
        });
        range.addEventListener('change',function(){
            song.currentTime = range.value;
        });
       
    });
}