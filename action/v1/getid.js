module.exports = {

  name: "getid",

  title: "Getid",

  description: "",
  version: "v1",

  input:{
    title: "Getid",
    type: "object",
    properties: {

    }
  },

  output: {
    title: "output",
  	type: "object",
  	properties: {

    }
  },

  mock_input:{},

  execute: function(input, output){
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    // your code here

    output(null, { data : "OK"});
  }

}
