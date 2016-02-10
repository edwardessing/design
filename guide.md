Guide
--------------------------------------
Running the app locally
1. node build.js
-
Deploying with surge
1. surge + (path to build folder)

rsync -avh -P edes edward@tower:~/ --exclude 'node_modules' --exclude 'config/config.json'