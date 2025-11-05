var guy = document.getElementById("guy");
IsBusy = false;
BlueEnabled = false;

var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

//-- usage --//
preload(
  "images/button1Frames/gunframe1.png",
  "images/button1Frames/gunframe2.png",
  "images/button1Frames/gunframe3.png",
  "images/button1Frames/gunframe4.png",
  "images/button1Frames/gunframe5.png",
  "images/button1Frames/gunframe6.png",
  "images/button1Frames/gunframe7.png",
  "images/button1Frames/gunframe8.png",
  "images/button1Frames/gunframe9.png",
  "images/button1Frames/gunframe10.png",
  "images/button1Frames/gunframe11.png",
  "images/button1Frames/gunframe12.png",
  "images/button1Frames/gunframe13.png",
  "images/button1Frames/gunframe14.png",
  "images/button1Frames/gunframe15.png",
  "images/button1Frames/gunframe16.png",
  "images/button1Frames/gunframe17.png",
  "images/button1Frames/gunframe18.png",
  "images/button1Frames/gunframe19.png",
  "images/button1Frames/gunframe20.png",
  "images/button2Frames/batFrame1.png",
  "images/button2Frames/batFrame2.png",
  "images/button2Frames/batFrame3.png",
  "images/button2Frames/batFrame4.png",
  "images/button2Frames/batFrame5.png",
  "images/button2Frames/batFrame6.png",
  "images/button2Frames/batFrame7.png",
  "images/button2Frames/batFrame8.png",
  "images/button2Frames/batFrame9.png",
  "images/button2Frames/batFrame10.png",
  "images/button2Frames/batFrame11.png",
  "images/button2Frames/batFrame12.png",
  "images/button2Frames/batFrame13.png",
  "images/button2Frames/batFrame14.png",
  "images/button2Frames/batFrame15.png",
  "images/button2Frames/batFrame16.png",
  "images/button2Frames/batFrame17.png",
  "images/button2Frames/batFrame18.png",
  "images/button2Frames/batFrame19.png",
  "images/button2Frames/batFrame20.png",
  "images/button2Frames/batFrame21.png",
  "images/button2Frames/batFrame22.png",
  "images/button2Frames/batFrame23.png",
  "images/button2Frames/batFrame24.png",
  "images/button2Frames/batFrame25.png",
  "images/button3Frames/brick1.png",
  "images/button3Frames/brick2.png",
  "images/button3Frames/brick3.png",
  "images/button3Frames/brick4.png",
  "images/button3Frames/brick5.png",
  "images/button3Frames/brick6.png",
  "images/button3Frames/brick7.png",
  "images/button3Frames/brick8.png",
  "images/button3Frames/brick9.png",
  "images/button3Frames/brick10.png",
  "images/button3Frames/brick11.png",
  "images/button3Frames/brick12.png",
  "images/button3Frames/brick13.png",
  "images/button3Frames/brick14.png",
  "images/button4Frames/laserFrame1.png",
  "images/button4Frames/laserFrame2.png",
  "images/button4Frames/laserFrame3.png",
  "images/button4Frames/laserFrame4.png",
  "images/button4Frames/laserFrame5.png",
  "images/button4Frames/laserFrame6.png",
  "images/button4Frames/laserFrame7.png",
  "images/button4Frames/laserFrame8.png",
  "images/button4Frames/laserFrame9.png",
  "images/button4Frames/laserFrame10.png",
  "images/button4Frames/laserFrame11.png",
  "images/button4Frames/laserFrame12.png",
  "images/button4Frames/laserFrame13.png",
  "images/button4Frames/laserFrame14.png",
  "images/button5Frames/pianoFrame1.png",
  "images/button5Frames/pianoFrame2.png",
  "images/button5Frames/pianoFrame3.png",
  "images/button5Frames/pianoFrame4.png",
  "images/button5Frames/pianoFrame5.png",
  "images/button5Frames/pianoFrame6.png",
  "images/button5Frames/pianoFrame7.png",
  "images/button5Frames/pianoFrame7.png",
  "images/button6Frames/carFrame1.png",
  "images/button6Frames/carFrame2.png",
  "images/button6Frames/carFrame3.png",
  "images/button6Frames/carFrame4.png",
  "images/button6Frames/carFrame5.png",
  "images/button6Frames/carFrame6.png",
  "images/button6Frames/carFrame7.png",
  "images/safegunFrames/safegunFrame1.png",
  "images/safegunFrames/safegunFrame2.png",
  "images/safegunFrames/safegunFrame3.png",
  "images/safegunFrames/safegunFrame4.png",
  "images/safegunFrames/safegunFrame5.png",
  "images/safegunFrames/safegunFrame6.png",
  "images/safegunFrames/safegunFram7.png",
  "images/safegunFrames/safegunFrame8.png",
  "images/safegunFrames/safegunFrame9.png",
  "images/safegunFrames/safegunFrame10.png",
  "images/safegunFrames/safegunFrame11.png",
  "images/safegunFrames/safegunFrame12.png",
  "images/safegunFrames/safegunFrame13.png",
  "images/safegunFrames/safegunFrame14.png",
  "images/safegunFrames/safegunFrame15.png",
  "images/safegunFrames/safegunFrame16.png"
);

function resetButton() {
  if (IsBusy == false) {
    resetSounds();
    buttonSouumd();
    guy.src = "images/costume1.png";
  }
}

function resetSounds() {
  document.getElementById("gunShot").pause();
  document.getElementById("gunShot").currentTime = 0;
  document.getElementById("batTwo").pause();
  document.getElementById("batTwo").currentTime = 0;
  document.getElementById("boom").pause();
  document.getElementById("boom").currentTime = 0;
  document.getElementById("laser").pause();
  document.getElementById("laser").currentTime = 0;
  document.getElementById("crash").pause();
  document.getElementById("crash").currentTime = 0;
  document.getElementById("honk").pause();
  document.getElementById("honk").currentTime = 0;
}

function buttonSouumd() {
  document.getElementById("but").pause();
  document.getElementById("but").currentTime = 0;
  document.getElementById("but").play();
}

function b1() {
  buttonSouumd();
  if (IsBusy == false) {
    if (BlueEnabled == true) {
      IsBusy = true;
      guy.src = "images/button1Frames/gunframe1.png";
      resetSounds();
      document.getElementById("gunMovement").play();
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe2.png";
      }, 100);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe3.png";
      }, 200);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe4.png";
      }, 300);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe5.png";
      }, 400);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe6.png";
      }, 500);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe7.png";
      }, 600);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe8.png";
        document.body.classList.add("black");
      }, 700);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe9.png";
        document.body.classList.remove("black");
        document.getElementById("gunShot").play();
      }, 800);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe10.png";
      }, 900);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe11.png";
      }, 1000);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe12.png";
      }, 1100);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe13.png";
      }, 1200);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe14.png";
      }, 1300);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe15.png";
      }, 1400);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe16.png";
      }, 1500);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe17.png";
      }, 1600);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe18.png";
      }, 1700);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe19.png";
      }, 1800);
      setTimeout(function () {
        guy.src = "images/button1Frames/gunframe20.png";
        IsBusy = false;
      }, 1900);
    }
    if (BlueEnabled == false) {
      IsBusy = true;
      guy.src = "images/safegunFrames/safegunFrame1.png";
      resetSounds();
      document.getElementById("gunMovement").play();
      setTimeout(function () {
        guy.src = "images/safegunFrames/safegunFrame2.png";
      }, 100);
      setTimeout(function () {
        guy.src = "images/safegunFrames/safegunFrame3.png";
      }, 200);
      setTimeout(function () {
        guy.src = "images/safegunFrames/safegunFrame4.png";
      }, 300);
      setTimeout(function () {
        guy.src = "images/safegunFrames/safegunFrame5.png";
      }, 400);
      setTimeout(function () {
        guy.src = "images/safegunFrames/safegunFrame6.png";
      }, 500);
      setTimeout(function () {
        guy.src = "images/safegunFrames/safegunFram7.png";
        document.body.classList.add("black");
        document.getElementById("baser").play();
      }, 600);
      setTimeout(function () {
        guy.src = "images/safegunFrames/safegunFrame8.png";
        document.body.classList.remove("black");
      }, 700);
      setTimeout(function () {
        guy.src = "images/safegunFrames/safegunFrame9.png";
      }, 800);
      setTimeout(function () {
        guy.src = "images/safegunFrames/safegunFrame10.png";
      }, 900);
      setTimeout(function () {
        guy.src = "images/safegunFrames/safegunFrame11.png";
      }, 1000);
      setTimeout(function () {
        guy.src = "images/safegunFrames/safegunFrame12.png";
      }, 1100);
      setTimeout(function () {
        guy.src = "images/safegunFrames/safegunFrame13.png";
      }, 1200);
      setTimeout(function () {
        guy.src = "images/safegunFrames/safegunFrame14.png";
      }, 1300);
      setTimeout(function () {
        guy.src = "images/safegunFrames/safegunFrame15.png";
      }, 1400);
      setTimeout(function () {
        guy.src = "images/safegunFrames/safegunFrame16.png";
        IsBusy = false;
      }, 1500);
    }
  }
}

function b2() {
  buttonSouumd();
  if (IsBusy == false) {
    IsBusy = true;
    resetSounds();
    guy.src = "images/button2Frames/batFrame1.png";
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame2.png";
    }, 100);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame3.png";
      document.getElementById("gunMovement").play();
    }, 200);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame4.png";
    }, 300);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame5.png";
    }, 400);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame6.png";
    }, 500);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame7.png";
    }, 600);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame8.png";
    }, 700);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame9.png";
      document.getElementById("batOne").play();
    }, 800);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame10.png";
    }, 900);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame11.png";
    }, 1000);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame12.png";
    }, 1100);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame13.png";
      document.getElementById("batTwo").play();
    }, 1200);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame14.png";
    }, 1300);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame15.png";
    }, 1400);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame16.png";
    }, 1500);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame17.png";
    }, 1600);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame18.png";
      document.getElementById("batHit").play();
    }, 1700);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame19.png";
    }, 1800);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame20.png";
    }, 1900);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame21.png";
    }, 2000);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame22.png";
    }, 2100);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame23.png";
    }, 2200);
    setTimeout(function () {
      guy.src = "images/button2Frames/batFrame24.png";
      IsBusy = false;
    }, 2300);
  }
}

function b3() {
  buttonSouumd();
  if (IsBusy == false) {
    IsBusy = true;
    resetSounds();
    guy.src = "images/button3Frames/brick1.png";
    setTimeout(function () {
      guy.src = "images/button3Frames/brick2.png";
    }, 100);
    setTimeout(function () {
      guy.src = "images/button3Frames/brick3.png";
    }, 200);
    setTimeout(function () {
      guy.src = "images/button3Frames/brick4.png";
    }, 300);
    setTimeout(function () {
      guy.src = "images/button3Frames/brick5.png";
    }, 400);
    setTimeout(function () {
      guy.src = "images/button3Frames/brick6.png";
    }, 500);
    setTimeout(function () {
      guy.src = "images/button3Frames/brick7.png";
    }, 600);
    setTimeout(function () {
      guy.src = "images/button3Frames/brick8.png";
    }, 700);
    setTimeout(function () {
      guy.src = "images/button3Frames/brick10.png";
      document.getElementById("boom").play();
    }, 800);
    setTimeout(function () {
      guy.src = "images/button3Frames/brick11.png";
    }, 850);
    setTimeout(function () {
      guy.src = "images/button3Frames/brick12.png";
    }, 900);
    setTimeout(function () {
      guy.src = "images/button3Frames/brick13.png";
    }, 950);
    setTimeout(function () {
      guy.src = "images/button3Frames/brick14.png";
      IsBusy = false;
    }, 1000);
  }
}

function b4() {
  buttonSouumd();
  if (IsBusy == false) {
    IsBusy = true;
    resetSounds();
    document.getElementById("laser").play();
    guy.src = "images/button4Frames/laserFrame1.png";
    setTimeout(function () {
      guy.src = "images/button4Frames/laserFrame2.png";
    }, 100);
    setTimeout(function () {
      guy.src = "images/button4Frames/laserFrame3.png";
    }, 200);
    setTimeout(function () {
      guy.src = "images/button4Frames/laserFrame4.png";
    }, 300);
    setTimeout(function () {
      guy.src = "images/button4Frames/laserFrame5.png";
    }, 400);
    setTimeout(function () {
      guy.src = "images/button4Frames/laserFrame6.png";
    }, 500);
    setTimeout(function () {
      guy.src = "images/button4Frames/laserFrame7.png";
    }, 600);
    setTimeout(function () {
      guy.src = "images/button4Frames/laserFrame8.png";
    }, 700);
    setTimeout(function () {
      guy.src = "images/button4Frames/laserFrame9.png";
    }, 800);
    setTimeout(function () {
      guy.src = "images/button4Frames/laserFrame10.png";
    }, 900);
    setTimeout(function () {
      guy.src = "images/button4Frames/laserFrame11.png";
    }, 1000);
    setTimeout(function () {
      guy.src = "images/button4Frames/laserFrame12.png";
    }, 1100);
    setTimeout(function () {
      guy.src = "images/button4Frames/laserFrame13.png";
    }, 1200);
    setTimeout(function () {
      guy.src = "images/button4Frames/laserFrame14.png";
      IsBusy = false;
    }, 1300);
  }
}

function b5() {
  buttonSouumd();
  if (IsBusy == false) {
    IsBusy = true;
    resetSounds();
    guy.src = "images/button5Frames/pianoFrame1.png";
    setTimeout(function () {
      guy.src = "images/button5Frames/pianoFrame2.png";
    }, 100);
    setTimeout(function () {
      guy.src = "images/button5Frames/pianoFrame3.png";
    }, 200);
    setTimeout(function () {
      guy.src = "images/button5Frames/pianoFrame4.png";
      document.getElementById("crash").play();
    }, 300);
    setTimeout(function () {
      guy.src = "images/button5Frames/pianoFrame5.png";
    }, 400);
    setTimeout(function () {
      guy.src = "images/button5Frames/pianoFrame6.png";
    }, 500);
    setTimeout(function () {
      guy.src = "images/button5Frames/pianoFrame7.png";
      IsBusy = false;
    }, 600);
  }
}

function b6() {
  buttonSouumd();
  if (IsBusy == false) {
    IsBusy = true;
    resetSounds();
    document.getElementById("honk").play();
    guy.src = "images/button6Frames/carFrame1.png";
    setTimeout(function () {
      guy.src = "images/button6Frames/carFrame2.png";
    }, 500);
    setTimeout(function () {
      guy.src = "images/button6Frames/carFrame3.png";
    }, 600);
    setTimeout(function () {
      guy.src = "images/button6Frames/carFrame4.png";
    }, 700);
    setTimeout(function () {
      guy.src = "images/button6Frames/carFrame5.png";
    }, 800);
    setTimeout(function () {
      guy.src = "images/button6Frames/carFrame6.png";
    }, 900);
    setTimeout(function () {
      guy.src = "images/button6Frames/carFrame7.png";
      IsBusy = false;
    }, 1000);
  }
}
