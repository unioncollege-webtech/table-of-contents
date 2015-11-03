//
// 1) Auto-generate a Table of Contents
//

// Use document.querySelector all to find all the headings in the article 
// **except** for the h1 (i.e. h2, h3, h4, h5, h6)
var headings = document.querySelectorAll("h2, h3, h4, h5, h6");
// Sanity check: console.log the headings
// console.log(headings);
// Use document.createElement to create a new `ol` element that will hold the
// table of contents list
var tocList = document.createElement('ol');
// Sanity check: console.log the `ol` element
console.log(tocList);
// Loop through the headings using a 'for' loop, and create an ordered list of 
// links to the different sections of the document. The final list of
// links will look like the following:
//
// <ol>
//   <li>
//     <a href="#description" rel="internal">Description</a>
//   </li>
//   <li>
//     <a href="#create-zoo-js-with-the-animals-array" rel="internal">Create zoo.js with the animals array</a>
//   </li>
//   <li>
//     <a href="#sort-and-display-the-animal-gallery" rel="internal">Sort and display the animal gallery</a>
//   </li>
//   <li>
//     <a href="#display-the-featured-animal" rel="internal">Display the featured animal</a>
//   </li>
//   <li>
//     <a href="#map-sort-and-display-animal-ages" rel="internal">Map, sort, and display animal ages</a>
//   </li>
//   <li>
//     <a href="#animals" rel="internal">Animals</a>
//   </li>
//   ...
// </ol>
for(var i=0; i < headings.length; i++){
    var heading = headings[i];
    
    // console.log(heading.id);
    // console.log(heading.textContent);
    
    var a = document.createElement('a');
    a.href = "#" + heading.id;
    a.rel = 'internal';
    a.textContent = heading.textContent;
    // console.log(a);
    
    var li = document.createElement('li');
    li.appendChild(a);
    
    tocList.appendChild(li);
}

// Sanity check: console.log the `ol` containing the table of contents
console.log(tocList);

// Use document.querySelector to find the <aside> element with the id
// "table-of-contents". Store this in a variable called `toc`.
var toc = document.querySelector('#table-of-contents');

// Sanity check: console.log the `toc` variable
console.log(toc);

// Append the `ol` containing the table of contents list to `toc`.
toc.appendChild(tocList);

// Use document.createElement to generate an h2 element with the text 
// "Table of Contents"
var tocHeading = document.createElement('h2');
tocHeading.textContent = 'Table of Contents';
// console.log(tocHeading);

// Use insertBefore to add the heading to `toc` *before* the `ol` containing the
// list of internal links.
toc.insertBefore(tocHeading, tocList);

// Sanity check: console.log `toc`
console.log(toc);


//
// 2) Make it collapsible
//

// use addEventListener to listen for 'click' events on the "Table of Contents"
// h2 element.
tocHeading.addEventListener('click', function(){
    // console.log('Clicked!')
    tocList.classList.toggle('collapsed');
    console.log(tocList);
}, false)
// When the Table of Contents heading is clicked, use .classList.toggle() to add
// or remove the 'collapsed' class name on the `ol` list of links.

// Add a style.css file with a rule to hide (using `display: none;`) elements
// that have the `collapsed` class name.






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
