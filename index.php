<?php 
/*
 * jxset
 * Copyright (c) 2010 - 2013, Shuki Shukrun (shukrun.shuki at gmail.com).
 * Dual licensed under the MIT and GPL licenses
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
 include_once("autoload.php");
 $dir_pre = config::jxset;
 $jset_payment = jset_payment::process();
 jset_session::create();
 jset_page::create(config::jxset, 'he', '', true);
 $user_group = $_SESSION['jset_user_group'];
?>
<link rel="stylesheet" type="text/css" media="screen" href="css/index.css" />
<script src="<?php echo $dir_pre ?>jset/i18n/jset.locale-he.js" type="text/javascript"></script>
<script src="<?php echo $dir_pre ?>jset/i18n/grid.locale-he.js" type="text/javascript"></script>
<title>המייסדים</title>
<script type="text/javascript">
	<?php echo jset_permission::get_user_attributes_js(); ?>
</script>
<script src="js/defaults.js" type="text/javascript"></script>
<script src="js/patient.js" type="text/javascript"></script>
<script src="js/attendance.js" type="text/javascript"></script>
<script src="js/worker.js" type="text/javascript"></script>
<script src="js/discount.js" type="text/javascript"></script>
<script src="js/holiday.js" type="text/javascript"></script>
<script src="js/town.js" type="text/javascript"></script>
<script src="js/physiotherapy.js" type="text/javascript"></script>
<script src="js/product.js" type="text/javascript"></script>
<script src="js/pricelist.js" type="text/javascript"></script>
<script src="js/report.js" type="text/javascript"></script>
<script src="js/session.js" type="text/javascript"></script>
<script src="js/index.js" type="text/javascript"></script>
<?php jset_payment::alert_script(); ?>
</head>
<body>
	<div> <a href="login.php?signout"><img src="<?php echo $dir_pre ?>jset/img/power-black.png" title="צא"></a> <a href="<?php echo config::password_page; ?>"><?php echo $_SESSION['jset_user_login']; ?></a> שלום</div>
	<?php if(!$user_group){ ?>
		
		<div style="direction:rtl; text-align:right">  יש להגדיר קבוצת הרשאה למשתמש <?php echo $_SESSION['jset_user_login']; ?> בכדי להשתמש במערכת. </div>

	<?php 
		die;
	}	?>
	<div id="tabs">
		<ul>
			<li><a href="#tabs-0">בית</a></li>
			<?php if($user_group == 1 || $user_group == 2){ ?><li><a href="#tabs-1">חברים</a></li><?php } ?>
			<?php if($user_group == 1 || $user_group == 2){ ?><li><a href="#tabs-2">נוכחות</a></li><?php } ?>
			<?php if($user_group == 1 || $user_group == 2){ ?><li><a href="#tabs-3">עובדים</a></li><?php } ?>
			<?php if($user_group == 1 || $user_group == 2){ ?><li><a href="#tabs-4">הנחות</a></li><?php } ?>
			<?php if($user_group == 1 || $user_group == 2){ ?><li><a href="#tabs-5">חגים</a></li><?php } ?>
			<?php if($user_group == 1 || $user_group == 2){ ?><li><a href="#tabs-6">ישובים</a></li><?php } ?>
			<?php if($user_group == 1 || $user_group == 2 || $user_group == 3){ ?><li><a href="#tabs-7">פיזיותרפיה</a></li><?php } ?>
			<?php if($user_group == 1 || $user_group == 2 || $user_group == 4){ ?><li><a href="#tabs-8">מוצרים</a></li><?php } ?>
			<?php if($user_group == 1 || $user_group == 2){ ?><li><a href="#tabs-9">מחירון</a></li><?php } ?>
			<?php if($user_group == 1 || $user_group == 2){ ?><li><a href="#tabs-10">דוחות</a></li><?php } ?>
			<?php jset_payment::payment_li($jset_payment); ?>
		</ul>
		<?php if($user_group == 1 || $user_group == 2){ ?>
		<div style="width:100%; margin-top:10px; text-align: center" id="tabs-0">
			<h1 style="color:green;">מערכת המייסדים</h1>
			<img src="<?php echo $dir_pre ?>jset/img/jxset.jpg"/>
			<div>תמיכה: <a href="mailto:shukrun.shuki@gmail.com?Subject=מערכת%20המייסדים" target="_blank">shukrun.shuki@gmail.com</a></div>
		</div>
		<div id="tabs-1">
			<table id="patient" border="1"></table>
		</div>
		<?php } 
		if($user_group == 1 || $user_group == 2){ ?>
		<div id="tabs-2">
			<table id="attendance_master_table" style="width:98%">
				<tr>
					<td style="vertical-align:top">
						<table id="attendance" border="1"></table>
					</td>
				</tr>
				<tr>	
					<td style="vertical-align:top">
						<table id="attendance_item" border="1"></table>
					</td>
				</tr>
			</table>
		</div>
		<?php } 
		if($user_group == 1 || $user_group == 2){ ?>
		<div id="tabs-3">
			<table id="worker" border="1"></table>
		</div>
		<?php } 
		if($user_group == 1 || $user_group == 2){ ?>
		<div id="tabs-4">
			<table id="discount" border="1"></table>
		</div>
		<?php } 
		if($user_group == 1 || $user_group == 2){ ?>
		<div id="tabs-5">
			<table id="holiday" border="1"></table>
		</div>
		<?php } 
		if($user_group == 1 || $user_group == 2){ ?>
		<div id="tabs-6">
			<table id="town" border="1"></table>
		</div>
		<?php } 
		if($user_group == 1 || $user_group == 2 || $user_group == 3){ ?>
		<div id="tabs-7">
			<table id="physiotherapy" border="1"></table>
		</div>
		<?php } 
		if($user_group == 1 || $user_group == 2 || $user_group == 4){ ?>
		<div id="tabs-8">
			<table id="product" border="1"></table>
		</div>
		<?php } 
		if($user_group == 1 || $user_group == 2){ ?>
		<div id="tabs-9">
			<table id="pricelist" border="1"></table>
		</div>
		<?php } 
		if($user_group == 1 || $user_group == 2){ ?>
		<div id="tabs-10">
			<table id="report" border="1"></table>
		</div>
		<?php }  ?>
		<?php jset_payment::payment_div($jset_payment); ?>
	</div>
</body>
</html>