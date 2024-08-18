#Namaste React

1. 
An app can have 2 dependencies/packages
one is normal dependency and another is dev dependency 

Dev - generally required in development phase
Normal - used in production also


2.
Parcel is bundle used for minification and junking.
It will be used in Dev only not in Production
Therefore we use -D befor installing it

"npm install -D parcel"


3.
Parcel - in package.json
"devDependencies": {
    "parcel": "^2.12.0"
  }

what does ^ means -> it is called carrot -> automatically updates with new version (minor version)
what does ~ means -> it is called tilde -> major or equivalent version (major version)


4.
It is advised to update minor versions rather than major version
so ^ is suggested
But it is not advised to directly update major version as it will create a lot of changes


5.
Use of package-lock.json
if there is ^ then it will install latest minor updated version
package-lock.json keeps a track fo what exactly is installed as a version of that dependency


6.
Package.json - keeps the approx version of it - config for npm
Package-lock.json - keeps exact version of it
node_modules - database of package.json


7.
the integrity has SHA code with dependency in package-lock.json


#IMPORTANT
8.
Node Modules - all the code which we fetch from npm 
It installed all the code of parcel and putting it in node_modules
parcel has it's own dependencies, those dependencies can have more dependencies
this is called TRANSITIVE DEPENDENCY


9.
node_modules is very heavy because it fetches all the code of dependencies
it is like a database of all our dependencies


10.
Every dependency has it's dependency, therefore node_modules is very heavy
We don't put all the dependencies in Git
node_modules is put in .gitignore
any code is which is automatically updated will be marked under .gitignore


11.
package-lock.json - maintaining exact version and integrity of all the packages
if this is there, we can generate our node modules
even if I delete out node modules - npm install


12.
without ^ or ~ it will install exact version of that package


13.
npx parcel index.js - index.html (source file)

npm - calling the command 
npx - for executing the command


14.
we will install react & react-dom as normal production dependency


15.
git push origin main:
This is the correct command to push changes to the main branch on the origin remote repository.


16.
The type="module" attribute in a 
<script> </script> tag tells the browser that the script is a JavaScript module. 
This has several important implications:
Module Loading:
The browser knows to treat the script as a module and will use the module loading mechanism to fetch and execute it. This allows you to use import and export statements to interact with other modules.


17.
Modules are automatically executed in strict mode.


18.
Modules have their own scope, meaning that variables and functions declared within a module are 
not accessible globally unless explicitly exported. 
This helps prevent naming collisions and promotes better code organization.


19. 
Parcel created a dev build 
- created Local Server
- refreshing the page automatically 
- Hot Module Replacement
- It uses a File Watching Algorithm written in C++
- Parcel is also caching things and gives faster build - in .parcel-cache
-Parcel does IMAGE OPTIMIZATION as well
- when creating a production file it will BUNDLE things up
- COMPRESS the file
- Consistent Hashing
- Code Splitting
- Differential Bundling - when app is hosted it should be available for all the broswer ( to support older browser)
- Host app in HTTPs
- Tree Shaking - remove unused code ( minify it)
- Different dev and prod bundles 

20. 
Different dev and prod bundles - npx parcel build index.html  - dist is automatically updated
remove this   "main": "App.js" from package.json
creates development build and dist is updated. (HMR)
we see compresses index.html file, index.css, index.js
it will be highly optimized build for PROD

21.
Parcel's JavaScript compiler, CSS transformer, and source maps implementation are written in Rust for maximum performance. 
It's 10-20x faster than other JavaScript-based tools!