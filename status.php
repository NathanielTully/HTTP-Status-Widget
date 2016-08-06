<?php

 /*
  * Simple file to spit out http response codes
	* to easily to test traffic light widgets
	* eg. status.php?404 = 404 Error
	*/

	$code = (int) $_SERVER['QUERY_STRING'];

	http_response_code($code);


?>
