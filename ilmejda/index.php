<!DOCTYPE html>
<html>
<!-- HTML header -->

<head>

	<!-- Website Title -->
	<title>Il-Mejda</title>

	<!-- Website Icon -->
	<link rel="icon" href="images/icons/favicon.ico">

	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="css/style.css">

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


	<!-- JS -->
	<script src="js/jquery-1.12.0.min.js"></script>
	<script src="js/index.js"></script>
	<script src="js/article.js"></script>

	<!-- Required scripts for carousel -->
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

	<!-- JS index.php -->

	<head>

		<!-- HTML body -->

		<body>
			<div id="container">
				<div id="header">
					<img src="images/ilMejdaLogo.png" id="headerLogo" />

					<div id="headerLinks">
						<a href="index.php?page=home">
							<div class="headerLinkDiv">Home</div>
						</a>
						<a href="index.php?page=article">
							<div class="headerLinkDiv">Article Example</div>
						</a>
						<a href="index.php?page=error">
							<div class="headerLinkDiv">Error Example</div>
						</a>
						<a href="">
							<div class="headerLinkDiv">Example4</div>
						</a>
					</div>

					<img src="images/searchLogo.png" id="search" />
					<input type="text" id="searchInput" placeholder="Search..." />

				</div>
	
				<div id="content">
					<?php
						//check for page in link ex. www.ilmejda.com/index.php?page=home
						if (isset($_GET['page'])) {
							
										if ($_GET['page'] == "index")
										{	
											$page = "home";
										}
										else
										{
											$page = $_GET['page'];
										}
										
										//function which checks the presence of a file.
										if (file_exists($page.".php")) {
											include($page.".php");
										}
										else { //if file is not found show error file
											include("error404.php");
										}
						}
					?>
				</div>
				
				<div id="footer">
					Copyright &copy; by il-Mejda 2018
				</div>
			</div>
		</body>

</html>
