jQuery(document).ready(function(i){i(".main-navigation").removeClass("hidden"),i(".mobile-navigation").removeClass("hidden"),i(".nav-toggle").click(function(){i(".mobile-navigation").slideToggle("fast"),i(".site-header").toggleClass("toggled")}),i(".mobile-navigation").hide(),i(".mobile-navigation .sub-menu").hide(),i(".mobile-navigation .menu-item-has-children > a").click(function(e){e.preventDefault(),i(this).attr("aria-expanded","true"===i(this).attr("aria-expanded")?"false":"true"),i(this).next(".sub-menu").slideToggle("fast")}),i(window).resize(function(){i(".site-header").removeClass("toggled"),i(".mobile-navigation").hide(),i(".mobile-navigation .sub-menu").hide()}),i(window).scroll(function(){75<i(document).scrollTop()?i(".site-header").addClass("scrolled"):i(".site-header").removeClass("scrolled")}),i(".main-navigation > ul").superfish({speed:"fast",autoArrows:!1,cssArrows:!1})}),jQuery(document).ready(function(e){e(".back-to-top").click(function(){window.scroll({top:0,left:0,behavior:"smooth"})})}),Modernizr.svg||$('img[src$=".svg"]').each(function(){$(this).attr("src",$(this).attr("src").replace(".svg",".png"))});