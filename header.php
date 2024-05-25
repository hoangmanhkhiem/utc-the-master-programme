<?php
$url = $_SERVER['REQUEST_URI'];
$menuItems = array(
    array("url" => "index.php", "label" => "About"),
    array("url" => "program.php", "label" => "Program"),
    array("url" => "scholarships.php", "label" => "Scholarships"),
    array("url" => "enrollment.php", "label" => "Enrollment"),
    array("url" => "new.php", "label" => "News")
);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="shortcut icon" href="./image/logoutc.png" type="image/x-icon" />
    <link rel="apple-touch-icon" href="./image/logoutc.png" />
    <link rel="stylesheet" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.8.162/pdf.min.js" integrity="sha512-9Wd08apcJEwm8g3lBTg1UW/njdN0iuuOVWKpyinK3uA7ISAE5PmEZ4y8bZYTXVOE3tlt7aFlCBBLmLt5cUxe2Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link href="./dist/css/bootstrap.min.css" rel="stylesheet">
    </script>
</head>

<body>
    <header id="Top_bar">
        <div class="container">
            <div class="column one">
                <div class="top_bar_left clearfix">
                    <img src="./image/banner.png" height="auto" alt="">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container">
                            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                                <ul class="navbar-nav">
                                    <?php foreach ($menuItems as $menuItem) : ?>
                                        <li class="nav-item">
                                            <a class="nav-link" href="<?php echo $menuItem['url']; ?>" <?php if ($url == '/' . $menuItem['url']) echo 'style="color: #fab309 !important"'; ?>>
                                                <?php echo $menuItem['label']; ?>
                                            </a>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div class="burgers">
                        <span style="font-size:30px;cursor:pointer" class="burgers_open" onclick="openNav()">&#9776;</span>
                    </div>
                    <div id="mySidenav" class="sidenav">
                        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                        <?php foreach ($menuItems as $menuItem) : ?>
                            <a class="nav-link" href="<?php echo $menuItem['url']; ?>" <?php if ($url == '/' . $menuItem['url']) echo 'style="color: #fab309 !important"'; ?>>
                                <?php echo $menuItem['label']; ?>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </header>