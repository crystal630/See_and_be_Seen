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

let m,n;







function size(d){
  if((d.likes.length+d.replies.length)>=0&&(d.likes.length+d.replies.length)<5){
    return 200+(d.likes.length+d.replies.length)*10;
  }else if((d.likes.length+d.replies.length)>=20&&(d.likes.length+d.replies.length)<25){
    return 200+(d.likes.length+d.replies.length)*10;
  }else if((d.likes.length+d.replies.length)>=36&&(d.likes.length+d.replies.length)<38){
    return 200+(d.likes.length+d.replies.length)*10;
  }else{
    return 250;
  }
}

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

function positionX(d){
  if(d.id<=6){
    if(d.id%3==0){
      return 1194-300;
    }else if(d.id==4||d.id==5){
      return 1194+300;
    }else{
      return 1194;
  }
}else if( d.id>6&&d.id<=12){
    return 694 + 200*(d.id-7);
  }else if(d.id>12&&d.id<=18){
    return 694 + 200*(d.id-13);
  }else if(d.id==19||d.id==21){
    return 644;
  }else if(d.id==20||d.id==22){
    return 1744;
  }else if(d.id>22&&d.id<=32){
    return 294 + 200*(d.id-23);
  }else if(d.id>32&&d.id<=42){
    return 294 + 200*(d.id-33);
  }
}

function positionY(d){
  if(d.id<=6){
    if(d.id%2==1||d.id==1){
      return 644;
    }else{
      return 684+40;
    }
  }else if(d.id>6&&d.id<=18){
    if(d.id<13){
      return 644-170;
    }else{
      return 644+270;
    }
  }
else if(d.id==19||d.id==20){
    return 644;
  }
  else if(d.id==21||d.id==22){
    return 644+150;
  }
  else if(d.id>22&&d.id<=32){
    return 314;
  }else if(d.id>32&&d.id<=42){
      return 1064;
  }else if(d.id>42&&d.id<=46){
      return 314+(d.id-42)*200;
  }else if(d.id>46&&d.id<=50){
      return 314+(d.id-46)*200;
  }
}

function positionLikeX(d){
      if(d.likes.length>0){
        if(d.id<=6){
          if(d.id%3==0){
            return 894+30-d.likes.length*10;
          }else if(d.id==4||d.id==5){
            return 1494+30-d.likes.length*10;
          }else{
            return 1194+30-d.likes.length*10;
        }
      }else if( d.id>6&&d.id<=12){
          return 694+30 + 200*(d.id-7);
        }else if(d.id>12&&d.id<=18){
          return 694+30 + 200*(d.id-13);
        }else if(d.id=19||d.id<=21){
          return 694+30;
        }else if(d.id=20||d.id<=22){
          return 1694+30;
        }else if(d.id>22&&d.id<=32){
          return 394+30 + 200*(d.id-23);
        }else if(d.id>32&&d.id<=42){
          return 394+30 + 200*(d.id-33);
        }
      }else{
        return 100;
      }
    }

function positionLikeY(d){
      if(d.likes.length>0){
        if(d.id<=6){
          if(d.id%2==1||d.id==1){
            return 584-d.likes.length*10;
          }else{
            return 584+80-d.likes.length*10;
          }
        }else if(d.id>6&&d.id<=18){
          if(d.id<13){
            return 584-170;
          }else{
            return 584+270;
          }
        }
      else if(d.id==19||d.id==20){
          return 584+30;
        }
        else if(d.id==21||d.id==22){
          return 584+230;
        }
        else if(d.id>22&&d.id<=32){
          return 214;
        }else if(d.id>32&&d.id<=42){
            return 1214;
        }else if(d.id>42&&d.id<=46){
            return 214+(d.id-42)*200;
        }else if(d.id>46&&d.id<=50){
            return 214+(d.id-46)*200;
        }
      }else{
        return 100;
      }

    }

function positionReplyX(d){
          if(d.replies.length>0){
            if(d.id<=6){
              if(d.id%3==0){
                return 894+100;
              }else if(d.id==4||d.id==5){
                return 1494+100;
              }else{
                return 1194+100;
            }
          }else if( d.id>6&&d.id<=12){
              return 694+100 + 200*(d.id-7);
            }else if(d.id>12&&d.id<=18){
              return 694+100 + 200*(d.id-13);
            }else if(d.id=19||d.id<=21){
              return 694+100;
            }else if(d.id=20||d.id<=22){
              return 1694+100;
            }else if(d.id>22&&d.id<=32){
              return 394+100 + 200*(d.id-23);
            }else if(d.id>32&&d.id<=42){
              return 394+100 + 200*(d.id-33);
            }
          }else{
            return 200;
          }
        }

function positionReplyY(d){
          if(d.replies.length>0){
            if(d.id<=6){
              if(d.id%2==1||d.id==1){
                return 584;
              }else{
                return 584+80;
              }
            }else if(d.id>6&&d.id<=18){
              if(d.id<13){
                return 584-170;
              }else{
                return 584+270;
              }
            }
          else if(d.id==19||d.id==20){
              return 584+30;
            }
            else if(d.id==21||d.id==22){
              return 584+230;
            }
            else if(d.id>22&&d.id<=32){
              return 214;
            }else if(d.id>32&&d.id<=42){
                return 1214;
            }else if(d.id>42&&d.id<=46){
                return 214+(d.id-42)*200;
            }else if(d.id>46&&d.id<=50){
                return 214+(d.id-46)*200;
            }
          }else{
            return 100;
          }

        }

function userX(d){

      if(d.id<=6){
        if(d.id%3==0){
          return 1094-200+130;
        }else if(d.id==4||d.id==5){
          return 1094+400+130;
        }else{
          return 1094+220;
      }
    }else if( d.id>6&&d.id<=12){
        return 594 + 200*(d.id-7)+220;
      }else if(d.id>12&&d.id<=18){
        return 594 + 200*(d.id-13)+220;
      }else if(d.id==19||d.id==21){
        return 754;
      }else if(d.id==20||d.id==22){
        return 1854;
      }else if(d.id>22&&d.id<=32){
        return 414 + 200*(d.id-23);
      }else if(d.id>32&&d.id<=42){
        return 414 + 200*(d.id-33);
      }
}

function userY(d){
  if(d.id<=6){
  if(d.id%2==1||d.id==1){
    return 684+10;
  }else{
  return 774;
  }
  }else if( d.id>6&&d.id<=18){
  if(d.id<13){
  return 684-160;
  }else{
  return 684+280;
  }
  }else if(d.id==19||d.id==20){
  return 694;
  }
  else if(d.id==21||d.id==22){
  return 844;
  }
  else if(d.id>22&&d.id<=32){
  return 359;
  }else if(d.id>32&&d.id<=42){
    return 1114;
  }else if(d.id>42&&d.id<=46){
    return 314+(d.id-42)*200;
  }else if(d.id>46&&d.id<=50){
    return 314+(d.id-46)*200;
  }
}

function change(d){
  if(d.likes.length>0){
    return "gifs/robdrop.gif";
  }else{
    return "gifs/robmove.gif"
  }
}



function getData(){
  var graphGroup = svg.append('g').attr("class","graphGroup");
  d3.json("https://organized-alluring-nerine.glitch.me/posts", function(data) {


    let houses = graphGroup.selectAll(".houses").data(data);
    let text = graphGroup.selectAll(".username").data(data);
    let enteringElements=houses.enter();
    let username = text.enter();

            enteringElements
                .append("svg:image")
                .attr("class","houses")
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
              .attr("x", positionX)
              .attr("y", positionY)
              .attr("width", size)
              .attr("height", size);

         username
          .append("text")
          .attr("class","username")
          .attr("x", userX)
          .attr("y",userY)
         .text(function(d){ return d.username})
         .style("font-size", 24)
         .attr('alignment-baseline', 'middle');

      let level = enteringElements.append("image");
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

        enteringElements.append("image")
            .attr("class","robot")
            .attr("xlink:href", function(d){
              if(d.likes.length>0){
                return "gifs/robdrop.gif";
              }else{
                return "gifs/robmove.gif"
              }
            })
            .attr("x", positionLikeX)
            .attr("y", positionLikeY)
            .attr("width",sizeL)
            .attr("height",sizeL)
            ;

            enteringElements.append("image")
                .attr("class","robotR")
                .attr("xlink:href", function(d){
                  if(d.replies.length>0){
                    return "gifs/rb.gif";
                  }else{
                    return "gifs/rbm.gif"
                  }
                })
                .attr("x", positionReplyX)
                .attr("y", positionReplyY)
                .attr("width",sizeR)
                .attr("height",sizeR)
                ;


             enteringElements.exit().remove();


    });

    console.log(svgI);
    svg = svgI;
    console.log(svgI);

    var graphGroupI = svgI.append('g').attr("class","graphGroup");
    d3.json("https://organized-alluring-nerine.glitch.me/posts", function(data) {



      let houses = graphGroupI.selectAll(".houses").data(data);
      let text = graphGroupI.selectAll(".username").data(data);
      let enteringElements=houses.enter();
      let username = text.enter();

              enteringElements
                  .append("svg:image")
                  .attr("class","houses")
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
                .attr("x", positionX)
                .attr("y", positionY)
                .attr("width", size)
                .attr("height", size);

                username
                 .append("text")
                 .attr("class","username")
                 .attr("x", userX)
                 .attr("y",userY)
                .text(function(d){ return d.username})
                .style("font-size", 24)
                .attr('alignment-baseline', 'middle');


        let level = enteringElements.append("image");
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

          enteringElements.append("image")
              .attr("class","robot")
              .attr("xlink:href", function(d){
                  if(d.likes.length>0){
                  return "gifs/robdrop.gif";
                }else{
                  return "gifs/robmove.gif"
                }
              })
              .attr("x", positionLikeX)
              .attr("y", positionLikeY)
              .attr("width",sizeL)
              .attr("height",sizeL)
              ;

              enteringElements.append("image")
                  .attr("class","robotR")
                  .attr("xlink:href", function(d){
                    console.log(d.replies.length);
                      if(d.replies.length>0){
                      return "gifs/rb.gif";
                    }else{
                      return "gifs/rbm.gif"
                    }
                  })
                  .attr("x", positionReplyX)
                  .attr("y", positionReplyY)
                  .attr("width",sizeR)
                  .attr("height",sizeR)
                  ;
              // console.log(enteringElements);

               enteringElements.exit().remove();

               // console.log("2"+enteringElements);

      });


}

function getDataII(){

  svg.select(".graphGroup").remove();



  var graphGroup = svg.append('g').attr("class","graphGroup");

  d3.json("https://organized-alluring-nerine.glitch.me/posts", function(data) {

    let houses = graphGroup.selectAll(".houses").data(data);
    let text = graphGroup.selectAll(".username").data(data);
    let enteringElements=houses.enter();
    let username = text.enter();

    // for(i=0;i<data.length;i++){
    //   let n = data[i].likes.length;
    //   console.log(n);
    //   if(n+1==true){
    //     console.log("hh")
    //   }else{
    //     console.log("bye")
    //   }
    // }


            enteringElements
                .append("svg:image")
                .attr("class","houses")
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
              .attr("x", positionX)
              .attr("y", positionY)
              .attr("width", size)
              .attr("height", size);

         username
          .append("text")
          .attr("class","username")
          .attr("x", userX)
          .attr("y",userY)
         .text(function(d){ return d.username})
         .style("font-size", 24)
         .attr('alignment-baseline', 'middle');

      let level = enteringElements.append("image");
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

        enteringElements.append("image")
            .attr("class","robot")
            .attr("xlink:href", function(d){
                if(d.likes.length>0){
                return "gifs/robdrop.gif";
              }else{
                return "gifs/robmove.gif"
              }
            })
            .attr("x", positionLikeX)
            .attr("y", positionLikeY)
            .attr("width",sizeL)
            .attr("height",sizeL)
            ;

            enteringElements.append("image")
                .attr("class","robotR")
                .attr("xlink:href", function(d){

                    if(d.replies.length>0){
                    return "gifs/rb.gif";
                  }else{
                    return "gifs/rbm.gif"
                  }
                })
                .attr("x", positionReplyX)
                .attr("y", positionReplyY)
                .attr("width",sizeR)
                .attr("height",sizeR)
                ;

    //console.log(data);




  })


}


function refresh(){
  console.log("hiii")
  window.location.reload();
}
getData();

// function test(){

  // console.log(graphGroup);
// }
// test();
//setInterval(test,4000);
// setInterval(test,1500);
setInterval(refresh,50000);

setInterval(getDataII,3000);
svg.append("image")
  .attr('xlink:href', 'bg2.gif')
  .attr("x",0)
  .attr('y',100)
  .attr("width",2000)
  .attr("height",1000);
