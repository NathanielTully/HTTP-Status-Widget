<?php

	$code = (int) $_SERVER['QUERY_STRING'];
	
	http_response_code($code);
	

?>