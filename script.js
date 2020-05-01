var savedTextObj =localStorage.getItem("savedTextObj")? JSON.parse(localStorage.getItem("savedTextObj")) : {};
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
    var checkTense = function () {
        //get the current hour
        var currentHour = moment().hours();
        console.log('currentHour: ', currentHour);
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
            } else if (currentHour == targetTimeAttr) {
                $targetTimeBlock.find(".description").addClass("present");
            }
        }
    }
    //on click of save button store textarea values (stringify will be helpful)

    $(".saveBtn").on("click", function () {
        event.preventDefault();
        var parent = this.parentNode;
        var textInput = parent.childNodes[3];
        var data = textInput.value
        var textsave = parent.id;
        savedTextObj[textsave] = data;
        localStorage.setItem("savedTextObj", JSON.stringify(savedTextObj))
       
        console.log(savedTextObj[textsave] = data)
        //save input texttext to local storage
    });
    //on reload of the page get the stored data show it
    console.log(savedTextObj)
    //run the function
    // setInterval(function () {
        setCurrentTimeOnHeader();
        checkTense();
    // }, 1000);

});