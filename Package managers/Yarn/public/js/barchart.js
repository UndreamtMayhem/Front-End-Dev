var id  = $('canvas').attr('data-id');

$.getJSON(id + "/json", function( data ) {
    $('.card-title').text(data.poll.question);
    var valuesArr = [];
    var votesArr = [];
    for(var i = 0, len =data.poll.answers.length; i < len; i++){
        var answer = data.poll.answers[i].answer;
        var votes = data.poll.answers[i].stats.votes;
        valuesArr.push(answer);
        votesArr.push(votes);
    }
    var ctx = document.getElementById("barChart");
    var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: valuesArr,
        datasets: [{
            label: '# of Votes',
            data: votesArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
    });
  });