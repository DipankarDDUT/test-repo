module.exports = {
  label: "Connect to Pipedrive_copy",
  mock_input: {},
  input: {
    type: "object",
    properties: {
      // fields schema
      // eg:
      token: {
      type: "string",
      minLength: 1,
        label: "API KEY",
      }
    }
  },
  validate: function (input, output) {
    // auth data will be available in input.auth
    // like var username = input.auth.username
    // callback pattern
    // output(error, success)
    output(null, true);
  }
}