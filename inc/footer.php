    
    <?php 
  $isMobile =  preg_match("/(android|webos|avantgo|iphone|ipad|ipod|blackberry|iemobile|bolt|boost|cricket|docomo|fone|hiptop|mini|opera mini|kitkat|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]); 
    if(!$isMobile){
        ?>
        <script src="js/gsasp/cards_gsap.js"></script>
        <?php
    }
    ?>
    <script src="js/gsasp/cards_fullscreen_gsap.js"></script>
    <script src="js/gsasp/scroll_gsap.js"></script>
    </body>

</html>