const MainPlayButton = document.getElementById("mainPlay");
const gif = document.getElementById("gif");
const prograssBar = document.getElementById("prograssBar");
const mainSongName = document.getElementById("mainSongName");
const songName = document.getElementById("songName");
const songItemPlay = document.getElementsByClassName("songItemPlay");
let index = 0;
const songitme = Array.from(document.getElementsByClassName("songitme"));
let audioPlay = new Audio("./songs/1.mp3");
//audioPlay.play();


let songs = [
  { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", time: "3:50" },
  { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", time: "2:33" },
  { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg", time: "4:33" },
  { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", time: "4:27" },
  { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", time: "3:27" },
  { songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg", time: "2:33" },
  { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg", time: "2:33" },
  { songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg", time: "2:33" },
  { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg", time: "2:33" },
  { songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg", time: "4:27" },
]

songitme.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  element.getElementsByClassName("time")[0].innerText = songs[i].time;
})

MainPlayButton.addEventListener("click", () => {
  if (audioPlay.paused || audioPlay.currentTime <= 0) {
    audioPlay.play();
    MainPlayButton.classList.remove("fa-play");
    MainPlayButton.classList.add("fa-pause");
    gif.style.opacity = "1";
    mainSongName.innerText = songs[index].songName;
  } else {
    audioPlay.pause();
    MainPlayButton.classList.remove("fa-pause");
    MainPlayButton.classList.add("fa-play");
    gif.style.opacity = "0";
    
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    })
  }
});

audioPlay.addEventListener("timeupdate", () => {
  let progerss = parseInt((audioPlay.currentTime / audioPlay.duration) * 100);
  prograssBar.value = progerss;
})

prograssBar.addEventListener("change", () => {
  audioPlay.currentTime = prograssBar.value * audioPlay.duration / 100;

})

const makePlay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
  element.addEventListener("click", (e) => {
    if (audioPlay.paused || audioPlay.currentTime <= 0) {
      makePlay();
      console.log(e.target);
      index = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioPlay.src = `songs/${index + 1}.mp3`;
      audioPlay.currentTime = 0;
      audioPlay.play();
      gif.style.opacity = "1";
      mainSongName.innerText = songs[index].songName;
      MainPlayButton.classList.remove("fa-play");
      MainPlayButton.classList.add("fa-pause");
    }
    else {
      audioPlay.pause();
      gif.style.opacity = "0";
      e.target.classList.add("fa-circle-play");
      e.target.classList.remove("fa-circle-pause");
      MainPlayButton.classList.remove("fa-pause");
      MainPlayButton.classList.add("fa-play");
    }
  })
})
const next = document.getElementById("next").addEventListener("click", () => {
  console.log("next")
  if (index > 9) {
    index = 0;
    document.getElementById("next").style.color = "gray";
    document.getElementById("nextDialog").innerHTML = "You have unloked the glitchin this system. Keep Calm The developer is looking for the solution."
  }
  else {
    index += 1;
    audioPlay.src = `songs/${index + 1}.mp3`;
    audioPlay.currentTime = 0;
    audioPlay.play();
    gif.style.opacity = "1";
    mainSongName.innerText = songs[index].songName;
    MainPlayButton.classList.remove("fa-play");
    MainPlayButton.classList.add("fa-pause");
  }
})

const previpus = document.getElementById("prvious").addEventListener("click", () => {
  console.log("Previous")
  if (index <= 0) {
    index = 0;
    document.getElementById("prvious").style.color = "gray";
  }
  else {
    index -= 1;
  }
  audioPlay.src = `songs/${index + 1}.mp3`;
  audioPlay.currentTime = 0;
  audioPlay.play();
  gif.style.opacity = "1";
  mainSongName.innerText = songs[index].songName;
  MainPlayButton.classList.remove("fa-play");
  MainPlayButton.classList.add("fa-pause");
})
