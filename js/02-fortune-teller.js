/*eslint-env browser*/

function tellFortune(childrenNumber, partnerName, location, jobTitle) {
    "use strict";
    window.document.write("You will be a " + jobTitle + " in the city " + location + ", and married to " + partnerName + " with " + childrenNumber + " kids.<br>");
    
}

tellFortune("3", "Nancy", "Toronto", "Rapper");
tellFortune("5", "Halle", "Paris", "Painter");
tellFortune("7", "Scarlett", "London", "Producer");
