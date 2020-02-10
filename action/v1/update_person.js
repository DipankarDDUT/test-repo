module.exports = {

  name: "update_person",

  title: "Update Person",

  description: "",
  version: "v1",

  input:{
    title: "Update Person",
    type: "object",
    properties: {
  prefex: {
        title: "PersonID",
        displayTitle: "Some prefex",
        description: "",
        type: "string",
        minLength: 0,
        propertyOrder: 1,
        lookup: {
          id: "look1",
          dependencies: ["prefex"]
        }
      },
   name: {
        title : "Name",
        type: "string",
        propertyOrder : 2,


   },     
      
      },
  
    },



  output: {
    title: "output",
  	type: "object",
  	properties: {

    }
  },

  mock_input:{},

  execute: function(input, output){
    var request = require("request");
   // https://developers.pipedrive.com/docs/api/v1/#!/Persons/put_persons_id
  var x="https://softwareag2.pipedrive.com/v1/persons/"+input.prefex+"?api_token="+input.auth.token;//b6e44370f4062645dab76a989de15b0e263a89a5";
  //var x="https://"+input.auth.Domain+".aha.io/api/v1/products";
var y="Bearer "+ "b6e44370f4062645dab76a989de15b0e263a89a5";//input.auth.API_Key;
var pre1=input.prefex;
var dom= input.name;
var name= {
   "name": dom,
   "description": "update person details",
 };
   var options = {
    "method": "PUT",
     //"api_key": y,
     "url": x,
    
   body: {
   "name": dom,
},
 json: true
  
    }
  
  
  request(options, function (error, response, body) {
 try {
           if (body && typeof(body) === "string") {
               body = JSON.parse(body);
           }
       } catch (e) {
           return output(body);
       };
   
     if (response.statusCode === 403) {
           return output("the authentication information is incorrect.");
       }
    if (response.statusCode === 400) {
           return output("there is an error in the construction of the request. The body of the response will contain more detail of the problem.");
       }
   if (response.statusCode === 404) {
     return output(body);
           return output(" the requested record could not be found. This may also occur if the user does not have access to the requested record");
       }
       if (response.statusCode !== 200) {
           return output(body.status.errorDetails);
       }
    if (response.statusCode === 200) {
           return output(body);
         
       }
       output(body);
       
});
  
   
   }

  }
