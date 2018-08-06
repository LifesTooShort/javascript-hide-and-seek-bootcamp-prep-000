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
  // select the 'div#grand-node'
  let sel = document.querySelectorAll('div#grand-node');
  let depth = 0;
  
  while (sel[depth].children !== null) {
    console.log(sel[depth].children);
    depth++;
  }
  
  
  
  console.log(sel);
}

//console.log(getFirstSelector('div').id);
//console.log(getFirstSelector('.ranked-list'));
//console.log(nestedTarget());
//console.log(increaseRankBy(3));
console.log (deepestChild());