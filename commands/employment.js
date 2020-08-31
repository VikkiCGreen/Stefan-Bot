var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "employment",
  desc: "Stefan gives advice about employment",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    return "You should update your employment history to youtube. Just frame your monitor.";
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
