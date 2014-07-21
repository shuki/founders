settings:{
	source: 'plan', 
	load_edit_record: false,
	search_default:[],
	filter:[{
		source: 'id',
		target: 'parent'
	}],
	persist:false,
	template: {
		use: true,
		columns: 1
	},
	onInitializeForm: function(formid){
		$.jset.fn.append_fields_td(formid, 'creation_date');
	},
    grid: {
    	width:480,
        height:100,
        sortname: 'creation_date',
        sortorder: 'desc'
	},
	navigation:{
		options : {
			search: false,
			view: false
		}
	}
}