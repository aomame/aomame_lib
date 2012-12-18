$("document").ready(function(){
		

		// using bootstrap scripts
		//collapse
		$(".collapse").collapse({
			toggle: false
		});
		
		//carousel
		$('.carousel').carousel({
			interval: 12000
		});
		
		//tooltip
		$("[rel=tooltip]").tooltip();



		
		
});

function getURLParam(name){
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}
