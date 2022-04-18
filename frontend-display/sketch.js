
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
    .attr("xlink:href","gifs/c1.gif")
    .attr("x", 1550)
    .attr("y", 720)
    .attr("width",100)
    .attr("height",100);

    svg.append("image")
      .attr("xlink:href","gifs/c2.gif")
      .attr("x", 450)
      .attr("y", 450)
      .attr("width",200)
      .attr("height",200);

    svg.append("image")
        .attr("xlink:href","gifs/c2.gif")
        .attr("x", 1450)
        .attr("y", 1050)
        .attr("width",200)
        .attr("height",200);

  d3.json("https://organized-alluring-nerine.glitch.me/posts", function(data) {

var test = svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter();

    test.append("image")
      // .attr("class", function(d) { return "bubbles " + d.continent })
      .attr("xlink:href","gifs/h2.gif")
      .attr("x", function(d){
        if(d.id<=6){
          if(d.id%3==0){
            return 1094-300-d.likes.length*10;
          }else if(d.id==4||d.id==5){
            return 1094+300-d.likes.length*10;
          }else{
            return 1094-d.likes.length*10;
        }
      }else if( d.id>6&&d.id<=12){
          return 594 + 200*(d.id-7);
        }else if(d.id>12&&d.id<=18){
          return 594 + 200*(d.id-13);
        }})
      .attr("y", function(d){
        if(d.id<=6){
          if(d.id%2==1||d.id==1){
            return 684-d.likes.length*10;
          }else{
          return 684+80-d.likes.length*10;
        }
      }else if( d.id>6&&d.id<=18){
        if(d.id<13){
          return 684-170-d.likes.length*10;
        }else{
          return 684+270-d.likes.length*10;
        }
        }})
      .attr("width", function(d){return 200+d.likes.length*10})
      .attr("height", function(d){return 200+d.likes.length*10});
      // .attr("width", 200)
      // .attr("height", 200);


      // test.append("image")
      //   .attr("xlink:href","gifs/h1.gif")
      //   .attr("x", 1094)
      //   .attr("y", 684)
      //   .attr("width", function(d){return 200+d.likes.length*10})
      //   .attr("height", 200);

     test
      .append("text")
      .attr("x", function(d){
        if(d.id<=6){
          if(d.id%3==0){
            return 1094-300-d.likes.length*10+120;
          }else if(d.id==4||d.id==5){
            return 1094+300-d.likes.length*10+120;
          }else{
            return 1094-d.likes.length*10+120;
        }
      }else if( d.id>6&&d.id<=12){
          return 594 + 200*(d.id-7)+120;
        }else if(d.id>12&&d.id<=18){
          return 594 + 200*(d.id-13)+120;
        }})
      .attr("y",function(d){
        if(d.id<=6){
        if(d.id%2==1||d.id==1){
          return 684-d.likes.length*10+60;
        }else{
        return 684+80-d.likes.length*10+60;
      }
    }else if( d.id>6&&d.id<=18){
      if(d.id<13){
        return 684-120-d.likes.length*10;
      }else{
        return 684+320-d.likes.length*10;
      }
      }})
     .text(function(d){ return d.username})
     .style("font-size", 24)
     .attr('alignment-baseline', 'middle');
   // //
   //   test
   //    .append("text")
   //    .attr("x", )
   //    .attr("y",)
   //    .text("Level 1")
   //    .style("font-size", 8)
   //    .attr('alignment-baseline', 'middle');
   // //
   //   test
   //     .append("rect")
   //     .attr("x",
   //     .attr("y", )
   //     .attr("width", 50)
   //     .attr("height", 8 )
   //     .style("fill", "none" )
   //     .style("stroke", "black" );
   // //
   // //
   //  test
   //    .append("rect")
   //    .attr("x", )
   //    .attr("y", )
   //    .attr("width", function(d){return d.likes.length*3})
   //    .attr("height", 8 )
   //    .style("fill", 255 );
   // //
  })
