README file for Comp 20 - Lab 6 - Messages
By:  Zach Kirsch
Due: 10 March 2015

1. Not all expectations of the assignment have been met
   - Site can parse local data.json file and change the HTML to show the
     messages.
   - Site cannot parse data from http://messagehub.herokuapp.com/messages.json.
     This is because of Javascript's same-origin policy, which disallows my site
     from accessing herokuapp's data via XMLHttpRequest, as they are hosted in
     different places. This sandboxes websites and prevents site & scripts from
     accessing data they should not be. If the herokuapp server enabled CORS
     (Cross-Origin Resource Sharing), then my site should be able to fetch
     the json message data.
2. I have not collaborated with anyone on this assignment.
3. I spent about 2 hours on this assignment.

Note: From the last homework, I tried to not commit as much. However, because
      the site cannot be tested locally and can only run off a server. I had to 
      commit and push with every change that I wanted to check.
