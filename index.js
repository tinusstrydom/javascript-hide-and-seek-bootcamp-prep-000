function getFirstSelector(selector){
	var getElement = document.getElementById('app').querySelector(selector);
	return getElement;
}

function nestedTarget(){
  var getElement = document.getElementById('app').querySelector('#nested .target');
  return getElement;
}

function increaseRankBy(n){
  var getElement = document.getElementById('app').querySelectorAll('ul.ranked-list li');
	for (let i = 0; i < getElement.length; i++) {
		getElement[i].innerHTML = parseInt(getElement[i].innerHTML)+n ;
	}
}
function deepestChild(){
	var getElement = document.getElementById('app').querySelectorAll('div#grand-node div div div div');
    for(let i = 0; i < getElement.length; i++){
        return getElement[i].innerHTML;
    }
}
