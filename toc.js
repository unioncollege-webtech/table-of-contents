// toc.js
// Auto-generates a Table of Contents

function autoToC() {
    
  // Use document.querySelector all to find all the headings in the article 
  // **except** for the h1 (i.e. h2, h3, h4, h5, h6)
  var headings = document.querySelectorAll("h2, h3, h4, h5, h6");


  // Use document.createElement to create a new `ol` element that will hold the
  // table of contents list
  var tocList = document.createElement('ol');


  // Loop through the headings using a 'for' loop, and create an ordered list of 
  // links to the different sections of the document.
  for (var i = 0; i < headings.length; i++) {
      var heading = headings[i];
      var ul = document.createElement('ul');

      // Finds h3 element that has an h2 element before it
      if (heading.tagName === 'H3' && headings[i - 1].tagName === 'H2') {
          var h = i;
        
          // adds h3 elements to ul until an h2 element is reached
          while (headings[h].tagName === 'H3') {
              var a = document.createElement('a');
              a.href = "#" + headings[h].id;
              a.rel = "internal";
              a.textContent = headings[h].textContent;
              var li = document.createElement('li');
              li.appendChild(a);
              ul.appendChild(li);
              h++;
          }
          tocList.appendChild(ul);
          i = h - 1;
      }
      else {
          a = document.createElement('a');
          a.href = "#" + heading.id;
          a.rel = "internal";
          a.textContent = heading.textContent;
        
          li = document.createElement('li');
          li.appendChild(a);
          tocList.appendChild(li);
      }
  }


  // Use document.querySelector to find the <aside> element with the id
  // "table-of-contents". Store this in a variable called `toc`.
  var toc = document.querySelector("#table-of-contents");


  // Append the `ol` containing the table of contents list to `toc`.
  toc.appendChild(tocList);

  // Use document.createElement to generate an h2 element with the text 
  // "Table of Contents"
  var tocHeading = document.createElement('h2');
  tocHeading.textContent = 'Table of Contents';


  // Use insertBefore to add the heading to `toc` *before* the `ol` containing the
  // list of internal links.
  toc.insertBefore(tocHeading, tocList);


  // use addEventListener to listen for 'click' events on the "Table of Contents"
  // h2 element.
  tocHeading.addEventListener('click', function() {
      tocHeading.classList.toggle('header-collapsed');
      tocList.classList.toggle('collapsed');
      console.log(tocList);
  }, false);

}

autoToC();