var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "bb8",
  desc: "robots.",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    return "Can BB-8 also be asain and trans? \nI hope so. \nIs there gonna be a sex scene between R2 and BB? \nDoes this mean that c3-po can be gay? \nIs IG-88 into anal? \nI already knew that the gonk droid is totally a hermaphrodite.";
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
