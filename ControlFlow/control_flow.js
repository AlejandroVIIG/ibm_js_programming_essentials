let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ?
    "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let companyRole = "employee";

switch(companyRole){
    case "employee":
        console.log(`Employee is eligible for "Dietary Services"`);
        break;
    case "enrolled member":
        console.log(`Members have access to "Dietary Services" and one-on-one interactions with dietician`);
        break;
    case "suscriber":
        console.log(`Suscribers have partial access to "Dietary Services"`);
        break;
    default:
        console.log("Please enroll or suscribe first to avail this facility")
}