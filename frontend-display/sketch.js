let floatX=0
  var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", 2388)
    .attr("height", 1668)
    .append("g")

  svg.append('svg:image')
    .attr('xlink:href', 'bg.png')
    .attr("width",2388)
    .attr("height", 1668)
    .attr("x", 0)
    .attr("y", 0);


  svg.append("image")
    .attr('xlink:href', 'gifs/coode.png')
    .attr("x",500)
    .attr('y',720)
    .attr("width",100)
    .attr("height",100);


// d3.json("https://organized-alluring-nerine.glitch.me/posts", function(data) {
//
//
//   })


function getData(){

  d3.json("https://organized-alluring-nerine.glitch.me/posts", function(data) {
    var test = svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter();

    function size(d){
      if(d.likes.length>=0&&d.likes.length<5){
        return 200+d.likes.length*10
      }else if(d.likes.length>=20&&d.likes.length<25){
        return 200+(d.likes.length-20)*10
      }else if(d.likes.length>=36&&d.likes.length<38){
        return 200+(d.likes.length-36)*10
      }else{
        return 250;
      }
    }

    function positionX(d){
      if(d.id<=6){
        if(d.id%3==0){
          return 1094-300;
        }else if(d.id==4||d.id==5){
          return 1094+300;
        }else{
          return 1094;
      }
    }else if( d.id>6&&d.id<=12){
        return 594 + 200*(d.id-7);
      }else if(d.id>12&&d.id<=18){
        return 594 + 200*(d.id-13);
      }else if(d.id=19||d.id<=21){
        return 594;
      }else if(d.id=20||d.id<=22){
        return 1594;
      }else if(d.id>22&&d.id<=32){
        return 294 + 200*(d.id-23);
      }else if(d.id>32&&d.id<=42){
        return 294 + 200*(d.id-33);
      }
    }

    function positionY(d){
      if(d.id<=6){
        if(d.id%2==1||d.id==1){
          return 684;
        }else{
          return 684+80;
        }
      }else if(d.id>6&&d.id<=18){
        if(d.id<13){
          return 684-170;
        }else{
          return 684+270;
        }
      }
    else if(d.id==19||d.id==20){
        return 684+30;
      }
      else if(d.id==21||d.id==22){
        return 684+230;
      }
      else if(d.id>22&&d.id<=32){
        return 314;
      }else if(d.id>32&&d.id<=42){
          return 1314;
      }else if(d.id>42&&d.id<=46){
          return 314+(d.id-42)*200;
      }else if(d.id>46&&d.id<=50){
          return 314+(d.id-46)*200;
      }
    }



    let houses = test.append("image")
          // .attr("class", function(d) { return "bubbles " + d.continent })
          .attr("xlink:href",function(d){
            if(d.likes.length>=0&&d.likes.length<20){
              return "gifs/h1.gif";
            }else if(d.likes.length>=21&&d.likes.length<35){
              return "gifs/h2.gif";
            }else if(d.likes.length>=36&&d.likes.length<45){
              return "gifs/h1.gif";
            }else if(d.likes.length>45){
              return "gifs/h1.gif";
            }

          })
          .attr("class","house")
      ;

        svg.selectAll(".house")
          .attr("x", positionX)
          .attr("y", positionY)
          .attr("width", size)
          .attr("height", size);

         test
          .append("text")
          .attr("x", function(d){
              if(d.id<=6){
                if(d.id%3==0){
                  return 1094-300+140;
                }else if(d.id==4||d.id==5){
                  return 1094+300+140;
                }else{
                  return 1094+140;
              }
            }else if( d.id>6&&d.id<=12){
                return 594 + 200*(d.id-7)+120;
              }else if(d.id>12&&d.id<=18){
                return 594 + 200*(d.id-13)+120;
              }
          })
          .attr("y",function(d){
            if(d.id<=6){
            if(d.id%2==1||d.id==1){
              return 684+60;
            }else{
            return 684+80+60;
          }
        }else if( d.id>6&&d.id<=18){
          if(d.id<13){
            return 684-120;
          }else{
            return 684+320;
          }
          }})
         .text(function(d){ return d.username})
         .style("font-size", 24)
         .attr('alignment-baseline', 'middle');

      let level = test.append("image");
        level.attr("xlink:href","gifs/c2.gif")
          .attr("x",function(d){
            if(d.likes.length>5&&d.likes.length<10){
              if(d.id<=6){
                if(d.id%3==0){
                  return 1094-300+160;
                }else if(d.id==4||d.id==5){
                  return 1094+300+160;
                }else{
                  return 1094+160;
              }
            }else if( d.id>6&&d.id<=12){
                return 594 + 200*(d.id-7)+160;
              }else if(d.id>12&&d.id<=18){
                return 594 + 200*(d.id-13)+160;
              }
            }

          })
            .attr("y",function(d){
            if(d.likes.length>5&&d.likes.length<10){
              if(d.id<=6){
              if(d.id%2==1||d.id==1){
                return 684+110;
              }else{
              return 684+80+110;
            }
          }else if( d.id>6&&d.id<=18){
            if(d.id<13){
              return 684-90;
            }else{
              return 684+350;
            }
          }}});

});
}

// getData();

  setInterval(getData,1000);
