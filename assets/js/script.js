$(function () { });

/*flag variable*/
var now = moment().format("H A");

/* Variables */
setInterval(() => {
    var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    document.querySelector("#currentDay").textContent = today
}, 1000)

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
    var planNow = moment().hour();
    var planEntry = parseInt(`${time[0]}${time[1]}`);
    console.log(planEntry);
    if (planNow < planEntry) {
        return "future";
    } else if (planNow > planEntry) {
        return "past";
    } else {
        return "present";
    }
}

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
$(".saveBtn").on("click", function () {

    var blockID = parseInt(
        $(this)
            .closest(".time-block")
            .attr("id")
    );
    var userEntry = $.trim(
        $(this)
            .parent()
            .siblings("textarea")
            .val()
    );
    planWorkday[blockID].event = userEntry;

    /* Local storage */
    localStorage.setItem("workDay", JSON.stringify(planWorkday));

    /* Check local storage */
    var workEvents = JSON.parse(localStorage.getItem("workDay"));
    if (workEvents) {
        planWorkday = workEvents;
    }
});