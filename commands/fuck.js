var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "fuck!",
  desc: "Stefan wants to do this",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    return 'UHHH Baby want to fuck!';
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
