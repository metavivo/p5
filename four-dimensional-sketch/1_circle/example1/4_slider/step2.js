let my_height = 400;
let tool_height = 130;
let tool_h = 10;

let button;
let flag = false;

let x;

let slider_x;

function setup() {
  createCanvas(600, my_height + tool_height);

  textSize(20);

  slider_x = createSlider(0, 400, 0);
  slider_x.position(50, my_height + tool_h);
  slider_x.style('width', '200px');
  tool_h = tool_h + 30;
  
}

function draw() {
  background(220);
  
// separator  
  line(0,400, width, 400);
  
// slider_x  
  text('x', 20, slider_x.y + 15);
  let slider_x_value = slider_x.value();
  text(slider_x_value, slider_x.x + slider_x.width + 20,slider_x.y + 15);
    
  x = slider_x_value + 50;

  circle(x + 0, 200, 50)
  
}

