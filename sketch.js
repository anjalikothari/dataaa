// https://in.pinterest.com/pin/230950287133957014/
// Walter Dexel

function setup() {
    createCanvas(390, 460);
    colorMode(HSB,100);
    //angleMode(DEGREES);
    
  }
  
  function draw() {
    background("#EAD4B6");
    // background(35,22,92);
    noStroke();
    
  //   tallest
    fill("#F3EFEC");
    
     // rect(map(mouseX,0,390,196,0),0,18,336); 
    
    if (mouseX<10){
      rect(196,0,18,336); 
    } 
    else if(mouseX>=400) {
    rect(0,0,18,336); 
    }
    else if(mouseX>10){
      rect(map(mouseX,0,390,196,0),0,18,336); 
    }
    
    
  //   2nd tallest
    fill("#949EA0");
    rect(map(mouseX,0,390,214,350),40,18,296);
    
  //   smallest
    fill("#A54964");
    rect(123,227,73,map(mouseX,0,390,9,250));
    
  //   1
    fill("#1C1B19");
    // rect(123,335,169,27);
     rect(123,335,map(mouseX,0,390,150,0),27);
    
  //   2
    fill("#F2F1ED");
    rect(123,360,267,37);
    
  //   last rect 
    fill("#1E211E");
    // rect(123,398,219,14);
      rect(123,398,map(mouseX,0,390,190,350),14);
    
    // arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
     // fill("#E64C4E");
   fill(359,67,90);
    //arc(123,319, 194, 184, HALF_PI, PI + HALF_PI);
    
    push();
    
      translate(123,184);
      rotate(map(mouseX,0,390,0,PI));
      arc(0,134, 184, 184, HALF_PI, PI + HALF_PI);
  
    pop();
    
  }
  
  function keyPressed() {
    // this will download the first 5 seconds of the animation!
    if (key === 's') {
      saveGif('mySketch', 20);
    }
  }