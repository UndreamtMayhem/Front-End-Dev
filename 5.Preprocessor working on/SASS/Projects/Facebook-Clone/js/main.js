$(document).ready(function () {
    $('ul.nav-tabs').tabs();
    $('ul.tabs.story-tabs').tabs();
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered

    $('#create-post-modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 1, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '0%', // Starting top style attribute
        endingTop: '0%', // Ending top style attribute
    });
    $('#comment-modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 1, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '0%', // Starting top style attribute
        endingTop: '0%', // Ending top style attribute
    });

})