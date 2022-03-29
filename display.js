let a = select('#new_post_submit');

function setup(){
  a.mousePressed(test);
}

function test(){
  ellipse(200,200,20,20);
}
