var pictureList; //this variable is used in preload() and in draw() so we create it outside of those sections.

function preload() {
  //The images need to be preloaded.  Here they are loaded into an array (essentially a list)
  pictureList = [];
  var imgCount = 6; //total number of images
  //use a for loop to load all 6 images into the array
  for (var i = 0; i < imgCount; i++) {
    pictureList[i] = loadImage((i + 1) + ".png");
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(252,186,3); //Yellow color

  var n = windowWidth/100 + windowHeight/100; //number of times loop runs

  for (var i = 0; i < n; i++) {
    
    var r = int(random(0, 6)); //chooses a random image number
    var randomImage = pictureList[r] //This references the preloaded list at the top
    
    var x = int(random(-100, windowWidth - 300));
    var y = int(random(-100, windowHeight - 300));
     
    var s = random(0.5,0.8);
    image(randomImage, x, y, s*randomImage.width, s*randomImage.height);
  }

  //save("final-1.jpg"); //uncomment to save images; never use without the noLoop() in setup()
  //If the save function does nothing when you run the code, try updating your internet browser..or try a different browser
}

function mouseClicked() {
  redraw();
}