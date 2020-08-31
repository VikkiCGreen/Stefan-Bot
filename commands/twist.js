var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "twist",
  desc: "what a twist!",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    return "Yeah. The twist is, we all gettin fucked.";
  },
  args: [
    {
      name: 'testarg',
      desc: 'A test argument',
      type: 'string',
      required: false,
      default: 'testarg isn\'t defined'
    }
  ],
  flags: [
    {
      name: 'testflag',
      desc: 'A test flag',
      alias: 't',
      type: 'boolean',
      default: false
    }
  ]
});
