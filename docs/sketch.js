let h = 4;
let y = 0;
let offset = 0;
let historyIndex = 0;

let history;
let cam;

function setup() {
  // Create the canvas
  createCanvas(640, 480);
  
  // Create the camera
  cam = createCapture(VIDEO);
  cam.hide();
  
  // Populate the history array with height/h images
  history = [];
  for(i = 0; i < height/h; i++) {
    history.push(createImage(width, height));
  }
}

function draw() {
  // Load the camera frame into the history of frames
  history[historyIndex].copy(cam, 0, 0, width, height, 0, 0, width, height);
  
  // Update the history index
  historyIndex = (historyIndex + 1) % history.length;
  
  // Visual effect
  for(i = 0; i < history.length; i++) {
    // For each frame in the list of frames, take a different section
    y = i * h;
    
    // Increment the current index
    currentIndex = (i + offset) % history.length;
    
    // Create the index
    image(history[currentIndex], 0, y, width, h, 0, y, width, h);
  }
  
  offset++;
}