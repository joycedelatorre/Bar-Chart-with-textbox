var dataSet;

$(document).ready(function(){

$( "#txtAreaBtn" ).click(function() {

  var str = $( "#jsonInput").val();
  // console.log(str);
  dataSet = JSON.parse(str.trim());

	// first sort the dataset to achieve the descending order.
  dataSet.sort(function (a, b){
		return parseFloat(b.marketCap) - parseFloat(a.marketCap);
  });
  console.log(dataSet);
  $(".table-svg-chart").empty(); //--> clearing old chart to render new chart
	$('.numSelect').empty();
	$('.totPrice').empty();
	$('.avePrice').empty();
	$('.highPrice').empty();
	// once sorted call the renderChart() to display the chart.
  renderChart();
  checkboxEvent();
});

//console.log(dataSet); //--> to check sorted dataset

function renderChart(){
	for (var i = 0; i < dataSet.length; i++){
		// console.log(dataSet[i].marketCap);
		$(".table-svg-chart").append("<tr class='tooltip' rowId="+ i +
			"><td class='tdCheckbox'><input type='checkbox' class='chex' id='"+ i +"' value=''></td><td class='tdName'>"+ dataSet[i].name +"&#8212;"+"</td><td class='tdSvg'><svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' class='chart' width='100%' height='19' aria-labelledby='title' role='img'><g class='bar'><rect width='"+(dataSet[i].marketCap/dataSet[0].marketCap)*100 +"%' height='19'></rect></g></td><td><span class='tooltiptext'>Price: $"+ dataSet[i].price +" Market Cap: $"+ dataSet[i].marketCap +" Billion</span></td></tr>"
		);
	}
}

}); //end of document.ready
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

	function uncheckedSummation(data){ //--> this fxn is to update the sum if inputs checked and later modified to unchecked.
		sum = sum - dataSet[data.id].price;
	  	$('.totPrice').empty();
		  $('.totPrice').append(sum);
	}

	function ave(){ //--> average
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

function checkboxEvent(){
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
}
