let jumpAnime = document.getElementById("character");
let moveAnime = document.getElementById("block");
let btn = document.getElementById("Start");
let mBtn = document.getElementById("ForMusic");
let score = 0;
let Xmusic = 0;
let trail = 0;
let hack = 0;
let game = 0;

// For Music Symbol activation and deactivation

mBtn.addEventListener("click", function () {
  document.getElementById("music").setAttribute("loop", "true");
  if (Xmusic === 0) {
    document.getElementById("music").play();
    mBtn.innerHTML = "&#9835;";
    Xmusic = 1;
  } else {
    document.getElementById("music").pause();
    mBtn.innerHTML = "<s>&#9835;</s>";
    Xmusic = 0;
  }
});

// Start btn functionality to start the game

btn.addEventListener("click", function () {
  game = 1;
  trail = 1;
  document.getElementById("boy").src = "oie_1415449Ldb8QV15.gif";
  document.getElementById("boy").style.width = 150 + "px";
  document.getElementById("boy").style.height = 220 + "px";
  score = 0;
  document.getElementById("output").innerHTML = "";
  moveAnime.style.animation =
    "2000ms linear 0s infinite normal none running gameOn";

  // document.getElementById("music2").pause();

  document.getElementById("music").play();
  mBtn.innerHTML = "&#9835;";
});

// For increasing speed while playing

function ForSpeedIncreasing() {
  if (hack == 0) {
    forIncreSpeed = forIncreSpeed - 100;
    let wtf = forIncreSpeed;

    moveAnime.style.animation =
      wtf + "ms linear 0s infinite normal none running gameOn";
    console.log("speed increased without hack");
    console.log(moveAnime.style.animation);
  }
}

// For score Updatation

setInterval(function () {
  score++;
  if (game == 1) {
    if (score == 100) {
      ForSpeedIncreasing();
    }
    if (score == 200) {
      ForSpeedIncreasing();
    }
    if (score == 300) {
      ForSpeedIncreasing();
    }
    if (score == 400) {
      console.log(moveAnime.style.animation);
      ForSpeedIncreasing();
    }
    if (score == 500) {
      ForSpeedIncreasing();
    }
    if (score == 600) {
      ForSpeedIncreasing();
    }
    if (score == 700) {
      ForSpeedIncreasing();
    }
    if (score == 800) {
      ForSpeedIncreasing();
    }
    if (score == 900) {
      ForSpeedIncreasing();
    }
    if (score == 1000) {
      ForSpeedIncreasing();
    }
  }
}, 100);

// For charcter Jump animation

document.addEventListener("keypress", function (e) {
  if (e.key == "w" || e.key == "W") {
    if (trail === 1) {
      jumpAnime.style.animation = "jump 0.75s linear ";
      document.getElementById("boy").src = "boyjump.png";
      document.getElementById("boy").style.width = 90 + "px";
      document.getElementById("boy").style.height = 180 + "px";

      setTimeout(() => {
        document.getElementById("boy").src = "oie_1415449Ldb8QV15.gif";
        document.getElementById("boy").style.width = 150 + "px";
        document.getElementById("boy").style.height = 220 + "px";
        jumpAnime.style.animation = "none ";
      }, 750);
    }
  }
});

// For checking functionality and position of character and block  in game

let Interval = setInterval(forHack, 1);
let forIncreSpeed = 2000;

function forHack() {
  const blockPosition = parseInt(
    window.getComputedStyle(block).getPropertyValue("margin-right")
  );

  const charPosition = parseInt(
    window.getComputedStyle(character).getPropertyValue("margin-top")
  );

  if (blockPosition > 840 && blockPosition < 940 && charPosition > 135) {
    document.getElementById("boy").src = "boystart.png";
    document.getElementById("boy").style.width = 85 + "px";
    document.getElementById("boy").style.height = 205 + "px";
    document.getElementById("music").pause();
    document.getElementById("music2").play();

    mBtn.innerHTML = "<s>&#9835;</s>";
    const a = score;

    document.getElementById("output").innerHTML =
      "You Lost! Recall by clicking the Start button after 4 sec";
    moveAnime.style.animation = "none";
    jumpAnime.style.animation = "none";
    document.getElementById("block").style.marginRight = blockPosition + "px";
    document.getElementById("character").style.marginTop = charPosition + "px";
    document.getElementById("Start").disabled = true;

    if (a != 0 && a != 1) {
      document.getElementById("lastscore").innerHTML = a;
    }
    setTimeout(() => {
      document.getElementById("Start").disabled = false;
      document.getElementById("block").style.marginRight = "0px";
      document.getElementById("character").style.marginTop = "225px";
      document.getElementById("output").innerHTML = "";
    }, 4000);
    score = 0;
    trail = 0;
    game = 0;
  }
}

// Cheat code activate and deactivate

let ctrl, rh, f, a, s;
let t = 2000;

// Immortality hack

document.addEventListener("keydown", (event) => {
  if (event.key == "a") {
    ctrl = 1;
  }

  if (ctrl == 1 && event.key == "h") {
    // console.log("hack activated");
    document.getElementById("cheat").innerText = "Immortal Hack Activated";

    document.getElementById("cheat").style.animation =
      "hackOpacity 3.5s linear, hackVisibility 3.5s linear";
    setTimeout(() => {
      document.getElementById("cheat").style.animation = "none";
    }, 3500);

    hack = 1;
    clearInterval(Interval);
  }

  document.addEventListener("keyup", (event) => {
    if (event.key == "a") {
      ctrl = 0;
    }
  });
});

// Removing Immortality hack

document.addEventListener("keydown", (event) => {
  if (event.key == "r") {
    rh = 1;
  }

  if (rh == 1 && event.key == "p") {
    // console.log("hack De-activated");
    document.getElementById("cheat").innerText = "Immortal Hack Deactivated";

    document.getElementById("cheat").style.animation =
      "hackOpacity 3.5s linear, hackVisibility 3.5s linear";
    setTimeout(() => {
      document.getElementById("cheat").style.animation = "none";
    }, 3500);

    hack = 0;
    setInterval(forHack, 1);
  }

  document.addEventListener("keyup", (event) => {
    if (event.key == "r") {
      rh = 0;
    }
  });
});

// For Speed hack

document.addEventListener("keydown", function (e) {
  if (e.key == "f") {
    f = 1;
  }
  if (f == 1 && e.key == "a") {
    a = 1;
  }
  if (a == 1 && e.key == "s") {
    s = 1;
  }
  if (s == 1 && e.key == "t") {
    hack = 1;
    t = t - 100;
    if (t > 100) {
      document.getElementById("cheat").innerText = "Speed Hack Activated";

      document.getElementById("cheat").style.animation =
        "hackOpacity 3s linear, hackVisibility 3s linear";
      moveAnime.style.animation =
        t + "ms linear 0s infinite normal none running gameOn";
      setTimeout(() => {
        document.getElementById("cheat").style.animation = "none";
      }, 3500);
      // console.log("speed increased with hack");
    }
    if (t <= 100) {
      document.getElementById("cheat").innerText = "Speed Limit Reached";

      document.getElementById("cheat").style.animation =
        "hackOpacity 3s linear, hackVisibility 3s linear";
      setTimeout(() => {
        document.getElementById("cheat").style.animation = "none";
      }, 3500);
    }
    setTimeout(() => {
      f = 0;
      a = 0;
      s = 0;
    }, 2);
  }
});

// End of cheat codes
