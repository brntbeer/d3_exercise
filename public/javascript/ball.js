var data = [1]

var rad = Math.random(20)


var h = innerHeight
var vis = d3.select("body")
    .append("svg:svg")
    .attr("width", screen.width-400)
    .attr("height",innerHeight)

var r = d3.scale.linear().domain([0,1]).range([50,100]),
    c = d3.scale.linear().domain([0,1]).range(["hsl(250, 50%, 50%)", "hsl(350, 100%, 50%)"]).interpolate(d3.interpolateHsl)

d3.select("svg")
      .append("svg:circle")
      .attr("cx", function(d) { return (screen.width-400)/2 })
      .attr("cy", function(d) { return innerHeight/2 })
      .attr("stroke-width", "none")
      .attr("fill", function() { return c(Math.random()) })
      .attr("fill-opacity", .5)
      .attr("r", function() { return r(Math.random()) })
      .on("mouseover", function(){
        d3.select(this).transition()
        .attr("r", function() { return r(Math.random()) })
        .delay(0)
        .duration(2000)
        .ease("elastic", 2, .3)
      })

