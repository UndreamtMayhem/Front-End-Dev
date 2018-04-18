$(document).ready(function () {
    $('#photo-modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '2%', // Starting top style attribute
        endingTop: '5%', // Ending top style attribute
    });
    $('#comment-modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 1, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '0%', // Starting top style attribute
        endingTop: '0%', // Ending top style attribute
    });

});