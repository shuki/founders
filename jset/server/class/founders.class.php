<?php

class founders
{
	public static function create_attendance_items($db, $id, $date, $creator)
	{
		return $db->insert("INSERT IGNORE INTO `attendance_item` (`parent`, `patient_id`, `creator`, `attend`, `comments`)
		select '$id', parent, '$creator', coalesce(ae.attend,  1), coalesce(ae.comments, '')
		from attendant_plan ap
		inner join patient p
		on ap.parent = p.id and (isnull(`p`.`leave_date`) or (`p`.`leave_date` >= '$date'))
		inner join
		(
		SELECT parent, MAX(start_date) AS start_date
		  FROM attendant_plan where start_date <= '$date' GROUP BY parent 
		) as m using (parent, start_date)
		left join attendance_exception ae
		on ae.`date` = '$date' and ae.patient_id = ap.parent
		where 
		(weekday('$date') = 6 and ap.a)
		or (weekday('$date') = 0 and ap.b)
		or (weekday('$date') = 1 and ap.c)
		or (weekday('$date') = 2 and ap.d)
		or (weekday('$date') = 3 and ap.e)
		or ae.date is not null		
		");
	}
}


/*
select parent,
current_date() as `current_date`,
coalesce(ae.attend,  1) as attend,
coalesce(ae.comments, '') as comments, 
coalesce(ae.way_in,
(case weekday(current_date())
when 6 then a_in
when 0 then b_in
when 1 then c_in
when 2 then d_in
when 3 then e_in
end)) as way_in,

coalesce(ae.way_out,
(case weekday(current_date())
when 6 then a_out
when 0 then b_out
when 1 then c_out
when 2 then d_out
when 3 then e_out
end)) as way_out

 from attendant_plan ap
inner join (
SELECT parent, MAX(start_date) AS start_date
FROM attendant_plan where start_date <= current_date() GROUP BY parent  
) as m using (parent, start_date)

left join attendance_exception ae
on ae.`date` = current_date() and ae.patient_id = ap.parent

where (weekday(current_date()) = 6 and a)
or (weekday(current_date()) = 0 and b)
or (weekday(current_date()) = 1 and c)
or (weekday(current_date()) = 2 and d)
or (weekday(current_date()) = 3 and e)
or ae.date is not null
 *  
 */