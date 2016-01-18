Meteor.startup(function() {
  ServiceConfiguration.configurations.update(
    { "service": "linkedin" },
    {
      $set: {
        "clientId": "77sxz6rsxisxut",
        "secret": "WFbPs57yKGsgNbOC"
      }
    },
    { upsert: true }
  );
});