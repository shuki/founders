$.jset.fn.registerGridDefinition('discount', {
  	source: 'discount',
  	item_name: 'הנחה',
	load_edit_record: false,
	persist:false,
	template: {
		use: true,
		columns: 1
	},
	copy:{
		properties: {
			editCaption: 'העתק הנחה'
		},
		options: {
			title: 'העתק הנחה'
		}
	},
	help:{
		hide: false,
	},
	filterToolbar:{
		hide: false,
		},
	afterSubmit: function(response, postdata){
		$('table[id="patient"]').jset('pending_reload');
		return [true];
	},
	beforeRequest: function(){
	},
    grid: {
	    sortname: 'rate',
	    sortorder: 'asc',
	    width: 500
  	},
  	navigation:{
		options : {
			search: false,
			view: false
		}
	}
});
