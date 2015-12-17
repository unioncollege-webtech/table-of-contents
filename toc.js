function autoTableOfContents() {
    var headings = document.querySelectorAll("h2, h3, h4, h5, h6");
    var tocList = document.createElement('ol');
    
    var currentList = tocList;
    var previousHeadingSize = 0;
    var previousLi;
    for(var i = 0; i < headings.length; i++) {
        var heading = headings[i];
        
        var headingSize = parseInt(heading.nodeName.replace(/^\D+/g, ''));
        if (previousHeadingSize != 0 && previousHeadingSize < headingSize) {
            var newOl = document.createElement('ol');
            previousLi.appendChild(newOl);
            currentList = newOl;
        }
        
        if (previousHeadingSize > headingSize) {
            currentList = tocList;
        }
        
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        a.rel = 'internal';
    
        li.appendChild(a);
        currentList.appendChild(li);
        
        previousLi = li;
        previousHeadingSize = headingSize;
    }
    
    var toc = document.querySelector('#table-of-contents');
    toc.appendChild(tocList);
    
    var tocHeading = document.createElement('h2');
    tocHeading.textContent = 'Table of Contents';
    toc.insertBefore(tocHeading, tocList);
    
    tocHeading.addEventListener('click', function(){
        tocList.classList.toggle('collapsed');
    }, false);
}