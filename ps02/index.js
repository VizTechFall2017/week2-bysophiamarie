var svg = d3.select('svg');

for (i = 0; i <3; i++) {
    svg.append("circle")
        .attr("cx", i*150+500)
        .attr("cy", 250)
        .attr("id", "top-"+i)
        .attr("r", 100)
        .attr("fill", "none")
        .attr("stroke-width", "10px")
        .on("mouseover", function(d) { d3.selectAll("circle").attr("stroke-dasharray", 5)})
        .on("mouseout", function(d) {d3.selectAll("circle").attr("stroke-dasharray", 0)})
            ;
}

for (i=0; i <2; i++) {
    svg.append("circle")
        .attr("cx", i*150+575)
        .attr("cy", 375)
        .attr("id", "bottom-"+i)
        .attr("r", 100)
        .attr("fill", "none")
        .attr("stroke-width", "10px")
        .on("mouseover", function(d) { d3.selectAll("circle").attr("stroke-dasharray", 5)})
        .on("mouseout", function(d) {d3.selectAll("circle").attr("stroke-dasharray", 0)});
}
var blue = d3.select("#top-0")
    .attr("stroke", "blue");

var black = d3.select("#top-1")
    .attr("stroke", "black");

var red = d3.select("#top-2")
    .attr("stroke", "red");

var yellow = d3.select("#bottom-0")
    .attr("stroke", "yellow");

var green = d3.select("#bottom-1")
    .attr("stroke", "green");

/* Your code goes here */