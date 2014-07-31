/* spoiler_filter.js
 *
 * CONTENT SCRIPT
 *
 * This is injected into every page, and each page's content script
 * relies on popup.js to tell it when to update its filters.
 */

console.log("CONTENT SCRIPT ACTIVATED, NOW INFILTRATING CURRENT PAGE!");

$( document ).ready(function() {

 retrieveAndFilter();
 // unstyleClick();
 loadForGmail();
 loadForFacebook();
 loadForGoogle();

});

//functions for page load retrieval
function retrieveAndFilter(){
chrome.storage.sync.get("savedKeywords", function(data){
    console.log("FETCHING: ", data["savedKeywords"]);
        var savedKeywords = data["savedKeywords"];
            $.each(savedKeywords, filterKeyword);
            });
}


//additional filters to make sure certain domains work
function loadForGmail(){
    if(document.domain === "mail.google.com"){
        console.log("Its gmail!");
        var timer = setInterval(function(){retrieveAndFilter()}, 800);
    }
}

function loadForFacebook(){
    if(document.domain === "facebook.com"){
        console.log("Its facebook!");
        var timer = setInterval(function(){retrieveAndFilter()}, 800);
    }
}

function loadForGoogle(){
    if(document.domain === "www.google.com"){
        console.log("Its google, darn");
        var timer = setInterval(function(){retrieveAndFilter()}, 800);
    }
}

//functions for jquery filtering on click removal, so far not compatible with timer on google pages so I'm commenting out for now
// function unstyleClick(){
//     $("h1").click(
//        function()
//         { $(this).removeAttr('style') }
//     )
//     $("h2").click(
//        function()
//         { $(this).removeAttr('style') }
//     )
//     $("h3").click(
//        function()
//         { $(this).removeAttr('style') }
//     )
//     $("p").click(
//        function()
//         { $(this).removeAttr('style') }
//     )
//     $("li").click(
//        function()
//         { $(this).removeAttr('style') }
//     )
//      $("div").click(
//        function()
//         { $(this).css("background", "");
//           $(this).css("color", "");
//          }
//     )
//      $(".userContent").click(
//        function()
//         { $(this).css("background", "");
//           $(this).css("color", "");
//          }
//     )
//      $(".UFICommentBody").click(
//        function()
//         { $(this).css("background", "");
//           $(this).css("color", "");
//          }
//     )
//      $(".UFICommentContent").click(
//        function()
//         { $(this).css("background", "");
//           $(this).css("color", "");
//          }
//     )
//      $("._5r--").click(
//        function()
//         { $(this).css("background", "");
//           $(this).css("color", "");
//          }
//     )
//      $(".ha").click(
//        function()
//         { $(this).css("background", "");
//           $(this).css("color", "");
//          }
//     )
//      $(".a3s").click(
//        function()
//         { $(this).css("background", "");
//           $(this).css("color", "");
//          }
//     )
// }

function resetStyle(){
    $( "h1" ).removeAttr( 'style' );
    $( "h1 > a" ).removeAttr( 'style' );
    $( "h2" ).removeAttr( 'style' );
    $( "h2 > a" ).removeAttr( 'style' );
    $( "h3" ).removeAttr( 'style' );
    $( "h3 > a" ).removeAttr( 'style' );
    $( "p" ).removeAttr( 'style' );
    $( "p > a" ).removeAttr( 'style' );
    $( "li" ).removeAttr( 'style' );
    $( "li > a" ).removeAttr( 'style' );
    $( "div" ).css("background", "");
    $( "div" ).css("color", "")
    $( "div > a" ).removeAttr( 'style' );
    $( ".userContent" ).css("background", "");
    $( ".userContent" ).css("color", "");
    $( ".UFICommentBody").css("background", "");
    $( ".UFICommentBody").css("color", "");
    $( ".UFICommentContent").css("background", "");
    $( ".UFICommentContent").css("color", "");
    $( "._5r--").css("background", "");
    $( "._5r--").css("color", "");
    $( ".ha").css("background", "");
    $( ".ha").css("color", "");
    $( ".a3s").css("background", "");
    $( ".a3s").css("color", "");
    $( "tr").css("background", "");
    $( "tr").css("color", "");
    $(".zA yO").css("background", "");
    $(".zA yO").css("color", "");
    $(".zA zE").css("background", "");
    $(".zA zE").css("color", "");
}

function filterKeyword(keyword, value) {
    console.log("Filtering kw: " + value)
    $( "h1:contains('" + value + "')" ).css( "background", "black" );
    $( "h1:contains('" + value + "')" ).css( "color", "black" );
    $( "h1:contains('" + value + "') > a " ).css("color", "black");

    $( "h2:contains('" + value + "')" ).css( "background", "black" );
    $( "h2:contains('" + value + "')" ).css( "color", "black" );
    $( "h2:contains('" + value + "') > a " ).css("color", "black");

    $( "h3:contains('" + value + "')" ).css( "background", "black" );
    $( "h3:contains('" + value + "')value" ).css( "color", "black" );
    $( "h3:contains('" + value + "') > a " ).css("color", "black");

    $( "p:contains('" + value + "')" ).css( "background", "black" );
    $( "p:contains('" + value + "')" ).css( "color", "black" );
    $( "p:contains('" + value + "') > a " ).css("color", "black");

    $( "li:contains('" + value + "')" ).css( "background", "black" );
    $( "li:contains('" + value + "')" ).css( "color", "black" );
    $( "li:contains('" + value + "') > a " ).css("color", "black");

    $( "div:contains('" + value + "')" ).css( "color", "black" );
    $( "div:contains('" + value + "') > a " ).css("color", "black");

    //just for facebook
    $( ".userContent:contains('" + value + "')" ).css("background", "black");
    $( ".userContent:contains('" + value + "')" ).css("color", "black");
    $( ".UFICommentBody:contains('" + value + "')" ).css("color", "black");
    $( ".UFICommentBody:contains('" + value + "')" ).css("background", "black");
    $( ".UFICommentContentBlock:contains('" + value + "')" ).css("color", "black");
    $( ".UFICommentContentBlock:contains('" + value + "')" ).css("background", "black");
    $( "._5r--:contains('" + value + "')" ).css("background", "black");
    $( "._5r--:contains('" + value + "')" ).css("color", "black");

    //just for gmail
    $( ".ha:contains('" + value + "')" ).css( "background", "black" );
    $( ".ha:contains('" + value + "')" ).css( "color", "black" );
    $( ".a3s:contains('" + value + "')" ).css( "background", "black" );
    $( ".a3s:contains('" + value + "')" ).css( "color", "black" );
    $( ".a3s:contains('" + value + "') > a" ).css( "color", "black" );
    $( "tr:contains('" + value + "')" ).css( "background", "black" );
    $( "tr:contains('" + value + "')" ).css( "color", "black" );
    $( ".zA yO:contains('" + value + "')" ).css( "background", "black" );
    $( ".zA yO:contains('" + value + "')" ).css( "color", "black" );
    $( ".zA zE:contains('" + value + "')" ).css( "background", "black" );
    $( ".zA zE:contains('" + value + "')" ).css( "color", "black" );

    //just for SERP
    $(".tl > a:contains('" + value + "')" ).css( "color", "black" );
    $( ".st:contains('" + value + "')" ).css( "color", "black" );
    $( "._FV:contains('" + value + "')" ).css( "color", "black" );
    $( "div._IV.live_result-sports-schedule__lr_sns_ovo_hima.vk_bk:contains('" + value + "')" ).css( "background", "black" );
    $( ".r > a:contains('" + value + "')" ).css( "color", "black" );

}

//function to listen to checkbox and send keywords to storage
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log("received message", message);
    console.log("from", sender);

    if (message.method === 'runFilter') {
        resetStyle();
        $.each(message.allKeywords, filterKeyword);

        chrome.storage.sync.set({'savedKeywords': message.allKeywords}, function() {
            chrome.storage.sync.get("savedKeywords", function(data) {
                console.log("NOW IN CHROME STORAGE: ", data);
                });
            });
        }
    });
