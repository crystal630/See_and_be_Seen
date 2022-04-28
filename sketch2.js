var svg = d3.select("#my_dataviz")
  .append("svg")
  .attr("id","svgO")
  .attr("width", 2560)
  .attr("height", 1600)
;

svg.append('svg:image')
  .attr('xlink:href', 'bg.jpg')
  .attr("width",2560)
  .attr("height", 1600)
  .attr("x", 0)
  .attr("y", 0);




  var svgI = d3.select("#my_dataviz")
    .append("svg")
    .attr("id","svgI")
    .attr("width", 2560)
    .attr("height", 1600)
  ;


// function size(d){
// if((d.likes.length+d.replies.length)>=0&&(d.likes.length+d.replies.length)<20){
//   return 200+(d.likes.length+d.replies.length)*10;
// }else if((d.likes.length+d.replies.length)>=20&&(d.likes.length+d.replies.length)<25){
//   return 200+(d.likes.length+d.replies.length-20)*10;
// }else if((d.likes.length+d.replies.length)>=36&&(d.likes.length+d.replies.length)<38){
//   return 200+(d.likes.length+d.replies.length-36)*10;
// }else if((d.likes.length+d.replies.length)>=45){
//   return 250+(d.likes.length+d.replies.length-45)*10;
// }
// }

function sizeL(d){
if(d.likes.length>=0&&d.likes.length<11){
  return 100+d.likes.length*20
}else if(d.likes.length>=20&&d.likes.length<25){
  return 100+(d.likes.length-20)*20
}else if(d.likes.length>=36&&d.likes.length<38){
  return 100+(d.likes.length-36)*20
}else{
  return 150;
}
}

function sizeR(d){
if(d.replies.length>=0&&d.replies.length<11){
  return 100+d.replies.length*40
}else if(d.replies.length>=20&&d.replies.length<25){
  return 100+(d.replies.length-20)*40
}else if(d.replies.length>=36&&d.replies.length<38){
  return 100+(d.replies.length-36)*40
}else{
  return 150;
}
}

function change(d){
if(d.likes.length>0){
  return "gifs/robdrop.gif";
}else{
  return "gifs/robmove.gif"
}
}
  var graphGroupI = svgI.append('g').attr("class","graphGroup");
function getData(){
  d3.json("https://organized-alluring-nerine.glitch.me/posts", function(data) {

              console.log(data.reverse());
              //console.log(size());
                  var houses = graphGroupI.selectAll(".houses");
                //  var text = graphGroupI.selectAll(".username").data(data);
                  var update = houses.data(data);
                  var enteringElements=houses.data(data).enter();

              testUp = enteringElements.append("text").attr('class',"houses")
                  .attr("id",function(d,i){
                    return i+1;
                  })
                    .attr("x",function(d,i){
                      return 50+i*50;
                    })
                    .attr("y",800)
                    .text(function(d){return d.likes.length})
                    .style("font-size", function(d){return d.likes.length*20} )
                    ;

                    console.log("enter", enteringElements);
                    console.log(testUp)

                    for(i=1;i<data.length;i++){
                      var testData = !!document.getElementById(i);
                      }
                      if(testData==true){

                      update.text(function(d){return d.likes.length})
                        .style("font-size", function(d){return d.likes.length*20} )
          // console.log(houses);
        //  console.log(graphGroupI);
//

}

           });

    }




function refresh(){
console.log("hiii")
window.location.reload();
}
//getData();
setInterval(getData,3000);
//setInterval(refresh,50000);

svg.append("image")
.attr('xlink:href', 'bg2.gif')
.attr("x",0)
.attr('y',100)
.attr("width",2000)
.attr("height",1000);
