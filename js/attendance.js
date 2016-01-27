$(function(){
	var attendance_item_settings = {
		source: 'attendance_item',
		item_name: 'נוכחות חבר/ה',
		persist: false,
		template: {
			use: true,
			columns: 1
		},
		filter:[{
			source: 'id',
			target: 'parent'
		}],
		'import':{
			navButtonAdd: false,
		},
		copy:{
			navButtonAdd: false
		},
		help:{
			hide: false,
			navButtonAdd: false
		},
		filterToolbar:{
			hide: false,
			navButtonAdd: false
		},
		columnChooser:{
			navButtonAdd: true
		},
		onInitializeForm: function(formid){
			$.jset.fn.get_form_field(formid, 'patient_fullname').closest('div.panel-div').hide();
        	$($.jset.fn.get_autocomplete_element(formid, 'patient_id'))
	        	.on( "autocompleteselect.patient_id", function( event, ui ) {
					$($.jset.fn.get_form_field(formid, 'town_name')).val(ui.item.info ? ui.item.info[3] : '');
					$($.jset.fn.get_form_field(formid, 'id_number')).val(ui.item.info ? ui.item.info[4] : '');
				});
		},
		beforeShowForm: function(formid){
	        $($.jset.fn.get_autocomplete_element(formid, 'patient_id'))
		        .val($($.jset.fn.get_form_field(formid, 'patient_fullname')).val());

		},
		afterShowForm: function(formid){
	        $.jset.fn.get_autocomplete_element(formid, 'patient_id').focus();
		},
		afterclickPgButtons : function(whichbutton, formid, rowid, id){
	        $($.jset.fn.get_autocomplete_element(formid, 'patient_id'))
		        .val($($.jset.fn.get_form_field(formid, 'patient_fullname')).val());
		},
		loadCompleteInit: function(data){
		},
		beforeSubmit: function(postdata, formid){
			console.log(postdata);
			if(!postdata.patient_id)
				return [false, 'חבר/ה הוא שדה חובה.'];

			return [true];
		},
		beforeRequest: function(){
		},
		afterSubmitError: function(response, postdata, frmoper, obj){
			var message = obj.error.message;
			switch(obj.error.info[1]){
				case 1062: 
					message = 'קיים כבר דוח נוכחות לחבר/ה ליום זה.';
					break;
				default:
					;
			}
			return [false, message];
		},
	    grid: {
		    height: $(window).height() - 362,
    		width: 600,
    		//autowidth: true,
	        //sortname: 'patient_fullname',
	        //sortorder: 'asc'
	  	},
	  	navigation:{
			options : {
				add: true,
				edit: true,
				del: true,
				search: false,
				view: false,
			},
			edit:{
			},
			add:{
			},
			del:{
			},
			search:{
			},
			view:{
			}
		}
	};

	$.jset.fn.registerGridDefinition('attendance', {
	  	source: 'attendance', 
  		item_name: 'נוכחות יומית',
		load_edit_record: false,
		template: {
			use: true,
			columns: 1
		},
		detail: [{
			elem: '#attendance_item',
			settings: attendance_item_settings
		}],
		persist: false,
		copy:{
			navButtonAdd: false
		},
		'import':{
			navButtonAdd: false,
		},
		help:{
			hide: false,
			navButtonAdd: true
		},
		filterToolbar:{
			hide: false,
			navButtonAdd: false
		},
		columnChooser:{
			navButtonAdd: true
		},
		loadComplete: function(data){
		},
		onInitializeForm: function(formid){			
		},
		beforeShowForm: function(formid){
		},
		loadCompleteInit: function(data){
		},
		beforeSubmit: function(postdata, formid){
			return [true];
		},
		afterSubmit: function(response, postdata, frmoper, obj){
			var grid = $(this);
			if(grid.data('form_action') == 'edit')
				$('table#attendance_item')[0].triggerToolbar();

			return [true];
		},
		afterSubmitError: function(response, postdata, frmoper, obj){
			var message = obj.error.message;
			switch(obj.error.info[1]){
				case 1062: 
					message = 'קיים כבר דוח נוכחות ליום זה.';
					break;
				default:
					;
			}
			return [false, message];
		},
		beforeRequest: function(){
		},
	    grid: {
	    	height: 100,
    		width: 600,
    		//autowidth: true,
	        sortname: 'date',
	        sortorder: 'desc'
	  	},
	  	navigation:{
			options : {
				search: false,
				view: false,
			},
			edit:{
			},
			add:{
			},
			del:{
			},
			search:{
			},
			view:{
			}
		}
	});
});

var fn_attendance= {
};