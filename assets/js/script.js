// function to get information from The Bored API
const randomActivity = async () => {
    // fetches the value by activity type in the dropdown menu
    let activity = await fetch("https://www.boredapi.com/api/activity?type="+ document.getElementById("activity").value)
    let activityResult = await activity.json()
    
    // creates an activityDisplay variable to assign to the <span> tag that the 
    let activityDisplay = document.getElementById("activity-display")
    
    // if user does not select an activity type and selects the go button then the innerHTML will display the following
    // if we get a return from the API then it displays the activity object from The Bored API
    if (activityResult.activity === undefined) {
        activityDisplay.innerHTML = "{ Please select and activity from the drop-down menu above! }"
    } else {
        activityDisplay.innerHTML = activityResult.activity
    }
}