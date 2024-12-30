<!DOCTYPE html>
<html lang="en">

<?php include "inc/head.php" ?>
</head>


<body>
<div id="conteiner" class="w-full bg-neutral-300 relative">
    <!-- Imagem de fundo fixa -->
    <div class="w-full h-screen flex items-center justify-center fixed z-[-10] bg-neutral-800">
        <img id="banner-image-background" src="image/card-2.jpg" alt="background image" class="w-full h-screen object-cover">
    </div>
    <!-- Conteúdo em camadas -->
    <div class="w-full h-screen flex items-center justify-center absolute orange">
        <?php include "inc/cards.php" ?>
    </div>
    <div class="green w-full h-screen absolute">
        <div id="centered-box" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-72 h-72 trigger">1</div>
    </div>
    <div class="blue w-full h-screen absolute">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-72 h-72">1</div>
    </div>
</div>


    <!-- <?php include "inc/scroll-test.php" ?> -->
    <?php include "inc/footer.php" ?>