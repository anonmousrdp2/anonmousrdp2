<?php
// sysinfo.php

// Get system information
$sysinfo = [
    'OS' => php_uname(),
    'PHP Version' => phpversion(),
    'Server Software' => $_SERVER['SERVER_SOFTWARE'],
    'Document Root' => $_SERVER['DOCUMENT_ROOT'],
    'Current Directory' => getcwd(),
];

// Return system information as JSON
header('Content-Type: application/json');
echo json_encode($sysinfo);
?>
