var starsContainer = document.getElementsByClassName('starsContainer');

function createStar() {
  var starImg = document.createElement('div');
  starImg.className = 'singleStar';
  starImg.style.left = Math.random()*100 + '%';
  starImg.style.top = Math.random()*50 - 10 + 'vw';
  setTimeout(function () {
    starImg.style.animationDuration = Math.random()*5 + 0.2 + 's';
    var rnd = Math.random()*6;
    starImg.style.width = rnd + 'px';
    starImg.style.height = rnd + 'px';
    starImg.className = 'singleStar singleStarAnim';
  }, Math.random()*500);
  starsContainer[0].append(starImg)
}



for (var i = 0; i < 200; i++) {
  createStar();
}

// commets
var cometCotnainer = document.getElementsByClassName('cometCotnainer');

function createComet() {
  var cometImg = document.createElement('img');
  cometImg.src = 'assets/images/cometOne.png';
  cometImg.className = 'comet';
  var privateRnd = Math.random()*5 + 1.2 + 's';
  cometImg.style.animationDuration = privateRnd;
  setTimeout(function () {
    var cometLeft = Math.random()*100 + 30 + '%';
    cometImg.style.left = cometLeft;
    cometImg.style.width = Math.random()*7 + 1 + 'vw';
    cometCotnainer[0].append(cometImg)
  }, Math.random()*1000);
}

function removeLast() {
}

setInterval(function () {
  createComet();
  setTimeout(function () {
    createComet();
    setTimeout(function () {
      cometCotnainer[0].removeChild(cometCotnainer[0].firstChild);
      cometCotnainer[0].removeChild(cometCotnainer[0].firstChild);
    }, 3000);
  }, Math.random()*1000);
}, 1000);
