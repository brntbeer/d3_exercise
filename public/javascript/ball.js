var data = [1]

var rad = Math.random(20)


var h = innerHeight
var vis = d3.select("body")
    .append("svg:svg")
    .attr("width", screen.width-400)
    .attr("height",innerHeight)

var r = d3.scale.linear().domain([0,1]).range([50,100]),
    c = d3.scale.linear().domain([0,1]).range(["hsl(250, 50%, 50%)", "hsl(350, 100%, 50%)"]).interpolate(d3.interpolateHsl)


var circle = vis.append("svg:circle")
      .attr("cx", function(d) { return (screen.width-400)/2 })
      .attr("cy", function(d) { return innerHeight/2 })
      .attr("stroke-width", "none")
      .attr("fill", function() { return c(Math.random()) })
      .attr("fill-opacity", .5)
      .attr("r", function() { return r(Math.random()) })
      .on("mouseover", function(){
        reload_ball(this)
      })

function reload_ball(ball) {
  d3.select(ball).transition()
    .attr("r", function() { return r(Math.random()) })
    .delay(0)
    .duration(2000)
    .ease("elastic", 5, .3)
    .each("end", update_text)
}
function update_text() {
  vis.select("text").remove()
  rad = d3.round(circle.attr("r"),2)
  vis.append("text")
    .attr("x", function(d) { return (screen.width-400)/2 - (rad*0.25)  })
    .attr("y", function(d) { return innerHeight/2 })
    .text(rad)
}
