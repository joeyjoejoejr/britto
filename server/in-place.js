Meteor.methods({
  editField: function(args) {
    Stellar.log(args);
    if(user = checkAuth(args.auth)) {
      var slug = args.slug,
        record = window[args.model].findOne({slug: slug}),
        setter = {};
        
      setter[args.key] = args.editable;
      Stellar.log(slug);
      Stellar.log(record);
      Stellar.log(setter);
      
      if (record){
        window[args.model].update({slug: slug}, {$set: setter});
        return true
      }
    }
    return false;
  }
});


