var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "ralph?",
  desc: "does ralph things",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    return 'Ralph is eating, probably.';
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
