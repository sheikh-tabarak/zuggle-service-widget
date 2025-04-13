# ![Zuugle Services Logo](https://zuugle-services.com/wp-content/uploads/2024/03/Zuugle_Services_GmbH_Logo_quer.svg)

## Using the Widget

### Method 1: Using the Widget

To use the widget wherever your business needs it to show up, follow these steps:

1. **Add the JavaScript file**:
   Include the following script tag in your HTML to load the widget:

   ```html
   <script src="zuugleWidget.js"></script>
   ```

2. **Add personalized variables for the API request**:
   Define the configuration for the widget by adding the following script with your personalized data:
   ```html
   <script>
     var journeyConfig = {
       userStartLocationType: "address",
       activityStartLocation: "47.71557523759539, 15.8040452544133",
       activityStartLocationType: "coordinates",
       activityEndLocation: "47.68219100889535, 15.644807818859727",
       activityEndLocationType: "coordinates",
       activityEarliestStartTime: "09:00:00",
       activityLatestEndTime: "18:00:00",
       activityDurationMinutes: "210"
     };
   </script>
   ```

3. **Add the container for the widget**:
   Place the following `div` element in your HTML where you want the widget to appear:
   ```html
   <div id="modalContainer"></div>
   ```

### Method 2: Using the Widget as a Popup

To use the widget as a popup, follow these steps:

1. **Add the JavaScript file**:
   Include the following script tag in your HTML to load the popup widget:
   ```html
   <script src="zuuglePopupWidget.js"></script>
   ```

2. **Add personalized variables for the API request**:
   Define the configuration for the popup widget by adding the following script with your personalized data:
   ```html
   <script>
     var journeyConfig = {
       userStartLocationType: "address",
       activityStartLocation: "47.71557523759539, 15.8040452544133",
       activityStartLocationType: "coordinates",
       activityEndLocation: "47.68219100889535, 15.644807818859727",
       activityEndLocationType: "coordinates",
       activityEarliestStartTime: "09:00:00",
       activityLatestEndTime: "18:00:00",
       activityDurationMinutes: "210"
     };
   </script>
   ```

3. **Add the button to open the popup**:
   Place the following `div` element in your HTML where you want the button to show:
   ```html
   <div class="search-icon" id="openModalBtn">&#9776;</div>
   ```

4. **Add the container for the popup**:
   Include the following `div` element in your HTML to hold the popup content:
   ```html
   <div id="modalContainer"></div>
   ```

### Conclusion

By following the above steps, you can easily integrate the Zuugle widget into your website either as a standard widget or as a popup. Make sure to customize the `journeyConfig` variables to fit your specific needs. 

Please note that if the `journeyConfig` variable is not provided or is incorrectly configured, an alert box will appear when the search is initiated. Therefore, double-check that you have provided this variable correctly and completely.