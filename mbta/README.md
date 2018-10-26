1. Identify what aspects of the work have been correctly implemented and what have not.

Should all work correctly! There's a slight delay when you click the station info window. Also, clicking stations too fast in succession leads to Uncaught Type Errors, but I'm guessing that's only because MBTA API doesn't feed you the information if you request it too often.  Also, every once in a while, the browser decides to forget how to read Google Maps API and doesn't know what "spherical" (used to calculate distance) is, but usually, refreshing the page makes it work again. If not, revoke permission for location, then grant it again after a refresh. This is also an Uncaught Type Error.

2. Identify anyone with whom you have collaborated or discussed the assignment.

Much credit to Google Maps API developer guides, I used their info window document, polyline document, marker document, and etc to learn how to implement. I don't think I copied and pasted anything, except for the function to handle your own geolocation. Located here: https://developers.google.com/maps/documentation/javascript/examples/map-geolocation
Even then, I modified it to fit my own code. Also used stackoverflow for a couple ideas, but did not copy anything.

Credit for the T station icon: https://www.iconfinder.com/icons/1054954/locomotive_subway_train_transit_transportation_icon

Asked classmate Phan Anh for help with XML syntax, just to clarify something we learned in class (I missed one class due to an interview). He did not see my code nor did I see his.

3. Say approximately how many hours you have spent completing the assignment.

Probably 25-30?

