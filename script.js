$(function () {});

/* Variables */
var today = moment().format("dddd, MMMM Do, YYYY");

var now = moment().format("H A");

/* Entries for Workday */
var planWorkday = [
    {time: "0900", event: ""},
    {time: "1000", event: ""},
    {time: "1100", event: ""},
    {time: "1200", event: ""},
    {time: "1300", event: ""},
    {time: "1400", event: ""},
    {time: "1500", event: ""},
    {time: "1600", event: ""},
    {time: "1700", event: ""},
];

/* Current time and rows */
function colorRow(time) {
    var planNow = moment(now, "H A");
    var planEntry = moment(now, "H A");
    if (planNow.isBefore(planEntry) === true) {
        return "future";
    }
}