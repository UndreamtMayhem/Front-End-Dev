import moment from 'moment';

function greet() {
    var day = moment().format('dddd');
    return 'Have a great ' + day + '!';
};

export default greet;