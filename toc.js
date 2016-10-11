function autoToc() {// Find the heading elements

var headings = document.querySelectorAll("h2, h3, h4, h5, h6");
console.log(headings);

// Create an ordered list

var tocList = document.createElement('ol');
console.log(tocList);

// Loop through the headings

for (var i = 0; i < headings.length; i++){
        var heading = headings[i];
        var heading2 = (heading.localName == "h2")  

    //console.log(heading.id);
    //console.log(heading.textContent);
    
// Build the `a` and `li` elements

    var li = document.createElement('li');
    var a =document.createElement('a');
    
    //console.log('a');
    //console.log('li'); 
    
    a.textContent = heading.textContent;
    a.href = '#' + heading.id;
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
//console.log(tocList)
    
// Find the Table of Contents placeholder element

    var toc = document.querySelector('#table-of-contents');
    // console.log(toc);

// Add the `tocList` to the `toc` placeholder element
   
    toc.appendChild(tocList);

// Add a “Table of Contents” heading

    var tocHeading = document.createElement('h2');
    tocHeading.textContent = "Table of Contents";
    //console.log(tocHeading);
    
    toc.insertBefore(tocHeading, tocList);

// Make it collapsible

        tocHeading.addEventListener('click', function(){
        tocList.classList.toggle('collapsed');
        tocHeading.style.cursor = "pointer";
            
        });

// Celebrate!


// Additional improvements
    tocHeading.addEventListener('mouseenter', function(event) {
      event.target.style.color = "Green";
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
  
};
autoToc();