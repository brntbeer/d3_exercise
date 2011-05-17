var t = 1297110663, //time since epoch
    v = 70, //start values (subscribers)
    data = d3.range(33).map(next); //starting dataset

var w = 20,
    h = 80;

var x = d3.scale.linear()
  .domain([0,1])
  .range([0,w]);

var y = d3.scale.linear()
    .domain([0,100])
    .rangeRound([0,h]);

function next() {
  return {
    time: ++t,
    value: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
  };
}

setInterval(function(){
  data.shift();
  data.push(next());
  redraw();
},1500);

var chart = d3.select("body")
  .append("svg:svg")
    .attr("class","chart")
    .attr("width", w * data.length-1)
    .attr("height", h);

chart.selectAll("rect")
    .data(data)
  .enter().append("svg:rect")
    .attr("x", function(d,i) { return x(i) - .5; })
    .attr("y", function(d) { return h - y(d.value) - .5; })
    .attr("width", w)
    .attr("height", function(d) {return y(d.value); });

chart.append("svg:line")
  .attr("x1", 0)
  .attr("x2", w*data.length)
  .attr("y1", h - .5)
  .attr("y2", h - .5)
  .attr("stroke", "#000");


function redraw() {
  var rect =  chart.selectAll("rect")
      .data(data, function(d) { return d.time; });
      
  rect.enter().insert("svg:rect", "line")
      .attr("x", function(d,i) { return x(i + 1) - .5; })
      .attr("y", function(d) { return h - y(d.value) - .5; })
      .attr("width", w)
      .attr("height", function(d) {return  y(d.value); })
    .transition()
      .duration(1000)
      .attr("x", function(d,i) { return x(i) - .5; });
  
  rect.transition()
      .duration(1000)
      .attr("x", function(d,i) { return x(i) - .5; });

  rect.exit().transition()
    .duration(1000)
    .attr("x", function(d,i) { return x(i-1) - .5; })
    .remove();
}
