<?php
class request
{
	public static function set(&$request)
	{
		//var_dump($request);die;
		if($request['_session_jset_user_group_'] > 1){
			switch($request['_source_']){
				case 'dormitory':
					$request['_section_'] = 1;
					break;
				case 'patient':
					$request['_section_'] = 1;
					break;
				case 'shift_summary':
					$request['_section_'] = 1;
					break;
				case 'school':
					$request['_section_'] = 1;
					break;
				default:
					;
			}
		}
			
		//add / modify $request entries here
		//if($request['_session_jset_user_group_'] >= 40 && $request['_session_roles_'] != 60)
			//$request['_section_'] = 1;
	}
}