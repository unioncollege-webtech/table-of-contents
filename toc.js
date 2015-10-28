// toc.js


var headings = document.querySelectorAll("h2, h3, h4, h5, h6");


var tocList = document.createElement('ol');


for (var i = 0; i < headings.length; i++) {
    var heading = headings[i];
    
    var ul = document.createElement('ul');
    
    if (headings[i + 1] === undefined) {
        break;
    }

    if (heading.tagName === 'H2' && headings[i + 1].tagName === 'H3') {
        var h = i + 1;
        var a = document.createElement('a');
            a.href = "#" + headings[i].id;
            a.rel = "internal";
            a.textContent = headings[i].textContent;
        var li = document.createElement('li');
        li.appendChild(a);
        
        while (headings[h].tagName === 'H3') {
            var a = document.createElement('a');
            a.href = "#" + headings[h].id;
            a.rel = "internal";
            a.textContent = headings[h].textContent;
            var li2 = document.createElement('li');
            li2.appendChild(a);
            ul.appendChild(li2);
            h++;
        }
        li.appendChild(ul);
        tocList.appendChild(li);
        i = h;
    } else {
        var a = document.createElement('a');
        a.href = "#" + heading.id;
        a.rel = "internal";
        a.textContent = heading.textContent;
        
        var li = document.createElement('li');
        li.appendChild(a);
        tocList.appendChild(li);
    }
}

var toc = document.querySelector("#table-of-contents");

toc.appendChild(tocList);

var tocHeading = document.createElement('h2');
tocHeading.textContent = 'Table of Contents';

toc.insertBefore(tocHeading, tocList);

tocHeading.addEventListener('click', function() {
    tocList.classList.toggle('collapsed');
    console.log(tocList);
}, false);


