# Tutorial
Note: shopping list takes some time to be generated, around 10-20 seconds. 
An AI powered shopping list generator given days to shop for, daily caloric intake, and dietary restrictions and anything else specific you want!
REQUIRED: ADD API KEY
To run:
1. clone repo, using ```git clone https://github.com/ivan4722/WegGPT.git``` in command line.
2. add API key to ```script.js``` on line 5 at ```const API_KEY = '';```. Make sure the key is in quotes.
3. Open index.html and enter request.

Or use the link here:
https://petalite-plausible-playroom.glitch.me/

# Info
Frontend application, through the form, a prompt is generated through the user input. Then an AJAX post request is sent to the ChatGPT 4 API with the prompt as the body requesting data. Upon response from the API, data is then appended to the response box.

# Possible Implementation
Upon fetch request, in the backend also check with data stored in a db. For example, using mongoose and mongodb, the server can first check if wegmans has it in stock, before appending it to the response. 

# Reference
https://www.youtube.com/watch?v=AuxSJiv4NZU
