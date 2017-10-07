import $ from 'jquery'
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

var postOuter         = $( ".postfade" );
var postInner         = $( ".postfade-inner" );
var heightCollapsed   = postOuter.outerHeight();
var heightExpanded    = postInner.outerHeight();

$(document).ready(function (){
    $("#but").on("click", function (){
        
        if (postOuter.outerHeight() <= heightCollapsed) {
            postOuter.animate({ height: heightExpanded }, 300);
            
            $("#but").html('');
            $('.postfade').addClass('expanded');
        }
        
        else if (postOuter.outerHeight() >= heightCollapsed) {
            postOuter.animate({ height: heightCollapsed }, 300);
            
            $("#but").html('');
            console.log('closed');
            $('.postfade').removeClass('expanded');
        }  
        
    });
});
