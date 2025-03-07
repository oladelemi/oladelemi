# oladelemi.com

## Template for my personal Website.


Started this back when i was graduating college and it's been interesting to keep up with. 


### This template is built for reuse
To reuse, download the code from the master branch and follow these steps 

- `npm install` - sets up npm environment
- `npm audit fix`  - audits and applies recommended updates to all the supporting packages, you can also use `npm audit fix --force` to override protections and force all updates 
- `npm start`  - launches the web page on localhost

edit files in src to match suit your liking
You don't have to run both of this. unless you are checking to make sure your deployment is working corretcly 
    - `npm run build` - creates your production build 
    - `npm run predeploy` - prepares your deployment build
    If you do, make sure to run `npm run cleanup` so you production build can get done correctly and deployed


- `npm run deploy` - deploys updates to your github gh-pages directory
- `npm run cleanup` - cleans up your code. removes build directory 


finally you can push changes to your git for safekeeping 






This is adapted from the website template created by Michael D'Angelo.
You can visit his Github Repo at https://github.com/mldangelo/
