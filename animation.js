jQuery(function() {
    jQuery(".App-logo")();
});
console.log('Greenlight');
var files;
$("#file-input").on("change", function(e) {
    files = this.files;
});
var element = document.createElement("span");

var p = 0;
for (element in element.style)
    p++;

console.log(p);