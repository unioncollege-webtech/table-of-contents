function autoToC() {
// Find the heading elements
var headings = document.querySelectorAll("h2, h3, h4, h5, h6");
var tocList = document.createElement('ol');

for(var i = 0; i < headings.length; i++) {
    var heading = headings[i];
    var heading2 = (heading.localName == "h2");
    var li = document.createElement('li');
    var a = document.createElement('a');
    
    a.textContent = heading.textContent;
    a.href = "#" + heading.id;
    a.rel = 'internal';
    
    li.appendChild(a);


if (heading2) {
tocList.appendChild(li);
var h3TocList = document.createElement('ol');
tocList.appendChild(h3TocList);
}else {
h3TocList.appendChild(li);
}
}


var toc = document.querySelector('#table-of-contents');

toc.appendChild(tocList);

var tocHeading = document.createElement('h2');
tocHeading.textContent = 'Table of Contents';

toc.insertBefore(tocHeading, tocList);

// Make it collapsible
tocHeading.addEventListener('click', function() {
    tocList.classList.toggle('collapsed');
    tocHeading.style.color = 'red';
});
tocHeading.addEventListener("mouseenter", function( event ) {   
    event.target.style.color = "blue";
    event.target.style.cursor = "pointer";
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);


}
autoToC();