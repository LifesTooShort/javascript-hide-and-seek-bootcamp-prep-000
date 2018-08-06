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
  
  // Get the node's children
  let nextChild = sel.children;

  /* only looking at the first child at each level, check that the 
     first child at the next level exists. If it doesn't break out of the loop, knowing we're at the last level
     If it does, set the next child to the children of the current level
  */ 
  while (true) {
    if (nextChild[0].children[0] === undefined) break;
    nextChild = nextChild[0].children;
  }
  return nextChild[0];
}

