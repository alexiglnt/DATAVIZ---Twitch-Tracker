
fetch("streamers_model.php")

var streamersName ;
fetch("streamers.json")
.then(response => {
    return response.json();
})
.then(jsondata => {
    streamersName = jsondata;
    console.log(jsondata);
});
var streamers;
fetch("streamers_stats.json")
.then(response => {
    return response.json();
})
.then(jsondata_data => {
    streamers = jsondata_data;
    console.log(jsondata_data);

});

Array.from(document.getElementsByClassName("sort")).forEach((btnSort) => {
  btnSort.addEventListener("click", () => sortStreamer(btnSort));
});

Array.from(document.getElementsByClassName("date")).forEach((btnDate) => {
  btnDate.addEventListener("click", () => dateSelectF(btnDate));
});

Array.from(document.getElementsByClassName("dateStat")).forEach((btnDateStat) => {
    btnDateStat.addEventListener("click", () => dateSelectStats(btnDateStat));
});



var sortType;
var dateSelect = "2022-05";
var afficheStreamers = document.getElementById("afficheStreamers");

function sortStreamer(btn) {
  if (btn != null) {
    sortType = btn.value;
  }

  var i=0;
  streamers.sort(sortComparaison);
  console.log(streamers);
  afficheStreamers.innerHTML = "";  
  streamers.forEach((element) => {
    if (element.date.includes(dateSelect)) {
      streamersName.forEach((streamName) => {
        if (streamName.id === element.streamer) {
            i++;

          switch (sortType) {
            case "minutes streamed":
                afficheStreamers.innerHTML += "<div class='dall_classement' id='d"+i+"'> <p><b>"+streamName.name +
                "</b> </p>"+"<p> Minute streamer : <b>"+element.minutes_streamed +" </b></p>"  +
                "</p></div><br>"
              break;
        
            case "rank":
                afficheStreamers.innerHTML += "<div class='dall_classement' id='d"+i+"'> <p><b>"+streamName.name +
                "</b> </p>"+"<p> rank : <b>"+element.rank +" </b></p>"  +
                "</p></div><br>"
              break;
        
            case "average viewers":
                afficheStreamers.innerHTML += "<div class='dall_classement' id='d"+i+"'> <p><b>"+streamName.name +
                "</b> </p>"+"<p> Viewers moyenne : <b>"+element.avg_viewers +" </b></p>"  +
                "</p></div><br>"
              break;
        
            case "max viewers":
                afficheStreamers.innerHTML += "<div class='dall_classement' id='d"+i+"'> <p><b>"+streamName.name +
                "</b> </p>"+"<p> Viewers max : <b>"+element.max_viewers +"</b> </p>"  +
                "</p></div><br>"
              break;
        
            case "hours watched":
                afficheStreamers.innerHTML += "<div class='dall_classement' id='d"+i+"'> <p><b>"+streamName.name +
                "</b> </p>"+"<p> Heures de visionnage : <b>"+element.hours_watched +"</b> </p>"  +
                "</p></div><br>"
              break;
        
            case "followers":
                afficheStreamers.innerHTML += "<div class='dall_classement' id='d"+i+"'> <p><b>"+streamName.name +
                "</b> </p>"+"<p> Followers : <b>"+element.followers +" </b></p>"  +
                "</p></div><br>"
              break;
        
            case "viewers":
                afficheStreamers.innerHTML += "<div class='dall_classement' id='d"+i+"'> <p><b>"+streamName.name +
                "</b> </p>"+"<p> Viewers : <b>"+element.views +" </b></p>"  +
                "</p></div><br>"
              break;
        
            case "followers total":
                afficheStreamers.innerHTML += "<div class='dall_classement' id='d"+i+"'> <p><b>"+streamName.name +
                "</b> </p>"+"<p> Followers total : <b>"+element.followers_total +"</b> </p>"  +
                "</p></div><br>"
              break;
        
            case "views total":
                afficheStreamers.innerHTML += "<div class='dall_classement' id='d"+i+"'> <p><b>"+streamName.name +
                "</b> </p>"+"<p> Vues total : <b>"+element.views_total +"</b> </p>"  +
                "</p></div><br>"
              break;
        
            default:
              break;
          }
        }
      });
    }
  });
}

function sortComparaison(a, b) {
  let compar = null;

  switch (sortType) {
    case "minutes streamed":
      compar = a.minutes_streamed - b.minutes_streamed;
      break;

    case "rank":
      compar = a.rank - b.rank;
      break;

    case "average viewers":
      compar = b.avg_viewers - a.avg_viewers;
      break;

    case "max viewers":
      compar = b.max_viewers - a.max_viewers;
      break;

    case "hours watched":
      compar = b.hours_watched - a.hours_watched;
      break;

    case "followers":
      compar = b.followers - a.followers;
      break;

    case "viewers":
      compar = b.views - a.views;
      break;

    case "followers total":
      compar = b.followers_total - a.followers_total;
      break;

    case "views total":
      compar = b.views_total - a.views_total;
      break;

    default:
      break;
  }

  return compar;
}

function dateSelectF(btnDate) {
  dateSelect = btnDate.value;
  sortStreamer();
}

function HideElement(e){
    if(getComputedStyle(e).display != "none"){
        e.style.display = "none";
    } else {
        e.style.display = "block";
    }
}

function dateSelectStats(btnDate) {
    dateSelect = btnDate.value;
    document.getElementById("streamer_name").innerHTML ="";
    var i=0;    
    streamers.forEach((element) => {
        if (element.date.includes(dateSelect)) {
          streamersName.forEach((streamName) => {
            if (streamName.id === element.streamer) {
                i++;
                document.getElementById("streamer_name").innerHTML += "<div class='streamer_name'><input type='checkbox' id='toggle"+i+"' class='checkbox' checked> <label for='toggle"+i+"' class='label' > </label> <h2 class=streamer_pos><b>"+streamName.name +
                "</b> </h2></div><br>"+"<div class='dall'  id='d"+i+"'>"+"<p> Minute streamer : <b>"+element.minutes_streamed +"</b> </p>"  +
                " </p>"+"<p> Rank : <b>"+element.rank +"</b> </p>"  +
                " </p>"+"<p> Nombre moyen de viewers : <b>"+element.avg_viewers +"</b> </p>"  +
                " </p>"+"<p> Nombre maximum de viewers : <b>"+element.max_viewers +"</b> </p>"  +
                " </p>"+"<p> Heures de visionnage : <b>"+element.hours_watched +"</b> </p>"  +
                " </p>"+"<p> Nombre de followers : <b>"+element.followers +"</b> </p>"  +
                " </p>"+"<p> Nombre de vues : <b>"+element.views +"</b> </p>"  +
                " </p>"+"<p> Nombre de followers total : <b>"+element.followers_total +"</b> </p>"  +
                " </p>"+"<p> Nombre de vues total : <b>"+element.views_total +" </b></p>"  +
                "</div><br>";
            }
          });
        }
    });

    i=0
    
    Array.from(document.getElementsByClassName("checkbox")).forEach((btnhide) => {
        ++i;
        console.log(i);
        var j=i;
        btnhide.addEventListener("click", () => HideElement(document.getElementById("d"+j)));
        HideElement(document.getElementById("d"+j));
    });
  }



  //Animation titre
  const title = document.querySelector("h1")
const letters = [...document.querySelectorAll('h1 span')]


title.addEventListener("mouseenter", handleLetters);
title.addEventListener("mouseleave", handleLetters);

let isAnimatingIn = false;
let calledOut = false;
let animOpened = false;

function handleLetters(){
  
  if(animOpened){
    animOut();
    animOpened = false;
    return;
  }

  if(isAnimatingIn){
    calledOut = true;
    return;
  }

  isAnimatingIn = true;

  const animPromise = new Promise((resolve) => {
    animIn()
    setTimeout(() => {
      resolve()
    }, 750)
  })
  animPromise.then(() => {
    isAnimatingIn = false;

    if(calledOut) {
      animOut()
      calledOut = false;
    } else if (!calledOut){
      animOpened = true;
    }
  })

}

function animIn(){
  anime({
    targets: "h1 span",
    translateX: function(){
      return anime.random(-250,250)
    },
    translateY: function(){
      return anime.random(-250,250)
    },
    translateZ: function(){
      return anime.random(-2000,750)
    },
    rotate: function(){
      return anime.random(-250,250)
    },
    easing: "easeOutCirc",
    duration: 750
  })
}

function animOut(){
  anime({
    targets: "h1 span",
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    rotate: 0,
    easing: "easeInQuad",
    duration: 750
  })
}