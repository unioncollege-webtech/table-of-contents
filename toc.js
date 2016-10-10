// Find the heading elements
var headings = document.querySelectorAll('h2, h3, h4, h5, h6');
//console.log(headings)

// Create an ordered list
var tocList = document.createElement('ol');
//console.log(tocList)

// Loop through the headings
for(var i = 0; i < headings.length; i++) {
    var heading = headings[i];
    
    //console.log(heading.id);
    //console.log(heading.textContent);
    
    var li = document.createElement('li');
    var a = document.createElement('a');
    
    a.textContent = heading.textContent;
    a.href = '#' + heading.id;
    a.rel = 'internal';
    
    li.appendChild(a);
    
    // console.log(li);
   if (heading.localName == "h2") {
     tocList.appendChild(li);
     var nestTocHead = document.createElement('ol');
     tocList.appendChild(nestTocHead)
   } 
    else {
        nestTocHead.appendChild(li);
    }
}
console.log(tocList)


// Build the `a` and `li` elements


// Find the Table of Contents placeholder element
var toc = document.querySelector('#table-of-contents');
//console.log(toc);

// Add the `tocList` to the `toc` placeholder element
toc.appendChild(tocList);

// Add a “Table of Contents” heading
var tocHeading = document.createElement('h2');
tocHeading.textContent = 'Table of Contents';
//console.log(tocHeading);

toc.insertBefore(tocHeading, tocList);

// Make it collapsible
tocHeading.addEventListener('click', function(){
    tocList.classList.toggle('collapsed');
});

// Celebrate!


// Additional improvements
tocHeading.addEventListener('mouseover',function() {
    tocHeading.title = 'Click to collapse/expand';
});

autoToc();