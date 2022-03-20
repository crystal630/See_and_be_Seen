// let hs=[]; // empty array
let button, btLike;
let m=0;
let h1,rm,rd;
let hs=[];
let st = false;
let lk = false;
let rx;

function preload() {

  img=loadImage('gifs/ddd.jpeg');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  // for (let i = 0; i<10; i++){
  //   hs.push(new House ());
  // }
  button = createButton('submit');
  button.position(20 ,20, 65);
  btLike = createButton('like');
  btLike.position(85 ,20, 65);
  for(i=0;i<50;i++){
    hs.push(new House(this.x,this.y,this.e,0));
  }
  // btLike = createButton('like');
  // btLike.position(85 ,20, 65);
  // for(let i=0; i<10; i++){

  //  console.log(st);

  // }
}

function test(){
  st = true;
}

function rob(){
  lk = true;
}

function draw(){
  button.mousePressed(test);
  btLike.mousePressed(rob);

  for (let i = 0; i< hs.length; i++){
    if(st===true){
      hs[i].position();
      hs[i].body();
      console.log(hs[i].e);
      st=false;
      console.log(lk);
      //console.log(hs[i]);
    }
    if(lk===true){
      //hs[i].ep();
      rm = createImg('gifs/robmove.gif');
      // let rx = hs[i].x+h1.width;
      //
      // while(rx>hs[i].x&&rx<=hs[i].x+h1.width){
      //   rm.position(rx,hs[i].y);
      //   console.log(rx);
      //   rx -= 1;
      // }
      rm.position(hs[i].x+h1.width/2,hs[i].y-40);
      rm.size(70,70);
      setTimeout(function() { rm.hide(); }, 2000);
        rd = createImg('gifs/robdrop.gif');
      //  rd.delay(3000);
        rd.hide();
        rd.position(hs[i].x,hs[i].y-40);
        rd.size(70,70);
        setTimeout(function() { rd.show();}, 2000);
        setTimeout(function() { rd.hide();}, 4000);
        hs[i].ep();
      lk=false;
    }

  }

}

class House{

  constructor(x,y,e){
    this.x = width/2;
    this.y = 300;
    this.e = 0;
    this.num = 1;
  }

  position(){

    if(this.num<5){
      this.x += random(-this.num*40,this.num*40);
      this.y += random(-this.num*40,this.num*40);
      this.num+=1;
    }else{
      this.num = 1;
    }

    console.log(this.num);
    //console.log(this.x,this.y);
  }

  body(){
    h1=createImg('gifs/house1.gif');
    //image(img,this.x, this.y,100,100);
    h1.position(this.x,this.y);
    h1.size(100,100);
    fill(20,200,20);
    //textSize(30);
    //text(this.e, this.x,this.y+h1.height);
     //ellipse(this.x,this.y,20,20);
    //console.log(this.x,this.y);
  }

  ep(){
    this.e += 1;


  }

  // level(){
  //
  // }

}
