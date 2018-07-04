
// dataSet = [
// {"name": "Apple", "price": 191, "marketCap": 942},
// {"name": "Google", "price": 1130, "marketCap": 791},
// {"name": "Facebook", "price": 189, "marketCap": 556},
// {"name": "Microsoft", "price": 101, "marketCap": 793},
// {"name": "Oracle", "price": 48, "marketCap": 196},
// {"name": "Tesla", "price": 317, "marketCap": 54},
// {"name": "IBM", "price": 146, "marketCap": 133},
// {"name": "Amazon", "price": 1683, "marketCap": 820}
// ];
var dataSet;

$(document).ready(function(){

$( "#txtAreaBtn" ).click(function() {
  var str = $( "#jsonInput").val();
  // console.log(str);
  dataSet = JSON.parse(str.trim());

  dataSet.sort(function (a, b){
		return parseFloat(b.marketCap) - parseFloat(a.marketCap);
  });
  renderChart();
});
// first sort the dataset to achieve the descending order.


//console.log(dataSet); //--> to check sorted dataset
// once sorted call the renderChart() to display the chart.

function renderChart(){
	for (var i = 0; i < dataSet.length; i++){
		// console.log(dataSet[i].marketCap);
		$(".table-svg-chart").append("<tr class='tooltip' rowId="+ i +
			"><td class='tdCheckbox'><input type='checkbox' class='chex'id='"+ i +"' value=''></td><td class='tdName'>"+ dataSet[i].name +"&#8212;"+"</td><td class='tdSvg'><svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' class='chart' width='100%' height='19' aria-labelledby='title' role='img'><g class='bar'><rect width='"+(dataSet[i].marketCap/dataSet[0].marketCap)*100 +"%' height='19'></rect></g></td><td><span class='tooltiptext'>Price: $"+ dataSet[i].price +" Market Cap: $"+ dataSet[i].marketCap +" Billion</span></td></tr>"
		);
	}
}

// renderChart();
//-----------------------------------------------------------------
//Check box to render in the table

var numberOfChecked;
var sum = 0;
var highestPrice=0;

	function summation(data){
		sum = sum + dataSet[data.id].price;
	  	$('.totPrice').empty();
		  $('.totPrice').append(sum);
	}

	function uncheckedSummation(data){
		sum = sum - dataSet[data.id].price;
	  	$('.totPrice').empty();
		  $('.totPrice').append(sum);
	}

	function ave(){
		average = sum/numberOfChecked
		roundUp_mean = Math.ceil(average * 100)/100;
		  $('.avePrice').empty();
		  $('.avePrice').append(roundUp_mean);
	}

	function checkHighestPrice(){
		var highestPrice = 0;
		var highestPriceName ="";
		$( ".chex" ).each(function( index ) {
		  // console.log( index + ": " + $( this ).text() );
		  if($(this).prop("checked")) {
		  	var id = $(this).attr('id');
		  	console.log(id + "<---");
		  	if (dataSet[id].price > highestPrice){
		  		highestPriceName = dataSet[id].name;
		  		highestPrice = dataSet[id].price;
		  	}
		  }
		});
		return highestPriceName;
	}


	$( ".chex" ).click(function() {
	  numberOfChecked= $('input:checkbox:checked').length;
	  $('.numSelect').empty();
	  $('.numSelect').append(numberOfChecked);

	  if ($(this).is(":checked")){
	  	//console.log(dataSet[this.id]);
	  	summation(this);
	  	ave();

	  } else{ // else if unchecked
	  
		  uncheckedSummation(this);
		  ave();
	  }
	  	$('.highPrice').empty();
		 	$('.highPrice').append(checkHighestPrice());
		//console.log(numberOfChecked);
	}); //end of chex click event

}); //end of document.ready

