$.jset.fn.registerGridDefinition('holiday', {
  	source: 'holiday',
  	item_name: 'חג',
	load_edit_record: false,
	persist:false,
	template: {
		use: true,
		columns: 1
	},
	copy:{
		properties: {
			editCaption: 'העתק חג'
		},
		options: {
			title: 'העתק חג'
		}
	},
	help:{
		hide: false,
	},
	filterToolbar:{
		hide: false,
		},
	afterSubmit: function(response, postdata){
		//$('table[id="patient"]').jset('pending_reload');
		return [true];
	},
	beforeRequest: function(){
	},
    grid: {
	    sortname: 'date',
	    sortorder: 'desc',
	    width: 500
  	},
  	navigation:{
		options : {
			search: false,
			view: false
		}
	}
});
