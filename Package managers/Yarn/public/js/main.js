
// add more answer to the question
$('#add-answer').click(function (e) {
    var len = $('.pollanswer').length;
    var elem = '<input class="form-control pollanswer" type="text" name="' + len + '" placeholder="Poll Answer">';
    $('#pollanswer').append(elem);
});
// add remove answer to the question
$('#remove-answer').click(function (e) {
    var len = $('.pollanswer').length;
    if (len > 1) {
        $(".pollanswer")[len - 1].remove();

    }
});

// validate form v1 needs jasmin testing
$('.btn-add').click(function (event) {
    event.preventDefault();

    // Values we are working with
    var category = $('#selectCategory').val().toLowerCase();
    var pollquestion = $('#pollquestion').val();
    var pollanswerArr = [];

    var isAnswerArrayValid = true;

    var len = $('.pollanswer').length;

    for (var i = 0; i < len; i++) {

        Answer = $("input[name=" + i + "]").val();
        if (Answer === "") {
            // ARR empty check
            isAnswerArrayValid = false;
            break;
        } else {
            pollanswerArr.push(Answer);
        }

    }

    if (category === "" || pollquestion === "" || !isAnswerArrayValid) {
        // if messages already there remove them
        $('.form-control-feedback').each(function () {
            $(this).remove();
        });
        // check where the errors lay
        if (category === "") {
            $('#select').after("<div class='form-control-feedback'>Can't be empty</div>");
        }
        if (pollquestion === "") {
            $('.pollquestion').after("<div class='form-control-feedback'>Can't be empty</div>");

        }
        if (!isAnswerArrayValid) {

            $('#pollanswer').append("<div class='form-control-feedback'>Can't be empty</div>");

        }
        $('#pollform').addClass('has-warning');
    }
    else {
        $('.form-control-feedback').each(function () {
            $(this).remove();
        });
        $('#pollform').removeClass('has-warning');
        $('#pollform').addClass('has-success');

        // ajax time
        $.post("/", {
            pollanswer: pollanswerArr,
            pollcategory: $('#selectCategory').val().toLowerCase(),
            pollquestion: $('.pollquestion').val(),
        })
            .done(function (data) {
                $("#addpollModal").modal("hide");
                window.location.href = '/';
            });
    }
});


  $('.delete-user-poll').on('click', function(e){
      $target = $(e.target);
      var id = ($target.attr('data-id'));

      $.ajax({
          type: 'DELETE',
          url:  '/'+id,
          success: function(response){
              //alert('Deleting Article');
              window.location.href='/';
          },
          error: function(err){
              console.log(err);
          }
      })
  });


//Post vote to route
$('.btn-vote').on('click', function (e) {

    $target = $(e.target);
    var id = ($target.attr('data-id'));

    var radioValue = $("input[name='" + id + "']:checked").val();

    if (radioValue === undefined) {
        $(this).closest('form').addClass('has-warning');

        $(this).closest('form').children().each(function (item) {
            if ($(this).text() === "Can't be empty") {
                $(this).children()[0].remove();
            }
        });
        $(this).closest('.post-bar').prepend("<div class='form-control-feedback'>Can't be empty</div>");
    }
    else {
        $(this).closest('form').removeClass('has-warning').addClass('has-success');
        $(this).closest('form').children().each(function (item) {
            if ($(this).text() === "Can't be empty") {
                $(this).remove();
            }
        });
        $.ajax({
            method: "POST",
            url: "/vote/",
            data: { id: id, value: radioValue }
        }).done(function (msg) {
                window.location.href = '/';
        });
    }
});

// Post question to route
$('.add-question').click(function (e) {

    $target = $(e.target);

    var id = ($target.attr('data-id'));

    var form = $(this).closest('form').serializeArray();

    var value = form[0].value;

    if (value === "") {
        $(this).closest('form').addClass('has-warning');

        $(this).closest('form').children().each(function (item) {
            if ($(this).text() === "Can't be empty") {
                $(this).remove();
            }
        });
        $(this).closest('form').append("<div class='form-control-feedback'>Can't be empty</div>");
    } else {
        $(this).closest('form').removeClass('has-warning').addClass('has-success');
        $(this).closest('form').children().each(function (item) {
            if ($(this).text() === "Can't be empty") {
                $(this).remove();

            }
        });

        $.ajax({
            method: "POST",
            url: "/addquestion/",
            data: { id: id, answer: value }
        })
        .done(function (msg) {
                window.location.href = '/';
        });
    }
});




