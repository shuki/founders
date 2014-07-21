$(function(){	
	$('body').append('<div id="timeout" style="display:none;direction:rtl">מפאת חוסר פעילות, המערכת תתנתק בעוד <span id="countdown"></span> שניות.</div>');
	$(window).on('load', function(){
		StartTimers();
	})
	.on('mousemove.session keypress.session click.session', function(){
		ResetTimers();
	});
});

	var timoutWarning = 1500000; // 25 minutes
	var timoutNow = 300000; // 5 minutes
	var logoutUrl = 'login.php?signout';
	
	var warningTimer;
	var timeoutTimer;
	var timeoutCountdownTimer;
	var countdown;
	
	function StartTimers() {
	    warningTimer = setTimeout("IdleWarning()", timoutWarning);
	    timeoutTimer = setTimeout("IdleTimeout()", timoutWarning + timoutNow);
	}
	
	function ResetTimers() {
	    clearTimeout(warningTimer);
	    clearTimeout(timeoutTimer);
	    clearTimeout(timeoutCountdownTimer);
	    StartTimers();
		if ($("#timeout").hasClass('ui-dialog-content')) {
		     $("#timeout").dialog('close');
		}
	}
	
	function IdleWarning() {
	    $("#timeout").dialog({
	    	title: 'אזהרה',
	        modal: true
	    });
	    countdown = timoutNow / 1000 + 1;
	    UpdateCountdown();
	    timeoutCountdownTimer = setInterval("UpdateCountdown()", 1000);
	}
	
	function UpdateCountdown(){
		countdown -= 1;
		$('span#countdown').html(countdown);
	}
	
	function IdleTimeout() {
	    window.location = logoutUrl;
	}
