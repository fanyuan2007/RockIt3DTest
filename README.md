# Rock-It-3D
Have you ever wanted to create a lego city and showcase it to your friends all over the world? Let's create a virtual 3D lego world without spending a penny. The only limitation is your imagination!

## Create a new react project
### Prerequisites
- [Node.js](https://nodejs.org/en/) install version v16.15.0 !! (other versions don't work well!!)
- Check the installed node.js version in cmd window
    - `$npm -v`
- Why need node.js
    - React.js use npm (Node Package Modules) to maintain the javascript environment, and npm comes from node.js

### Create a new react project
- **Note: the project is already created for this repo, you don't need to do it for this project!**
- Steps are from the [official react website](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
- `$npx create-react-app your-new-app-name`
- `$cd your-new-app-name`
- `$npm start`

## How to run the project
- Check out the project from the repo and open the repo folder through VSCode
- Go to the project folder: `$cd rock-it-3d`
- Install the packages: `$npm install`
- Run the project: `$npm start`
    - If you have setup the default browser, the testing page supposed to be shown up on a new browser page

## How to deploy the website to Vercel
- Sign up on [Vercel's website](https://vercel.com/) (It's free!) with your email
- Install the Vercel CLI
    - Navigate to the react project directory (e.g.: `$cd rock-it-3d`)
    - Intall vercel: `$npm install -g vercel`
- Login to Vercel: `$vercel login`
    - Enter the email address you registered to Vercel's website when Vercel asks on VSCode terminal cmd
    - You will receive an verification email from Vercel, login to the email (e.g. Gmail) and click on the verify button in the email
- Run Vercel to deploy: `$vercel`
    - Keep hitting ENTER for all questions with using default answer
- The deployed website url for sharing will be listed besides *Production:* line