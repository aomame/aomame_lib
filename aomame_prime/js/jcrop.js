//$('document').ready(function(){
jQuery(function($){
	
	//enable console log
	var dev_log = false;
	
	if(dev_log) { $('#datamints_feuser_85_tx_userimage_crop_wrapper').show(); }
	
	//init the cropping api
	var jcrop_api, boundx, boundy;
	$('#cropthumb').Jcrop({
        // start off with jcrop-light class
        bgOpacity: 0.5,
        bgColor: 'white',
        addClass: 'jcrop-light',
        aspectRatio: 170/150,
        minSize: [ 85, 75 ],
        onChange:   setCoords,
        onSelect:   setCoords,
        onRelease: setSelection,
        boxWidth: 365, 
        boxHeight: 400
      },function(){
    	jcrop_api = this;
    	jcrop_api.setOptions({ bgFade: true });
    	jcrop_api.ui.selection.addClass('jcrop-selection');
      });
	

	function setSelection(){
		jcrop_api.setSelect([10,10,180,160]);
		if (dev_log){ console.log('setSelection func: selection setted') };
	}
	
	// on first load, check if image already has the correct size
	// if aspect ratio of the image is ok, then don't have to crop
	$('#cropthumb').one('load', function() {
		
		aspect_ratio = aspect_ratio();
		
		
		if(aspect_ratio == 113){
			jcrop_api.disable();
			var cur_value = $('#datamints_feuser_85_tx_userimage_crop').val();
			
			if (cur_value.indexOf('set') >= 0){
				cur_value = cur_value.replace('set', 'set');
			}
			if (cur_value.indexOf('crop') >= 0){
				cur_value = cur_value.replace('crop', 'set');
			}
			$('#datamints_feuser_85_tx_userimage_crop').val(cur_value);
			
			if(dev_log){ console.log('first load: disable cropping'); }
		}else{
			var cur_value = $('#datamints_feuser_85_tx_userimage_crop').val();
			if (cur_value.indexOf('crop') >= 0){
				cur_value = cur_value.replace('crop', 'crop');
			}
			if (cur_value.indexOf('set') >= 0){
				cur_value = cur_value.replace('set', 'crop');
			}
			$('#datamints_feuser_85_tx_userimage_crop').val(cur_value);
			
			jcrop_api.setSelect([10,10,95,85]);
			if(dev_log){ console.log('first load: set select on'); }
		}
	
	/*If the src is already set then the event is firing in the cache 
	* cased before you get the event handler bound. 
	* To fix this, you can loop through checking and 
	* triggering the event based off .complete, like this:
	* http://stackoverflow.com/questions/3877027
	*/
	}).each(function() {
		if(this.complete) $(this).load();
	});
	
	
	
	// when image is changed, read the file from local system
	// and init the cropping function on the new image
	$('.upload input').change(function(){
		
		//image tag that needs to be changed
		target = $('.thumb img');
		
		if (this.files && this.files[0]) {
	        var reader = new FileReader();
	        
	        reader.onload = function (e) {
	        	target.attr('src', e.target.result);
	            jcrop_api.setImage(e.target.result, function(){
	            			jcrop_api.setSelect([10,10,180,160]);	            	
	            });
	        }
	        reader.readAsDataURL(this.files[0]);
	    }
		jcrop_api.setOptions({ bgOpacity: .6 });
	});
	
	
	
	function setCoords(c){
		//string with crop values
		$values =  c.x +','
	 			+ c.y +','
	 			+ c.x2 +','
	 			+ c.y2 +','
	 			+ c.w +','
	 			+ c.h
	 			;
		//write crop values to hidden field
		$('#datamints_feuser_85_tx_userimage_crop').val($values);
	};


	function readURL(input, target) {
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();
	        
	        reader.onload = function (e) {
	            target.attr('src', e.target.result);
	        }

	        reader.readAsDataURL(input.files[0]);
	        
	    }
	}
	
	function aspect_ratio(){
		var a_width = $('#cropthumb').width();
		var a_height = $('#cropthumb').height();
		
		aspect_ratio = Math.round((a_width/a_height)*100),0;
		
		if(dev_log){
			console.log('first load: width of #cropthumb: '+a_width);
			console.log('first load: height of #cropthumb: '+a_height);
			console.log('first load: aspect ratio: '+aspect_ratio);
		}
		
		return aspect_ratio;
	}	
	
	//image delete
	$('#datamints_feuser_85_tx_userimage_file_delete_1').change(function(){
		if($(this).is(':checked')){
			//delete image
			var cur_value = $('#datamints_feuser_85_tx_userimage_crop').val();
			
			if (cur_value.indexOf('no') >= 0){
				cur_value = cur_value.replace('no', 'delete');
			}else{
				cur_value = cur_value+',delete';
			}
			
			$('#datamints_feuser_85_tx_userimage_crop').val(cur_value);
		}else{
			//dont delete image
			var cur_value = $('#datamints_feuser_85_tx_userimage_crop').val();
			
			//if delete was set and unset again
			if (cur_value.indexOf('delete') >= 0){
				cur_value = cur_value.replace('delete', 'no'); 
			}else{
				cur_value = cur_value+',no';
			}
			
			$('#datamints_feuser_85_tx_userimage_crop').val(cur_value);
		}
		
	});
	
});



