// Add your function in module.exports

module.exports = {

  "name":"look1",

  "label":"Look1",
	// add input data lookup will depend on for
	// eg: if auth is oauth so add access_token inside auth object
	// you can also add other input properties which are mentioned in action/trigger
	"mock_input": {
		"auth": { }
	},




	search: false,
	execute: function (input, options, output) {
		// Making a dummy call to an available service... the rest call response has nothing to do with 
		// the output that will be set... the output will be available if the service call is fine
		const rpnOpts = {
			method: "GET",
			url: "https://softwareag2.pipedrive.com/v1/persons/?api_token"+input.auth.token,
			//url: "https://softwareag2.pipedrive.com/v1/deals(id)?api_token"+input.auth.token;//=b6e44370f4062645dab76a989de15b0e263a89a5",
			headers: {
				"Accept": "application/json"
			},
			json: true
		}

		rpn(rpnOpts)
			.then(function (resp) {
				// the response of the service call will be ignored and a fixed one will be used instead.
				output(null, [{
						"id": "true",
						"value": "True"
					},
					{
						"id": "false",
						"value": "False"
					}
				]);
			})
			.catch(function (err) {
				console.log('+-+---- ERROR ', err);
				// API call failed...
				output(err)
			});

		// DO NOT add another output callback after the request has been done... otherwise, these values would be used
		// and the ones from the request then/catch would be ignored
	}

}

  

