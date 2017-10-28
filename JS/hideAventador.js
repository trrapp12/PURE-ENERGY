    window.addEventListener("load", setTimeout(hideCar, 2700))

    function hideCar () {
      document.getElementById("hideCarID").className = "hide"
    }

//WHY USE EVENT LISTENER INSTEAD OF WINDOW.ONLOAD....Note the following comment from StackOverflow: 

//1)The way you're binding, you can have just one method attached to an event. You need to add an event listener for what you want.

// window.addEventListener("load", function() { alert("hello!");});
// Setting directly a method to the onload event will replace any previously attached method. But if you use listeners instead, you can have many of them bound to an event.

// 2)If you comment out the onload in your external file, when the document.getElementsByClassName("bar") is called, your document isn't ready yet, then, it will return 0 items.

// 3)Use the addEventListener as I explained in the first point. If you apply this in both places, it will work like a charm.

// https://stackoverflow.com/questions/15751362/window-onload-in-external-script-gets-ignored-in-javascript