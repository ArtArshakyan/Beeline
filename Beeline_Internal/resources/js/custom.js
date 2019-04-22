/**
 Custom JS

 1. WINDOW LOAD FUNCTION
 2. PRE LOADER

 **/
"use strict";

//Variables for caching
var windowElement = jQuery(window);
var body = jQuery("body");

jQuery(function ($) {

    $.fn.fullHeight = function(){
        var self = this;
        var windowHeight = window.innerHeight;
        var fullHeightFunction = function(){
            return self.css({
                'height': windowHeight
            });
        }
        windowElement.on('resize', function(){
            windowHeight = window.innerHeight;
            fullHeightFunction();
        });
        fullHeightFunction();
        return self;
    }
    $('#login').fullHeight();

    //To open a modal using a trigger:
    $(document).ready(function(){
        $('.modal').modal();
        $('.tabs').tabs();
    });

});

/* ----------------------------------------------------------- */
/*  1.WINDOW LOAD FUNCTION
/* ----------------------------------------------------------- */
windowElement.on('load', function(){

/* ----------------------------------------------------------- */
/*  2.PRE LOADER
/* ----------------------------------------------------------- */
    $('#preloader').fadeOut('slow',function(){
        $(this).remove();
    });

}); // Window Load Function End