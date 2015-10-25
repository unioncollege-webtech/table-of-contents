// Find the heading elements
var headings = document.querySelectorAll("h2, h3, h4, h5, h6");

// Create an ordered list
var tocdata = document.createElement('ol');

// Loop through the headings
for(var i = 0; i < headings.length; i++){
  // Build the `a` and `li` elements
  heading = headings[i];
  var a = document.createElement('a');
  a.href = '#' + heading.id
  a.rel = 'internal';
  a.textContent = heading.textContent;

  var li = document.createElement('li');
  li.appendChild(a);
  tocdata.appendChild(li);
}

// Find the Table of Contents placeholder element
var toc = document.querySelector('#table-of-contents');

// Add the `tocList` to the `toc` placeholder element
toc.appendChild(tocdata);

// Add a “Table of Contents” heading
var tocHeading = document.createElement('h2');
tocHeading.textContent = 'Table of Contents';
toc.insertBefore(tocHeading, tocdata);

// Make it collapsible
tocHeading.addEventListener('click', function(){
  tocdata.classList.toggle('collapsed');
}, false);

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
