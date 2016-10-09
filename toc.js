function autoToc() {
    
    // Find the heading elements
    var headings = document.querySelectorAll("h2, h3, h4, h5, h6");
    var h2headings = document.querySelectorAll("h2");
    //console.log(headings);
    //console.log(h2headings);
    
    // Create an ordered list
    var tocList = document.createElement('ol');
    //console.log(tocList);
    
    // Loop through the headings
    for(var i = 0, len = headings.length; i < len; i++) {
        var heading = headings[i];
        var h2 = (heading.localName == "h2");
    
        //console.log(h2);
        //console.log(heading.id);
        //console.log(heading.textContent);
        
        // Build the `a` and `li` elements
        var li = document.createElement('li');
        var a = document.createElement('a');
        
        // Set the necessary properties on the `a` element
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        a.rel = 'internal';
    
        // Append the `a` element to the `li`
        li.appendChild(a);
    
        // console.log(li);
    
        // Append the `li` to the `tocList` (an `ol` element)
        if (h2) {
            tocList.appendChild(li);
            var h3TocList = document.createElement('ol');
            tocList.appendChild(h3TocList);
            /*for (var k = 0; k < h3TocList.length; k++) {
                h3TocList.pop();
            }*/
        }
        else {
            h3TocList.appendChild(li);
        }
    }
    
    //console.log(tocList);
    
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
    var collapsed = 0;
    tocHeading.addEventListener('click', function(){
        //console.log('Heading clicked!');
        tocList.classList.toggle('collapsed');
        //console.log(tocList);
        collapsed = (collapsed + 1) % 2;
        //console.log(collapsed);
        if (collapsed == 1) {
            tocHeading.textContent = 'Table of Contents';
            clearInterval(colorSize);
            tocHeading.style.fontSize = '1.5em';
            tocHeading.style.color = 'black';
        }
        else {
            colorSize = setInterval(function() {
                if (tocHeading.style.color == 'red') {
                    tocHeading.style.color = 'green';
                }
                else {
                    tocHeading.style.color = 'red';
                }
                var randomNum = Math.random() * 50 + 75;
                tocHeading.style.fontSize = randomNum.toString() + "px";
            }, 1);
            tocHeading.textContent = 'Click here to collapse the Table of ' + 
            'Contents section';
        }
    }, false);
    
    var colorSize;
    
    document.body.addEventListener('mouseover', function() {
        if (collapsed == 0) {
            colorSize = setInterval(function() {
                if (tocHeading.style.color == 'red') {
                    tocHeading.style.color = 'green';
                }
                else {
                    tocHeading.style.color = 'red';
                }
                var randomNum = Math.random() * 50 + 75;
                tocHeading.style.fontSize = randomNum.toString() + "px";
            }, 1);
            tocHeading.textContent = 'Click here to collapse the Table of ' + 
            'Contents section';
        }
    });
    
    document.body.addEventListener('mouseout', function() {
        tocHeading.textContent = 'Table of Contents';
        clearInterval(colorSize);
        tocHeading.style.fontSize = '1.5em';
        tocHeading.style.color = 'black';
    });
    
    // Celebrate!
    
    
    // Additional improvements
}

autoToc();
