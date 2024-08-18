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
