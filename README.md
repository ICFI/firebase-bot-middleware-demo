## Firebase deployment instructions:

- Install firebase see https://firebase.google.com/docs/functions/get-started#set_up_and_initialize_functions_sdk
- Go to the firebase console and create a new project; https://console.firebase.google.com/
- Run `firebase login`
- Run `firebase init functions`
- Choose Functions
- Choose the above project that you created
- DON'T overwrite package.json `N`
- DON'T overwrite index.js `N`
- Install dependencies with npm now `Y`
- Run `firebase deploy --only functions`
- Test your endpoint `curl -X GET YOUR_URL`