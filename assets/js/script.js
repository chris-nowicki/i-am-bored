// function to get information from The Bored API
function randomActivity() {    
    fetch("https://www.boredapi.com/api/activity?type=" + document.getElementById("activity").value)
        .then((response) => response.json())
        .then((data) => {
            // creates an activityDisplay variable to assign to the <span> tag that the 
            let activityDisplay = document.getElementById("activity-display")
            
            // if user does not select an activity type and selects the go button then the innerHTML will display the "Please select activity" message
            // if we get a return from the API then it displays the activity object from The Bored API
            if (data.activity === undefined) {
                activityDisplay.innerHTML = "{ Please select and activity from the drop-down menu above! }"
            } else {
                activityDisplay.innerHTML = data.activity
            }
        })
}