// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	 apiKey: "AIzaSyCLeJeNjiBmuf7CJNqZ6yK1HqDFgYLC-GA",
    authDomain: "elephant-cars-fea3d.firebaseapp.com",
    databaseURL: "https://elephant-cars-fea3d.firebaseio.com",
    projectId: "elephant-cars-fea3d",
    storageBucket: "elephant-cars-fea3d.appspot.com",
    messagingSenderId: "213827759188"
  }
};
