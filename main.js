// ******************************************************************
// ----- How To Manipulate Browser History Using JavaScript ? -------
// ******************************************************************

// 🚀 This code snippet demonstrates how to manipulate browser history using JavaScript.
// It modifies the URL and prevents the user from navigating back using the browser's back button.

// 🌐 The following line pushes a new state to the browser history with a null state object and a null title.
//    This effectively changes the URL to the current location without triggering a page reload.
history.pushState(null, null, location.href);

// 🔍 The next part of the code sets up an event listener for the 'popstate' event.
//    When the user navigates back (e.g., by clicking the back button), the function inside window.onpopstate will be executed.
window.onpopstate = function () {
    // ⏩ This line of code forces the browser to navigate forward by one step.
    //    Essentially, it prevents the user from going back to the previous page.
    history.go(1);
};
