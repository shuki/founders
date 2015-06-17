$.jset.fn.registerGridDefinition('town', {
  	source: 'town',
  	item_name: 'ישוב',
	load_edit_record: false,
	persist:false,
	template: {
		use: true,
		columns: 1
	},
	copy:{
		properties: {
			editCaption: 'העתק ישוב'
		},
		options: {
			title: 'העתק ישוב'
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
	    sortname: 'name',
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
