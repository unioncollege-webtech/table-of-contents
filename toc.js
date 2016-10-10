function autoToC() {
// Find the heading elements
var headings = document.querySelectorAll("h2, h3, h4, h5, h6");


// Create an ordered list
var tocList = document.createElement('ol');

// Loop through the headings
for(var i = 0; i < headings.length; i++) {
    var heading = headings[i];
    var heading2 = (heading.localName == "h2");

   // Build the `a` and `li` elements 
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


// Find the Table of Contents placeholder element
var toc = document.querySelector('#table-of-contents');

// Add the `tocList` to the `toc` placeholder element
toc.appendChild(tocList);

// Add a “Table of Contents” heading
var tocHeading = document.createElement('h2');
tocHeading.textContent = 'Table of Contents';

toc.insertBefore(tocHeading, tocList);

// Make it collapsible
tocHeading.addEventListener('click', function() {
    tocList.classList.toggle('collapsed');
    tocHeading.style.color = 'red';
});
tocHeading.addEventListener("mouseenter", function( event ) {   
    // highlight the mouseenter target
    event.target.style.color = "blue";
    event.target.style.cursor = "pointer";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false)


// Celebrate!


// Additional improvements
}
autoToC();
//Source Used: https://developer.mozilla.org/en-US/docs/Web/Events/mouseover