function movebar(n,percent) {
  var bar = 'bar' + n.toString();	
  var elem = document.getElementById(bar);   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= percent) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}


$({ Counter: 0 }).animate({
  Counter: $('.Single').text()
}, {
  duration: 1500,
  easing: 'swing',
  step: function() {
    $('.Single').text(Math.ceil(this.Counter));
  }
});

function categoryScore(c,d,n){
	var category = 'cat' + c.toString();
	var score = parseFloat(document.getElementById(category).innerHTML); 
	score *= (d-1);
	score += n;
	score /= d;
	document.getElementById(category).innerHTML = (d==3 ? score.toFixed(2) : score);
	return score;
}

/*
function appendChart() {
	setTimeout(function (){
		var diva = document.createElement("div");   
		diva.innerHTML = '<iframe width="846" height="754" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQVMUJdvaMJpDslFF1LT2IX77A9fILAvJ0KdmYzjGXbaqTunbXurA2ACeeZpjJ_sUAbNpM1V0KYNTEd/pubchart?oid=1006635721&amp;format=interactive"></iframe>';
		document.getElementById("chartdiv").appendChild(diva);	
	}, 3000); //delay 3 sec until sheet is updated
	return true; 
};
*/