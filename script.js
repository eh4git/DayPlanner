console.log("this script is running!");
$(document).ready(function () {

    //check if th document is ready
    console.log("document is ready!");

    //function () first get current time and show it on the header compononet
    var setCurrentTimeOnHeader = function () {
        var currentTimeData = moment().format('LLLL');
        $('#currentDay').text(currentTimeData);
    };
    //add the past, present, future class to appropriate divs
    var checkTense = function() {
        //get the current hour
        var currentHour = moment().hours();
        console.log('currentHour: ',currentHour);
        //get the time block time attr
        var timeBlockArr = $('.row.time-block');
        //loop through and check to add tense class
        for (i = 0; i < timeBlockArr.length; i++) {
            //index time block
            var $targetTimeBlock = $(timeBlockArr[i]);
            //get time attr for each index item
            var targetTimeAttr = $targetTimeBlock.attr('time');
            if (currentHour > targetTimeAttr) {
                $targetTimeBlock.find(".description").addClass("past");
            } else if (currentHour < targetTimeAttr) {
                $targetTimeBlock.find(".description").addClass("future");
            } else if (currentHour === targetTimeAttr) {
                $targetTimeBlock.find(".description").addClass("present");
            }
        }
    }
    //on click of save button store textarea values (stringify will be helpful)

    //on reload of the page get the stored data show it

    //run the function
    setInterval(function(){ 
        setCurrentTimeOnHeader(); 
        checkTense();
    }, 1000);
    
});