function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let sel = document.querySelectorAll('.ranked-list');
  
  for (let i = 0; i < sel.length; i++) {
    let litems = sel[i].children;
    
    for (let j = 0; j < litems.length; j++) {
      litems[j].innerHTML = parseInt(litems[j].innerHTML) + n;
    }
  } 
}

function deepestChild() {
  // select the element that's a div with the id 'grand-node'
  let sel = document.querySelector('div#grand-node');
  let depth = 0;
  
  while (sel.children !== null) {
    sel = sel.children;
    console.log(sel.children);
    depth++;
  }
  
  
  
  console.log(sel);
}

//console.log(getFirstSelector('div').id);
//console.log(getFirstSelector('.ranked-list'));
//console.log(nestedTarget());
//console.log(increaseRankBy(3));
console.log (deepestChild());