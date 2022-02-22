### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Note 

I had to add cors in app.js for the server in order for the front-end (:3000) to make REST calls to server( :3001). Use the following lines

`
var cors = require('cors');
app.use(cors());
`

## Design changes that I think are needed 

1) White Text is low contrast to the background, making it a little difficult to read. Change the text color to black
2) Buttons are low contrast to background. Changed it to a darker color to improve visibility.
3) No cancel buttons in Register and Forgot Password pages, making it difficult for the user to go back to the login page if needed. I added those buttons.
4) Success messages on the screen.
5) Error messages can be made user friendly
6) Could add logout option (have not added it now)


## API changes 

1) For an actual application a session id is required from the server on successful login.
2) Considering the actual application, role of the user can be sent- if the user is a author or player/reader - after logging in successfully.
3) Error messages from the backend and not just {success: "false"}