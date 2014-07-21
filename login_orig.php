<?php
/*
 * jset  1.0 - jset
 * Copyright (c) 2010, Shuki Shukrun (shukrun.shuki at gmail.com).
 * Dual licensed under the MIT and GPL licenses
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Date: 2010-01-01
 */

include_once("autoload.php");

if(isset($_GET['signout']))
	jset_login::signout();

jset_login::verify();

if(isset($_POST['user'])){
	$user = $_POST['user'];
	$success = jset_login::signin($_POST['user'], $_POST['password']);
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="shortcut icon" href="../jxset/jset/img/smile.gif" type="image/x-icon" />
	<title>Login</title>
</head>
<body>

	<div style="width:100%; margin-top:10px">
		<div style="width:20%; margin: 0 auto;">
			<div class="panel-body">
				<form action="login.php" method="post" target="_self"> 
				<table>
					<tbody>
					<tr style="display: table-row;">
						<td><label for="user" name="user">user: </label></td>
						<td><input type="text" size="12" maxlength="100" name="user" role="textbox" value="<?php echo $user; ?>"></td>
					</tr>
					<tr style="display: table-row;">
						<td><label for="password" name="password">password: </label></td>
						<td><input type="password" size="12" maxlength="50" id="password" name="password" role="textbox"></td>
					</tr>
					<tr style="display: table-row;">
						<td colspan="2" style="text-align:center;"><input type="submit" value="Login" ></td>
					</tr>
					<tr>
						<td colspan="2" style="text-align:center; color:red;"><?php echo ($success === false ? 'Not valid' : ''); ?></td>
					</tr>
					</tbody>
				</table>
				</form>
			</div>
		</div>
	</div>
</body>