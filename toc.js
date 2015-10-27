function buildTableOfContents(){
  // Find the heading elements
  var headings = document.querySelectorAll("h2, h3, h4, h5, h6");
  var ol = document.createElement('ol');

  // Manipulate data
  var list = [];
  var sub = [];
  for(var i = 0; i < headings.length; i++){
    if(headings[i].tagName == 'H2'){
      if(sub.length > 0){
        list.push(sub);
      }
      list.push(headings[i]);
      sub = [];
    } else {
      sub.push(headings[i]);
    }
  }

  // Create heading elements
  for(var j = 0; j < list.length; j++){
    if(list[j].constructor === Array){
      var ol2 = document.createElement('ol');
      for(var k = 0; k < list[j].length; k++){
        ol2.appendChild(buildLi(list[j][k]));
      }
      ol.appendChild(ol2);
    } else {
      ol.appendChild(buildLi(list[j]));
    }
  }

  // Find the Table of Contents placeholder element
  var toc = document.querySelector('#table-of-contents');

  // Add the `tocList` to the `toc` placeholder element
  toc.appendChild(ol);

  // Add a “Table of Contents” heading
  var tocHeading = document.createElement('h2');
  tocHeading.textContent = 'Table of Contents';
  toc.insertBefore(tocHeading, ol);

  // Make it collapsible
  tocHeading.addEventListener('click', function(){
    ol.classList.toggle('collapsed');
    console.log("Toggle!");
  }, false);
}

// Builds li element with a element and content
function buildLi(elem){
  var a = document.createElement('a');
  a.href = '#' + elem.id
  a.rel = 'internal';
  a.textContent = elem.textContent;

  var li = document.createElement('li');
  li.appendChild(a);
  return li;
}

document.body.onload = buildTableOfContents();
// Celebrate!


// Additional improvements


//
// 3) Make the TOC a nested list: (h3s are nested inside h2s)
//

// Update the code generating the table of contents list above to make it a
// nested list like so:
//
// <ol>
//   <li>
//     <a href="#description" rel="internal">Description</a>
//     <ol>
//       <li>
//         <a href="#create-zoo-js-with-the-animals-array" rel="internal">Create zoo.js with the animals array</a>
//       </li>
//       <li>
//         <a href="#sort-and-display-the-animal-gallery" rel="internal">Sort and display the animal gallery</a>
//       </li>
//       <li>
//         <a href="#display-the-featured-animal" rel="internal">Display the featured animal</a>
//       </li>
//       <li>
//         <a href="#map-sort-and-display-animal-ages" rel="internal">Map, sort, and display animal ages</a>
//       </li>
//     </ol>
//   <li>
//     <a href="#animals" rel="internal">Animals</a>
//   </li>
//   ...
// </ol>
