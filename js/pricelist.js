$.jset.fn.registerGridDefinition('pricelist', {
  	source: 'pricelist',
  	item_name: 'פרטי מוצר',
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
	afterSubmit: function(response, postdata){
		$('table[id="product"]').jset('pending_reload');
		$('table[id="physiotherapy"]').jset('pending_reload');
		return [true];
	},
	beforeRequest: function(){
	},
    grid: {
		height: $(window).height() - 170,
		//height: $(window).height() - 135,
		rowNum:100,
	    sortname: 'name',
	    sortorder: 'asc',
  	},
  	navigation:{
		options : {
			search: false,
			view: false
		}
	}
});
