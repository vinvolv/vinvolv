$({ Counter: 0 }).animate({
  Counter: $('.Single').text()
}, {
  duration: 1500,
  easing: 'swing',
  step: function() {
    $('.Single').text(Math.ceil(this.Counter));
  }
});

function appendChart() {
	setTimeout(function (){
		var diva = document.createElement("div");   
		diva.innerHTML = '<iframe width="846" height="754" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQVMUJdvaMJpDslFF1LT2IX77A9fILAvJ0KdmYzjGXbaqTunbXurA2ACeeZpjJ_sUAbNpM1V0KYNTEd/pubchart?oid=1006635721&amp;format=interactive"></iframe>';
		document.getElementById("chartdiv").appendChild(diva);	
	}, 3000); //delay 3 sec until sheet is updated
	return true; 
};
