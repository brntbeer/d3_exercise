var dataset = [ [5,20], [480, 90], [250,50], [100,33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
              ];

var w = 500;
var h = 100;

var xScale = d3.scale.linear()
                     .domain([0, d3.max(dataset, function(d) { return d[0]; })])
                     .range([0, w])

var yScale = d3.scale.linear()
                     .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                     .range([h, 0]);

var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)

svg.selectAll("circles")
   .data(dataset)
   .enter()
   .append("svg:circle")
   .attr("cx", function(d) { return xScale(d[0]); })
   .attr("cy", function(d) { return yScale(d[1]); })
   .attr("r", function(d) { return Math.sqrt(d[0] + d[1]);});

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .attr("x", function(d) { return xScale(d[0]); })
   .attr("y", function(d) { return yScale(d[1]); })
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "red")
   .text(String)
