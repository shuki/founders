$.jset.fn.registerGridDefinition('physiotherapy', {
  	source: 'physiotherapy',
  	item_name: 'טיפול פיזיותרפיה',
	load_edit_record: false,
	persist:false,
	template: {
		use: true,
		columns: 1
	},
	help:{
		hide: false,
	},
	filterToolbar:{
		hide: false,
	},
	onInitializeForm: function(formid){
		var grid = $(this);
		$.jset.fn.append_fields(formid, 'product', 1);
		$($.jset.fn.get_form_field(formid, 'product'))
		.on('change.product', function(event){
			var value = $(this).val();
			$.jset.fn.get_rows(grid, 
			'select price from pricelist where id ="' + value + '"',
			 function(data){
				var value = data.length > 0 ? data[0].price : '';
				$.jset.fn.get_form_field(formid, 'unit_price').val(value);
				fn_product.update_price(formid);
			});
		});
		
		$($.jset.fn.get_form_field(formid, 'count'))
		.on('change.product', function(event){
			fn_product.update_price(formid);
		})
		.on('keyup.product', function(event){
			fn_product.update_price(formid);
		});
	},
	beforeShowForm: function(formid){
		var grid = $(this);

		//fix for vered computer
		if(grid.data('form_action') == 'add' || grid.data('form_action') == 'copy')
			$.jset.fn.get_form_field(formid, 'comments').val('');
	},
	afterSubmit: function(response, postdata){
		//$('table[id="patient"]').jset('pending_reload');
		return [true];
	},
    grid: {
		height: $(window).height() - 170,
		//height: $(window).height() - 135,
		rowNum:100,
	    sortname: 'date',
	    sortorder: 'desc',
  	},
  	navigation:{
		options : {
			search: false,
			view: false
		}
	}
});

var fn_product = {
	update_price: function(formid){
		if($.jset.fn.get_form_field(formid, 'count').val() && $.jset.fn.get_form_field(formid, 'unit_price').val())
			$.jset.fn.get_form_field(formid, 'price').val(parseFloat($.jset.fn.get_form_field(formid, 'count').val() * $.jset.fn.get_form_field(formid, 'unit_price').val()).toFixed(2));
		else
			$.jset.fn.get_form_field(formid, 'price').val('');		
	}
};
