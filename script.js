$(function () { });

/* Variables */
var today = moment().format("dddd, MMMM Do, YYYY");

var now = moment().format("H A");

/* Entries for Workday */
var planWorkday = [
    { time: "0900", event: "" },
    { time: "1000", event: "" },
    { time: "1100", event: "" },
    { time: "1200", event: "" },
    { time: "1300", event: "" },
    { time: "1400", event: "" },
    { time: "1500", event: "" },
    { time: "1600", event: "" },
    { time: "1700", event: "" },
];

/* Current time and rows */
function colorRow(time) {
    var planNow = moment(now, "H A");
    var planEntry = moment(now, "H A");
    if (planNow.isBefore(planEntry) === true) {
        return "future";
    } else if (planNow.isAfter(planEntry) === true) {
        return "past";
    } else {
        return "present";
    }
}

/* Today */
$("currentDay").text(today);

/* Rows */
planWorkday.forEach(function (timeBlock, index) {
    var timeLabel = timeBlock.time;
    var blockColor = colorRow(timeLabel);
    var row =
        '<div class="time-block" id="' +
        index +
        '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
        timeLabel +
        '</div><textarea class="form-control ' +
        blockColor +
        '">' +
        timeBlock.event +
        '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

    /* Container */
    $(".container").append(row);
});

/* Save scheduled events */
$(".saveBtn").on("click", function() {
    
}
