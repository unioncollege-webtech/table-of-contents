function autoToC() {

  // Find the heading elements
  var headings = document.querySelectorAll("h2, h3, h4, h5, h6");
  var h2headings = document.querySelectorAll("h2");

  // Create an ordered list
  var tocList = document.createElement('ol');

  // Loop through the headings
  for(var i = 0, len = headings.length; i < len; i++) {
    var heading = headings[i];
    var h2 = (heading.localName == "h2");

    // Build the `a` and `li` elements
    var li = document.createElement('li');
    var a = document.createElement('a');

    // Set the necessary properties on the `a` element
    a.href = '#' + heading.id;
    a.textContent = heading.textContent;
    a.rel = 'internal';

    // Append the `a` element to the `li`
    li.appendChild(a);

    // Append the `li` to the `tocList` (an `ol` element)
    if (h2) {
      tocList.appendChild(li);
      var h3TocList = document.createElement('ol');
      tocList.appendChild(h3TocList);
    }
    else {
      h3TocList.appendChild(li);
    }
  }

  // Find the Table of Contents placeholder element
  var toc = document.querySelector('#table-of-contents');

  // Add the `tocList` to the `toc` placeholder element
  toc.appendChild(tocList);

  // Add a “Table of Contents” heading
  var tocHeading = document.createElement('h2');
  tocHeading.textContent = 'Table of Contents ↑';

  toc.insertBefore(tocHeading, tocList);

  // Make it collapsible
  var collapsed = 0;
  tocHeading.addEventListener('click', function(){
    if (tocHeading.textContent == 'Table of Contents ↑') {
      tocHeading.textContent = 'Table of Contents ↓';
    } else {
      tocHeading.textContent = 'Table of Contents ↑';
    }
    tocHeading.classList.toggle('header-collapsed');
    tocList.classList.toggle('collapsed');
    collapsed = (collapsed + 1) % 2;
  });

  // Celebrate!
  console.log('woot');
}

autoToC();
