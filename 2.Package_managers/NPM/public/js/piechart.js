$(document).ready(function () {

    var id = $('canvas').attr('data-id');
    $.getJSON(id + "/json", function (data) {
        $('.card-title').text(data.poll.question);
        var valuesArr = [];
        var votesArr = [];
        for (var i = 0, len = data.poll.answers.length; i < len; i++) {
            var answer = data.poll.answers[i].answer;
            var votes = data.poll.answers[i].stats.votes;
            valuesArr.push(answer);
            votesArr.push(votes);

        }
        var config = {
            type: 'pie',
            data: {
                datasets: [{
                    data: votesArr,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    label: 'Dataset 1'
                }],
                labels: valuesArr
            },
            options: {
                responsive: true
            }
        };
        var ctx = document.getElementById("pieChart");
        var barChart = new Chart(ctx, config);
    });
});
