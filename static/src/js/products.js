$( document ).ready(function() {
	// console.log("Hello")
	
	var website = openerp.website;
	 // var tab_data = [];
	 $("li.display_categories_list:first").addClass("active");
	 var data_id_load = $("li.display_categories_list:has(a)").children('a').data('id');
	  console.log(data_id_load);
	 if(data_id_load){
	 	console.log('true');
	 	 load_products(data_id_load);
	 }
	$('li.display_categories_list').click(function(e) {
		e.preventDefault();
		var self = $(this)
	    var data_id = self.find('a').data('id');
	    self.siblings().removeClass('active');
	    
	    if (self.hasClass('active')){
	    	return false

	    }else{
	    	self.toggleClass('active');
	    }
	    // console.log(data_id);
	     $(".content_best_sellers").empty();
	     load_products(data_id);
	    
	});

		function load_products(data_id){
			 var tab_data = [];
		// $("li.display_categories_list:has(a.active)").css({"pointer-events":"none"});
		// $("li.display_categories_list:has(a.active)").css({"opacity":"0.6"});

		// setTimeout(function(){
			setTimeout(function(){
					
			}, 500);
		    openerp.jsonRpc("/wew", 'call', {'data_id':parseInt(data_id)})
		        .then(function (data) {
		           obj = JSON.parse(data);
		           console.log(obj)
		           console.log(data)
		            if (tab_data.length === 0){
			           $.each( obj, function(key,value) {
			   
					           	if (value.image === null) {
					           		tab_data.push('<div class="product-block" style="margin:0 20px;display:inline-block;float:left"><h3 class="product-name">' + value.name + '</h3><img class="/website/image/product.template/26_5d5073d/image/300x300" style="height:100px"/></div>')
					           	}
					           	else{
					           		tab_data.push('<div class="product-block" style="margin:0 20px;display:inline-block;float:left"><h3 class="product-name">' + value.name + '</h3><img class="product-image" src="data:image/png;base64, ' + value.image + '" style="height:100px"/></div>')
					           	}
							
							
						});
			          // console.log(tab_data)
		       		}
		       		else{
		       			return false
		       		}
		       		$(".content_best_sellers").append(tab_data.join(''));
		       		tab_data = [];
		       		// console.log("Show tab_data_2: " + tab_data)
		        });

		    // jQuery.ajax({
		    // 	url: '/wew',
		    // 	type: 'GET',
		    // 	data: {'data_id': data_id}
		    // 	dataType:'json'
		    // }).then(function (data) {
		    //   	console.log(data)
		    //     });

		    // .done(function(data) {
		    // 	console.log("success");
		    // 	console.log(data);
		    // })
		    // .fail(function() {
		    // 	console.log("error");
		    // })
		    // .always(function() {
		    // 	console.log("complete");
		    // });
		    
	     	// }, 500);

			// setTimeout(function(){
			// 		$("li.display_categories_list:has(a.active)").css({"pointer-events":""});
			// 		$("li.display_categories_list:has(a.active)").css({"opacity":""});
			// }, 500);
		}

});