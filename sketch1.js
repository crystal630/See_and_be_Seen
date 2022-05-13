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

function opacity1(d){
  return 0.1+(d.likes.length)/10;
}
function opacity2(d){
  return 0.1+(d.replies.length)/10;
}

function size(d){
if((d.likes.length+d.replies.length)>=0&&(d.likes.length+d.replies.length)<6){
  return 200+(d.likes.length+d.replies.length)*10;
}else if((d.likes.length+d.replies.length)>=20&&(d.likes.length+d.replies.length)<25){
  return 200+(d.likes.length+d.replies.length-20)*10;
}else if((d.likes.length+d.replies.length)>=36&&(d.likes.length+d.replies.length)<38){
  return 200+(d.likes.length+d.replies.length-36)*10;
}else if((d.likes.length+d.replies.length)>=45){
  return 250+(d.likes.length+d.replies.length-45)*10;
}else{
  return 250
}
}

function sizeL(d){
if(d.likes.length>=0&&d.likes.length<6){
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
      var update = houses.data(data);
      var text = graphGroupI.selectAll(".username");
      var userUp = text.data(data);
      var username = userUp.enter();
      var enteringElements=houses.data(data).enter();
      var robot = graphGroupI.selectAll(".robot").data(data);
      var r1 = robot.enter();
      var robotR = graphGroupI.selectAll(".robotR").data(data);
      var r2 = robotR.enter();
      var level = graphGroupI.selectAll(".level").data(data);
      let lev = level.enter();

              enteringElements
               .append("svg:image")
               .attr("class","houses")
               .attr("id",function(d,i){
                 return i+1;
               })
               .attr("xlink:href","gifs/building.gif")
               .attr("x", function(d,i){
    if((i+1)<=6){
      if((i+1)%3==0){
        return 1194-300;
      }else if((i+1)==4||(i+1)==5){
        return 1194+300;
      }else{
        return 1194;
    }
    }else if( (i+1)>6&&(i+1)<=12){
      return 694 + 200*(i-6);
    }else if((i+1)>12&&(i+1)<=18){
      return 694 + 200*(i-12);
    }else if((i+1)==19||(i+1)==21){
      return 644;
    }else if((i+1)==20||(i+1)==22){
      return 1744;
    }else if((i+1)>22&&(i+1)<=32){
      return 294 + 200*(i-22);
    }else if((i+1)>32&&(i+1)<=42){
      return 294 + 200*(i-32);
    }
  })
               .attr("y", function(d,i){
    if((i+1)<=6){
      if((i+1)%2==1||(i+1)==1){
        return 564;
      }else{
        return 684+120;
      }
    }else if((i+1)>6&&(i+1)<=18){
      if((i+1)<13){
        return 644-250;
      }else{
        return 644+350;
      }
    }
    else if((i+1)==19||(i+1)==20){
      return 644;
    }
    else if((i+1)==21||(i+1)==22){
      return 644+150;
    }
    else if((i+1)>22&&(i+1)<=32){
      return 314-80;
    }else if((i+1)>32&&(i+1)<=42){
        return 1064+80;
    }else if((i+1)>42&&(i+1)<=46){
        return 114;
    }else if((i+1)>46&&(i+1)<=50){
        return 1264;
    }
  })
               .attr("width", size)
               .attr("height", size)
               .transition()
              .delay(2000)
              .attr("xlink:href",function(d){
    if((d.likes.length+d.replies.length)>=0&&(d.likes.length+d.replies.length)<20){
      return "gifs/h1_2.gif";
    }else if((d.likes.length+d.replies.length)>=20&&(d.likes.length+d.replies.length)<35){
      return "gifs/h2.gif";
    }else if((d.likes.length+d.replies.length)>=36&&(d.likes.length+d.replies.length)<45){
      return "gifs/h3.gif";
    }else if((d.likes.length+d.replies.length)>45){
      return "gifs/h4.gif";
    }
  })
              .attr("x", function(d,i){
   if((i+1)<=6){
     if((i+1)%3==0){
       return 1194-300;
     }else if((i+1)==4||(i+1)==5){
       return 1194+300;
     }else{
       return 1194;
   }
   }else if( (i+1)>6&&(i+1)<=12){
     return 694 + 200*(i-6);
   }else if((i+1)>12&&(i+1)<=18){
     return 694 + 200*(i-12);
   }else if((i+1)==19||(i+1)==21){
     return 644;
   }else if((i+1)==20||(i+1)==22){
     return 1744;
   }else if((i+1)>22&&(i+1)<=32){
     return 294 + 200*(i-22);
   }else if((i+1)>32&&(i+1)<=42){
     return 294 + 200*(i-32);
   }
 })
              .attr("y", function(d,i){
   if((i+1)<=6){
     if((i+1)%2==1||(i+1)==1){
       return 564;
     }else{
       return 684+120;
     }
   }else if((i+1)>6&&(i+1)<=18){
     if((i+1)<13){
       return 644-250;
     }else{
       return 644+350;
     }
   }
   else if((i+1)==19||(i+1)==20){
     return 644;
   }
   else if((i+1)==21||(i+1)==22){
     return 644+150;
   }
   else if((i+1)>22&&(i+1)<=32){
     return 314-80;
   }else if((i+1)>32&&(i+1)<=42){
       return 1064+80;
   }else if((i+1)>42&&(i+1)<=46){
       return 114;
   }else if((i+1)>46&&(i+1)<=50){
       return 1264;
   }
 })
              .attr("width",  size)
              .attr("height", size)
            ;

              username
                     .append("text")
                     .attr("class","username")
                     .attr("x", function(d,i){
                       if((d.likes.length+d.replies.length)>=0&&(d.likes.length+d.replies.length)<20){
                         if((i+1)<=6){
                           if((i+1)%3==0){
                             return 1094-200+130;
                           }else if((i+1)==4||(i+1)==5){
                             return 1094+400+130;
                           }else{
                             return 1094+220;
                         }
                       }else if( (i+1)>6&&(i+1)<=12){
                           return 594 + 200*((i+1)-7)+220;
                         }else if((i+1)>12&&(i+1)<=18){
                           return 594 + 200*((i+1)-13)+220;
                         }else if((i+1)==19||(i+1)==21){
                           return 754;
                         }else if((i+1)==20||(i+1)==22){
                           return 1854;
                         }else if((i+1)>22&&(i+1)<=32){
                           return 414 + 200*((i+1)-23);
                         }else if((i+1)>32&&(i+1)<=42){
                           return 414 + 200*((i+1)-33);
                         }
                       }else if((d.likes.length+d.replies.length)>=21&&(d.likes.length+d.replies.length)<35){
                         if((i+1)<=6){
                           if((i+1)%3==0){
                             return 1094-200+130;
                           }else if((i+1)==4||(i+1)==5){
                             return 1094+400+130;
                           }else{
                             return 1094+220;
                         }
                       }else if( (i+1)>6&&(i+1)<=12){
                           return 594 + 200*((i+1)-7)+220;
                         }else if((i+1)>12&&(i+1)<=18){
                           return 594 + 200*((i+1)-13)+220;
                         }else if((i+1)==19||(i+1)==21){
                           return 754;
                         }else if((i+1)==20||(i+1)==22){
                           return 1854;
                         }else if((i+1)>22&&(i+1)<=32){
                           return 414 + 200*((i+1)-23);
                         }else if((i+1)>32&&(i+1)<=42){
                           return 414 + 200*((i+1)-33);
                         }
                       }else if((d.likes.length+d.replies.length)>=36&&(d.likes.length+d.replies.length)<45){
                         if((i+1)<=6){
                           if((i+1)%3==0){
                             return 1094-200+130-100;
                           }else if((i+1)==4||(i+1)==5){
                             return 1094+400+130-100;
                           }else{
                             return 1094+220-100;
                         }
                       }else if( (i+1)>6&&(i+1)<=12){
                           return 594 + 200*((i+1)-7)+220-100;
                         }else if((i+1)>12&&(i+1)<=18){
                           return 594 + 200*((i+1)-13)+220-100;
                         }else if((i+1)==19||(i+1)==21){
                           return 754-100;
                         }else if((i+1)==20||(i+1)==22){
                           return 1854-100;
                         }else if((i+1)>22&&(i+1)<=32){
                           return 414-100 + 200*((i+1)-23);
                         }else if((i+1)>32&&(i+1)<=42){
                           return 414-100 + 200*((i+1)-33);
                         }
                       }else if((d.likes.length+d.replies.length)>45){
                         if((i+1)<=6){
                           if((i+1)%3==0){
                             return 1094-200+40;
                           }else if((i+1)==4||(i+1)==5){
                             return 1094+400+40;
                           }else{
                             return 1094+130;
                         }
                       }else if( (i+1)>6&&(i+1)<=12){
                           return 594 + 200*((i+1)-7)+220-90;
                         }else if((i+1)>12&&(i+1)<=18){
                           return 594 + 200*((i+1)-13)+220-90;
                         }else if((i+1)==19||(i+1)==21){
                           return 754-90;
                         }else if((i+1)==20||(i+1)==22){
                           return 1854-90;
                         }else if((i+1)>22&&(i+1)<=32){
                           return 414 + 200*((i+1)-23)-90;
                         }else if((i+1)>32&&(i+1)<=42){
                           return 414 + 200*((i+1)-33)-90;
                         }

                       }

                     })
                     .attr("y",function(d,i){
                      if((d.likes.length+d.replies.length)>=0&&(d.likes.length+d.replies.length)<20){
                        if((i+1)<=6){
                        if((i+1)%2==1||(i+1)==1){
                          return 604;
                        }else{
                        return 764+80;
                        }
                      }else if( (i+1)>6&&(i+1)<=18){
                        if((i+1)<13){
                        return 684-250;
                        }else{
                        return 684+350;
                        }
                      }else if((i+1)==19||(i+1)==20){
                        return 694;
                        }
                        else if((i+1)==21||(i+1)==22){
                        return 844;
                        }
                        else if((i+1)>22&&(i+1)<=32){
                        return 359-80;
                      }else if((i+1)>32&&(i+1)<=42){
                          return 1114+80;
                        }else if((i+1)>42&&(i+1)<=46){
                              return 154;
                          }else if((i+1)>46&&(i+1)<=50){
                              return 1304;
                          }
                     }else if((d.likes.length+d.replies.length)>=21&&(d.likes.length+d.replies.length)<35){
                       if((i+1)<=6){
                       if((i+1)%2==1||(i+1)==1){
                         return 684-100;
                       }else{
                       return 764-20+80;
                       }
                     }else if( (i+1)>6&&(i+1)<=18){
                       if((i+1)<13){
                         return 684-170-20-80;
                       }else{
                       return 684+270-20+80;
                       }
                     }else if((i+1)==19||(i+1)==20){
                       return 694-20;
                       }
                       else if((i+1)==21||(i+1)==22){
                       return 844-20;
                       }
                       else if((i+1)>22&&(i+1)<=32){
                       return 359-20-80;
                     }else if((i+1)>32&&(i+1)<=42){
                         return 1114-2+80;
                       }else if((i+1)>42&&(i+1)<=46){
                         return 154;
                       }else if((i+1)>46&&(i+1)<=50){
                         return 1304;
                       }
                     }else if((d.likes.length+d.replies.length)>=35&&(d.likes.length+d.replies.length)<45){
                       if((i+1)<=6){
                       if((i+1)%2==1||(i+1)==1){
                         return 684-70;
                       }else{
                       return 764+70;
                       }
                     }else if( (i+1)>6&&(i+1)<=18){
                       if((i+1)<13){
                       return 684-170-70;
                       }else{
                       return 684+270+70;
                       }
                     }else if((i+1)==19||(i+1)==20){
                       return 694;
                       }
                       else if((i+1)==21||(i+1)==22){
                       return 844;
                       }
                       else if((i+1)>22&&(i+1)<=32){
                       return 359-70;
                     }else if((i+1)>32&&(i+1)<=42){
                         return 1114+70;
                       }else if((i+1)>42&&(i+1)<=46){
                         return 154;
                       }else if((i+1)>46&&(i+1)<=50){
                         return 1304;
                       }
                     }else if((d.likes.length+d.replies.length)>=45){
                       if((i+1)<=6){
                       if((i+1)%2==1||(i+1)==1){
                         return 684-80;
                       }else{
                       return 764+80;
                       }
                     }else if( (i+1)>6&&(i+1)<=18){
                       if((i+1)<13){
                       return 684-170-80;
                       }else{
                       return 684+270+80;
                       }
                     }else if((i+1)==19||(i+1)==20){
                       return 684;
                       }
                       else if((i+1)==21||(i+1)==22){
                       return 834;
                       }
                       else if((i+1)>22&&(i+1)<=32){
                       return 359-80;
                     }else if((i+1)>32&&(i+1)<=42){
                         return 1114+80;
                       }else if((i+1)>42&&(i+1)<=46){
                         return 154;
                       }else if((i+1)>46&&(i+1)<=50){
                         return 1304;
                       }
                     }
                     })
                    .text(function(d){
                        let m = d.text;
                      if((d.likes.length+d.replies.length)>=0&&(d.likes.length+d.replies.length)<20){
                      let n = m.substring(0,6);return n;
                      }else if((d.likes.length+d.replies.length)>=21&&(d.likes.length+d.replies.length)<35){
                      let n = m.substring(0,10);return n;
                      }else if((d.likes.length+d.replies.length)>=36&&(d.likes.length+d.replies.length)<45){
                      let n = m.substring(0,28);return n;
                    }else if((d.likes.length+d.replies.length)>45){
                        let n = m.substring(0,30);return n;
                      }
                    })
                    .style("font-size", 20)
                    .attr('alignment-baseline', 'middle');


                    lev.append("image")
                      .attr("class","level")
                      .attr("xlink:href",function(d){
                        if((d.likes.length+d.replies.length)>=6&&(d.likes.length+d.replies.length)<20){
                          return "gifs/p1.gif";
                        }else if((d.likes.length+d.replies.length)>=26&&(d.likes.length+d.replies.length)<36){
                          return "gifs/c1.gif";
                        }else if((d.likes.length+d.replies.length)>=38&&(d.likes.length+d.replies.length)<45){
                          return "gifs/c2.gif";
                        }
                      })
                      .attr("x", function(d,i){
                        if((i+1)<=6){
                          if((i+1)%3==0){
                            return 1194-300;
                          }else if((i+1)==4||(i+1)==5){
                            return 1194+300;
                          }else{
                            return 1194;
                          }
                        }else if( (i+1)>6&&(i+1)<=12){
                          return 694 + 200*(i-6);
                        }else if((i+1)>12&&(i+1)<=18){
                          return 694 + 200*(i-12);
                        }else if((i+1)==19||(i+1)==21){
                          return 644;
                        }else if((i+1)==20||(i+1)==22){
                          return 1744;
                        }else if((i+1)>22&&(i+1)<=32){
                          return 294 + 200*(i-22);
                        }else if((i+1)>32&&(i+1)<=42){
                          return 294 + 200*(i-32);
                        }
                      })
                      .attr("y", function(d,i){
           if((i+1)<=6){
             if((i+1)%2==1||(i+1)==1){
               return 564+50;
             }else{
               return 684+120+50;
             }
           }else if((i+1)>6&&(i+1)<=18){
             if((i+1)<13){
               return 644-250+50;
             }else{
               return 644+350+50;
             }
           }
           else if((i+1)==19||(i+1)==20){
             return 644+50;
           }
           else if((i+1)==21||(i+1)==22){
             return 644+150+50;
           }
           else if((i+1)>22&&(i+1)<=32){
             return 314-80+50;
           }else if((i+1)>32&&(i+1)<=42){
               return 1064+80+50;
           }else if((i+1)>42&&(i+1)<=46){
               return 114+50;
           }else if((i+1)>46&&(i+1)<=50){
               return 1264+50;
           }
         })
                          .attr("width",100)
                          .attr("height",100)
                        ;




                      r1
                          .append("image")
                          .attr("class","robot")
                          .attr("xlink:href", function(d){
                              if(d.likes.length>0){
                              return "gifs/robdrop.gif";
                            }else{
                              return "gifs/robmove.gif"
                            }
                          })
                          .attr("x", function(d,i){
                            if(d.likes.length>0){
                              if((i+1)<=6){
                                if((i+1)%3==0){
                                  return 894-20;
                                }else if((i+1)==4||(i+1)==5){
                                    return 1494-20;
                                }else{
                                return 1194-20;
                              }
                              }else if( (i+1)>6&&(i+1)<=12){
                                return 694-20 + 200*(i-6);
                              }else if((i+1)>12&&(i+1)<=18){
                                return 694-20 + 200*(i-12);
                              }else if((i+1)==19||(i+1)==21){
                                return 694-20;
                              }else if((i+1)==20||(i+1)==22){
                              return 1694-20;
                              }else if((i+1)>22&&(i+1)<=32){
                                return 394-20 + 200*(i-22);
                              }else if((i+1)>32&&(i+1)<=42){
                                return 394-20 + 200*(i-22);
                              }
                            }else{
                              return 200;
                            }
                          })
                          .attr("y", function(d,i){
                            if(d.likes.length>0){
                              if((i+1)<=6){
                                if((i+1)%2==1||(i+1)==1){
                                    return 594-80;
                                }else{
                                  return 724+80;
                                }
                              }else if((i+1)>6&&(i+1)<=18){
                                if((i+1)<13){
                                  return 584-170-80;
                                }else{
                                  return 584+270+80;
                                }
                              }
                              else if((i+1)==19||(i+1)==20){
                              return 584+30;
                              }
                              else if((i+1)==21||(i+1)==22){
                                return 584+230;
                              }
                              else if((i+1)>22&&(i+1)<=32){
                                return 214-80;
                              }else if((i+1)>32&&(i+1)<=42){
                                  return 1214+80;
                              }else if((i+1)>42&&(i+1)<=46){
                                    return 124;
                              }else if((i+1)>46&&(i+1)<=50){
                                    return 1304;
                              }
                            }else{
                              return 200;
                            }
                          })
                          .attr("width",sizeL)
                          .attr("height",sizeL)
                          .attr("opacity",1)
                          .transition()
                          .duration(1500)
                          .attr("opacity",opacity1)
                          ;

                    r2
                        .append("image")
                        .attr("class","robotR")
                        .attr("xlink:href", function(d){
                          //console.log(d.replies.length);
                          if(d.replies.length>0){
                            return "gifs/rb.gif";
                          }else{
                            return "gifs/rbm.gif"
                          }
                        })
                        .attr("x", function(d,i){
                          if(d.replies.length>0){
                            if((i+1)<=6){
                              if((i+1)%3==0){
                                return 894+50;
                              }else if((i+1)==4||(i+1)==5){
                                return 1494+50;
                              }else{
                                return 1194+50;
                              }
                            }else if( (i+1)>6&&(i+1)<=12){
                              return 694+50 + 200*(i-6);
                            }else if((i+1)>12&&(i+1)<=18){
                              return 694+50 + 200*(i-12);
                            }else if((i+1)==19||(i+1)==21){
                              return 694+50;
                            }else if((i+1)==20||(i+1)==22){
                              return 1694+50;
                            }else if((i+1)>22&&(i+1)<=32){
                              return 394+50 + 200*(i-22);
                            }else if((i+1)>32&&(i+1)<=42){
                              return 394+50 + 200*(i-32);
                            }
                          }
                          else{
                            return 350;
                          }
                        })
                        .attr("y", function(d,i){
                          if(d.likes.length>0){
                            if((i+1)<=6){
                              if((i+1)%2==1||(i+1)==1){
                                  return 594-80;
                              }else{
                                return 724+80;
                              }
                            }else if((i+1)>6&&(i+1)<=18){
                              if((i+1)<13){
                                return 584-170-80;
                              }else{
                                return 584+270+80;
                              }
                            }
                            else if((i+1)==19||(i+1)==20){
                            return 584+30;
                            }
                            else if((i+1)==21||(i+1)==22){
                              return 584+230;
                            }
                            else if((i+1)>22&&(i+1)<=32){
                              return 214-80;
                            }else if((i+1)>32&&(i+1)<=42){
                                return 1214+80;
                            }else if((i+1)>42&&(i+1)<=46){
                                  return 124;
                            }else if((i+1)>46&&(i+1)<=50){
                                  return 1304;
                            }
                          }else{
                            return 200;
                          }

                        })
                        .attr("width",sizeR)
                        .attr("height",sizeR)
                        .attr("opacity",1)
                        .transition()
                        .duration(1500)
                        .attr("opacity",opacity2)

                                                  ;


            //  console.log("enter",enteringElements);



          ///////////////////////////
          //     UPDATE!!!!!!      //
          ///////////////////////////

                    for(i=1;i<data.length;i++){
                      var testData = !!document.getElementById(i);
                    //  console.log(testData)
                    }
                      if(testData==true){


          update
          .attr("xlink:href",function(d){
if((d.likes.length+d.replies.length)>=0&&(d.likes.length+d.replies.length)<20){
  return "gifs/h1_2.gif";
}else if((d.likes.length+d.replies.length)>=20&&(d.likes.length+d.replies.length)<35){
  return "gifs/h2.gif";
}else if((d.likes.length+d.replies.length)>=36&&(d.likes.length+d.replies.length)<45){
  return "gifs/h3.gif";
}else if((d.likes.length+d.replies.length)>45){
  return "gifs/h4.gif";
}
})
          .attr("x", function(d,i){
if((i+1)<=6){
 if((i+1)%3==0){
   return 1194-300;
 }else if((i+1)==4||(i+1)==5){
   return 1194+300;
 }else{
   return 1194;
}
}else if( (i+1)>6&&(i+1)<=12){
 return 694 + 200*(i-6);
}else if((i+1)>12&&(i+1)<=18){
 return 694 + 200*(i-12);
}else if((i+1)==19||(i+1)==21){
 return 644;
}else if((i+1)==20||(i+1)==22){
 return 1744;
}else if((i+1)>22&&(i+1)<=32){
 return 294 + 200*(i-22);
}else if((i+1)>32&&(i+1)<=42){
 return 294 + 200*(i-32);
}
})
          .attr("y", function(d,i){
if((i+1)<=6){
 if((i+1)%2==1||(i+1)==1){
   return 564;
 }else{
   return 684+120;
 }
}else if((i+1)>6&&(i+1)<=18){
  if((i+1)<13){
    return 644-250;
  }else{
    return 644+350;
  }
}
else if((i+1)==19||(i+1)==20){
  return 644;
}
else if((i+1)==21||(i+1)==22){
  return 644+150;
}
else if((i+1)>22&&(i+1)<=32){
  return 314-80;
}else if((i+1)>32&&(i+1)<=42){
    return 1064+80;
}else if((i+1)>42&&(i+1)<=46){
    return 114;
}else if((i+1)>46&&(i+1)<=50){
    return 1264;
}
})
          .attr("width", size)
          .attr("height", size)
          ;
          update.text(function(d){return d.likes.length})
            .style("font-size", function(d){return d.likes.length*20} )
          ;

          userUp.attr("x", function(d,i){
             if((d.likes.length+d.replies.length)>=0&&(d.likes.length+d.replies.length)<20){
               if((i+1)<=6){
                 if((i+1)%3==0){
                   return 1094-200+130;
                 }else if((i+1)==4||(i+1)==5){
                   return 1094+400+130;
                 }else{
                   return 1094+220;
               }
             }else if( (i+1)>6&&(i+1)<=12){
                 return 594 + 200*((i+1)-7)+220;
               }else if((i+1)>12&&(i+1)<=18){
                 return 594 + 200*((i+1)-13)+220;
               }else if((i+1)==19||(i+1)==21){
                 return 754;
               }else if((i+1)==20||(i+1)==22){
                 return 1854;
               }else if((i+1)>22&&(i+1)<=32){
                 return 414 + 200*((i+1)-23);
               }else if((i+1)>32&&(i+1)<=42){
                 return 414 + 200*((i+1)-33);
               }
             }else if((d.likes.length+d.replies.length)>=21&&(d.likes.length+d.replies.length)<35){
               if((i+1)<=6){
                 if((i+1)%3==0){
                   return 1094-200+130;
                 }else if((i+1)==4||(i+1)==5){
                   return 1094+400+130;
                 }else{
                   return 1094+220;
               }
             }else if( (i+1)>6&&(i+1)<=12){
                 return 594 + 200*((i+1)-7)+220;
               }else if((i+1)>12&&(i+1)<=18){
                 return 594 + 200*((i+1)-13)+220;
               }else if((i+1)==19||(i+1)==21){
                 return 754;
               }else if((i+1)==20||(i+1)==22){
                 return 1854;
               }else if((i+1)>22&&(i+1)<=32){
                 return 414 + 200*((i+1)-23);
               }else if((i+1)>32&&(i+1)<=42){
                 return 414 + 200*((i+1)-33);
               }
             }else if((d.likes.length+d.replies.length)>=36&&(d.likes.length+d.replies.length)<45){
               if((i+1)<=6){
                 if((i+1)%3==0){
                   return 1094-200+130-100;
                 }else if((i+1)==4||(i+1)==5){
                   return 1094+400+130-100;
                 }else{
                   return 1094+220-100;
               }
             }else if( (i+1)>6&&(i+1)<=12){
                 return 594 + 200*((i+1)-7)+220-100;
               }else if((i+1)>12&&(i+1)<=18){
                 return 594 + 200*((i+1)-13)+220-100;
               }else if((i+1)==19||(i+1)==21){
                 return 754-100;
               }else if((i+1)==20||(i+1)==22){
                 return 1854-100;
               }else if((i+1)>22&&(i+1)<=32){
                 return 414-100 + 200*((i+1)-23);
               }else if((i+1)>32&&(i+1)<=42){
                 return 414-100 + 200*((i+1)-33);
               }
             }else if((d.likes.length+d.replies.length)>45){
               if((i+1)<=6){
                 if((i+1)%3==0){
                   return 1094-200+40;
                 }else if((i+1)==4||(i+1)==5){
                   return 1094+400+40;
                 }else{
                   return 1094+130;
               }
             }else if( (i+1)>6&&(i+1)<=12){
                 return 594 + 200*((i+1)-7)+220-90;
               }else if((i+1)>12&&(i+1)<=18){
                 return 594 + 200*((i+1)-13)+220-90;
               }else if((i+1)==19||(i+1)==21){
                 return 754-90;
               }else if((i+1)==20||(i+1)==22){
                 return 1854-90;
               }else if((i+1)>22&&(i+1)<=32){
                 return 414 + 200*((i+1)-23)-90;
               }else if((i+1)>32&&(i+1)<=42){
                 return 414 + 200*((i+1)-33)-90;
               }

             }

           })
           .attr("y",function(d,i){
            if((d.likes.length+d.replies.length)>=0&&(d.likes.length+d.replies.length)<20){
              if((i+1)<=6){
              if((i+1)%2==1||(i+1)==1){
                return 604;
              }else{
              return 764+80;
              }
            }else if( (i+1)>6&&(i+1)<=18){
              if((i+1)<13){
              return 684-250;
              }else{
              return 684+350;
              }
            }else if((i+1)==19||(i+1)==20){
              return 684;
              }
              else if((i+1)==21||(i+1)==22){
              return 834;
              }
              else if((i+1)>22&&(i+1)<=32){
              return 359-80;
            }else if((i+1)>32&&(i+1)<=42){
                return 1114+80;
              }else if((i+1)>42&&(i+1)<=46){
                    return 154;
                }else if((i+1)>46&&(i+1)<=50){
                    return 1304;
                }
           }else if((d.likes.length+d.replies.length)>=21&&(d.likes.length+d.replies.length)<35){
             if((i+1)<=6){
             if((i+1)%2==1||(i+1)==1){
               return 684-100;
             }else{
             return 764-20+80;
             }
           }else if( (i+1)>6&&(i+1)<=18){
             if((i+1)<13){
               return 684-170-20-80;
             }else{
             return 684+270-20+80;
             }
           }else if((i+1)==19||(i+1)==20){
             return 694-20;
             }
             else if((i+1)==21||(i+1)==22){
             return 844-20;
             }
             else if((i+1)>22&&(i+1)<=32){
             return 359-20-80;
           }else if((i+1)>32&&(i+1)<=42){
               return 1114-2+80;
             }else if((i+1)>42&&(i+1)<=46){
               return 154;
             }else if((i+1)>46&&(i+1)<=50){
               return 1304;
             }
           }else if((d.likes.length+d.replies.length)>=35&&(d.likes.length+d.replies.length)<45){
             if((i+1)<=6){
             if((i+1)%2==1||(i+1)==1){
               return 684-70;
             }else{
             return 764+70;
             }
           }else if( (i+1)>6&&(i+1)<=18){
             if((i+1)<13){
             return 684-170-70;
             }else{
             return 684+270+70;
             }
           }else if((i+1)==19||(i+1)==20){
             return 694;
             }
             else if((i+1)==21||(i+1)==22){
             return 844;
             }
             else if((i+1)>22&&(i+1)<=32){
             return 359-70;
           }else if((i+1)>32&&(i+1)<=42){
               return 1114+70;
             }else if((i+1)>42&&(i+1)<=46){
               return 154;
             }else if((i+1)>46&&(i+1)<=50){
               return 1304;
             }
           }else if((d.likes.length+d.replies.length)>=45){
             if((i+1)<=6){
             if((i+1)%2==1||(i+1)==1){
               return 684-80;
             }else{
             return 764+80;
             }
           }else if( (i+1)>6&&(i+1)<=18){
             if((i+1)<13){
             return 684-170-80;
             }else{
             return 684+270+80;
             }
           }else if((i+1)==19||(i+1)==20){
             return 694;
             }
             else if((i+1)==21||(i+1)==22){
             return 844;
             }
             else if((i+1)>22&&(i+1)<=32){
             return 359-80;
           }else if((i+1)>32&&(i+1)<=42){
               return 1114+80;
             }else if((i+1)>42&&(i+1)<=46){
               return 154;
             }else if((i+1)>46&&(i+1)<=50){
               return 1304;
             }
           }
           })
          .text(function(d){
              let m = d.text;
            if((d.likes.length+d.replies.length)>=0&&(d.likes.length+d.replies.length)<20){
            let n = m.substring(0,6);return n;
            }else if((d.likes.length+d.replies.length)>=21&&(d.likes.length+d.replies.length)<35){
            let n = m.substring(0,10);return n;
            }else if((d.likes.length+d.replies.length)>=36&&(d.likes.length+d.replies.length)<45){
            let n = m.substring(0,28);return n;
          }else if((d.likes.length+d.replies.length)>45){
              let n = m.substring(0,35);return n;
            }
          })

              robot
                .attr("xlink:href", function(d){
                    if(d.likes.length>0){
                    return "gifs/robdrop.gif";
                  }else{
                    return "gifs/robmove.gif"
                  }
                })
                .attr("x", function(d,i){
                  if(d.likes.length>0){
                    if((i+1)<=6){
                      if((i+1)%3==0){
                        return 894-20;
                      }else if((i+1)==4||(i+1)==5){
                          return 1494-20;
                      }else{
                      return 1194-20;
                    }
                    }else if( (i+1)>6&&(i+1)<=12){
                      return 694-20 + 200*(i-6);
                    }else if((i+1)>12&&(i+1)<=18){
                      return 694-20 + 200*(i-12);
                    }else if((i+1)==19||(i+1)==21){
                      return 694-20;
                    }else if((i+1)==20||(i+1)==22){
                    return 1694-20;
                    }else if((i+1)>22&&(i+1)<=32){
                      return 394-20 + 200*(i-22);
                    }else if((i+1)>32&&(i+1)<=42){
                      return 394-20 + 200*(i-22);
                    }
                  }else{
                    return 200;
                  }
                })
                .attr("y", function(d,i){
                  if(d.likes.length>0){
                    if((i+1)<=6){
                      if((i+1)%2==1||(i+1)==1){
                          return 594-80;
                      }else{
                        return 724+80;
                      }
                    }else if((i+1)>6&&(i+1)<=18){
                      if((i+1)<13){
                        return 584-170-80;
                      }else{
                        return 584+270+80;
                      }
                    }
                    else if((i+1)==19||(i+1)==20){
                    return 584+30;
                    }
                    else if((i+1)==21||(i+1)==22){
                      return 584+230;
                    }
                    else if((i+1)>22&&(i+1)<=32){
                      return 214-80;
                    }else if((i+1)>32&&(i+1)<=42){
                        return 1214+80;
                    }else if((i+1)>42&&(i+1)<=46){
                          return 124;
                    }else if((i+1)>46&&(i+1)<=50){
                          return 1304;
                    }
                  }else{
                    return 200;
                  }
                })
                .attr("width",sizeL)
                .attr("height",sizeL)
                // .attr("opacity",1)
                // .transition()
                // .duration(2000)
                .attr("opacity",opacity1)

          ;

          robotR
              .attr("xlink:href", function(d){
              //  console.log(d.replies.length);
                if(d.replies.length>0){
                  return "gifs/rb.gif";
                }else{
                  return "gifs/rbm.gif"
                }
              })
              .attr("x", function(d,i){
                if(d.replies.length>0){
                  if((i+1)<=6){
                    if((i+1)%3==0){
                      return 894+50;
                    }else if((i+1)==4||(i+1)==5){
                      return 1494+50;
                    }else{
                      return 1194+50;
                    }
                  }else if( (i+1)>6&&(i+1)<=12){
                    return 694+50 + 200*(i-6);
                  }else if((i+1)>12&&(i+1)<=18){
                    return 694+50 + 200*(i-12);
                  }else if((i+1)==19||(i+1)==21){
                    return 694+50;
                  }else if((i+1)==20||(i+1)==22){
                    return 1694+50;
                  }else if((i+1)>22&&(i+1)<=32){
                    return 394+50 + 200*(i-22);
                  }else if((i+1)>32&&(i+1)<=42){
                    return 394+50 + 200*(i-32);
                  }
                }
                else{
                  return 350;
                }
              })
              .attr("y", function(d,i){
                if(d.likes.length>0){
                  if((i+1)<=6){
                    if((i+1)%2==1||(i+1)==1){
                        return 594-80;
                    }else{
                      return 724+80;
                    }
                  }else if((i+1)>6&&(i+1)<=18){
                    if((i+1)<13){
                      return 584-170-80;
                    }else{
                      return 584+270+80;
                    }
                  }
                  else if((i+1)==19||(i+1)==20){
                  return 584+30;
                  }
                  else if((i+1)==21||(i+1)==22){
                    return 584+230;
                  }
                  else if((i+1)>22&&(i+1)<=32){
                    return 214-80;
                  }else if((i+1)>32&&(i+1)<=42){
                      return 1214+80;
                  }else if((i+1)>42&&(i+1)<=46){
                        return 124;
                  }else if((i+1)>46&&(i+1)<=50){
                        return 1304;
                  }
                }else{
                  return 200;
                }
              })
              .attr("width",sizeR)
              .attr("height",sizeR)
              // .attr("opacity",1)
              // .transition()
              // .duration(2000)
              .attr("opacity",opacity2)
            ;

              level
                .attr("xlink:href",function(d){
                  if((d.likes.length+d.replies.length)>=6&&(d.likes.length+d.replies.length)<20){
                    return "gifs/p1.gif";
                  }else if((d.likes.length+d.replies.length)>=26&&(d.likes.length+d.replies.length)<36){
                    return "gifs/c1.gif";
                  }else if((d.likes.length+d.replies.length)>=38&&(d.likes.length+d.replies.length)<45){
                    return "gifs/c2.gif";
                  }
                })
                .attr("x", function(d,i){
                  if((i+1)<=6){
                    if((i+1)%3==0){
                      return 1194-300;
                    }else if((i+1)==4||(i+1)==5){
                      return 1194+300;
                    }else{
                      return 1194;
                    }
                  }else if( (i+1)>6&&(i+1)<=12){
                    return 694 + 200*(i-6);
                  }else if((i+1)>12&&(i+1)<=18){
                    return 694 + 200*(i-12);
                  }else if((i+1)==19||(i+1)==21){
                    return 644;
                  }else if((i+1)==20||(i+1)==22){
                    return 1744;
                  }else if((i+1)>22&&(i+1)<=32){
                    return 294 + 200*(i-22);
                  }else if((i+1)>32&&(i+1)<=42){
                    return 294 + 200*(i-32);
                  }
                })
                .attr("y", function(d,i){
     if((i+1)<=6){
       if((i+1)%2==1||(i+1)==1){
         return 564+50;
       }else{
         return 684+120+50;
       }
     }else if((i+1)>6&&(i+1)<=18){
       if((i+1)<13){
         return 644-250+50;
       }else{
         return 644+350+50;
       }
     }
     else if((i+1)==19||(i+1)==20){
       return 644+50;
     }
     else if((i+1)==21||(i+1)==22){
       return 644+150+50;
     }
     else if((i+1)>22&&(i+1)<=32){
       return 314-80+50;
     }else if((i+1)>32&&(i+1)<=42){
         return 1064+80+50;
     }else if((i+1)>42&&(i+1)<=46){
         return 114+50;
     }else if((i+1)>46&&(i+1)<=50){
         return 1264+50;
     }
   })
                    .attr("width",100)
                    .attr("height",100)
                  ;




        //  console.log(graphGroupI);
      }else{



        enteringElements
           .append("svg:image")
           .attr("class","houses")
           .attr("id",function(d,i){
             return i+1;
           })
           .attr("xlink:href","gifs/building.gif")
           .attr("x", 200)
           .attr("y", 200)
           .attr("width", 200)
           .attr("height", 200)
           .transition()
          .delay(2000)
          .attr("xlink:href",'gifs/h1_2.gif')
          .attr("x", function(d,i){
            return 100+(i+1)*100
          })
          .attr("y", function(d,i){
            return 800;
          })
          .attr("width",  function(d){
            return 150+d.replies.length*40;
          })
          .attr("height", function(d){
            return 150+d.replies.length*40;

        });
        enteringElements.append("text").attr("class","housees")
          .text(function(d){return d.likes.length})
          .style("font-size", function(d){return d.likes.length*20} )      //
          .attr("x", function(d,i){
            return 100+i*100
          })
          .attr("y", function(d,i){
            return 800;
          });

          r1
              .append("image")
              .attr("class","robot")
              .attr("xlink:href", function(d){
                  if(d.likes.length>0){
                  return "gifs/robdrop.gif";
                }else{
                  return "gifs/robmove.gif"
                }
              })
              .attr("x", function(d,i){
                if(d.likes.length>0){
                  if((i+1)<=6){
                    if((i+1)%3==0){
                      return 894-20;
                    }else if((i+1)==4||(i+1)==5){
                        return 1494-20;
                    }else{
                    return 1194-20;
                  }
                  }else if( (i+1)>6&&(i+1)<=12){
                    return 694-20 + 200*(i-6);
                  }else if((i+1)>12&&(i+1)<=18){
                    return 694-20 + 200*(i-12);
                  }else if((i+1)==19||(i+1)==21){
                    return 694-20;
                  }else if((i+1)==20||(i+1)==22){
                  return 1694-20;
                  }else if((i+1)>22&&(i+1)<=32){
                    return 394-20 + 200*(i-22);
                  }else if((i+1)>32&&(i+1)<=42){
                    return 394-20 + 200*(i-22);
                  }
                }else{
                  return 200;
                }
              })
              .attr("y", function(d,i){
                if(d.likes.length>0){
                  if((i+1)<=6){
                    if((i+1)%2==1||(i+1)==1){
                        return 594;
                    }else{
                      return 724;
                    }
                  }else if((i+1)>6&&(i+1)<=18){
                    if((i+1)<13){
                      return 584-170;
                    }else{
                      return 584+270;
                    }
                  }
                  else if((i+1)==19||(i+1)==20){
                  return 584+30;
                  }
                  else if((i+1)==21||(i+1)==22){
                    return 584+230;
                  }
                  else if((i+1)>22&&(i+1)<=32){
                    return 214;
                  }else if((i+1)>32&&(i+1)<=42){
                      return 1214;
                  }else if((i+1)>42&&(i+1)<=46){
                        return 214+(i-41)*200;
                  }else if((i+1)>46&&(i+1)<=50){
                        return 214+(i-45)*200;
                  }
                }else{
                  return 200;
                }
              })
              .attr("width",sizeL)
              .attr("height",sizeL)
              .attr("opacity",100)
              // .transition()
              // .duration(1500)
              // .attr("opacity",0)
              ;

        r2
            .append("image")
            .attr("class","robotR")
            .attr("xlink:href", function(d){
              console.log(d.replies.length);
              if(d.replies.length>0){
                return "gifs/rb.gif";
              }else{
                return "gifs/rbm.gif"
              }
            })
            .attr("x", function(d,i){
              if(d.replies.length>0){
                if((i+1)<=6){
                  if((i+1)%3==0){
                    return 894+50;
                  }else if((i+1)==4||(i+1)==5){
                    return 1494+50;
                  }else{
                    return 1194+50;
                  }
                }else if( (i+1)>6&&(i+1)<=12){
                  return 694+50 + 200*(i-6);
                }else if((i+1)>12&&(i+1)<=18){
                  return 694+50 + 200*(i-12);
                }else if((i+1)==19||(i+1)==21){
                  return 694+50;
                }else if((i+1)==20||(i+1)==22){
                  return 1694+50;
                }else if((i+1)>22&&(i+1)<=32){
                  return 394+50 + 200*(i-22);
                }else if((i+1)>32&&(i+1)<=42){
                  return 394+50 + 200*(i-32);
                }
              }
              else{
                return 350;
              }
            })
            .attr("y", function(d,i){
              if(d.replies.length>0){
                if((i+1)<=6){
                  if((i+1)%2==1||(i+1)==1){
                    return 594;
                  }else{
                    return 724;
                  }
                }else if((i+1)>6&&(i+1)<=18){
                  if((i+1)<13){
                    return 584-170;
                  }else{
                    return 584+270;
                  }
                }
                else if((i+1)==19||(i+1)==20){
                  return 584+30;
                }
                else if((i+1)==21||(i+1)==22){
                  return 584+230;
                }
                else if((i+1)>22&&(i+1)<=32){
                  return 214;
                }else if((i+1)>32&&(i+1)<=42){
                  return 1214;
                }else if((i+1)>42&&(i+1)<=46){
                  return 214+(i-41)*200;
                }else if((i+1)>46&&(i+1)<=50){
                  return 214+(i-45)*200;
                }

              }else{
                return 200;
              }

            })
            .attr("width",sizeR)
            .attr("height",sizeR)
            .attr("opacity",100)
            .transition()
            .duration(1500)
            .attr("opacity",0)

                                      ;

                                      console.log("xiang")

       console.log("enter222",enteringElements);
       console.log(houses);
      }
           });

    }




function refresh(){
console.log("hiii")
window.location.reload();
}
//getData();
setInterval(getData,1000);
//setInterval(refresh,50000);
