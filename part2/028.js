let family = {
  "address" : "Seoul",
  members: {},
  addFamily: function(age, name, role) {
    this.members[role] = {
      age : age,
      name : name
    };
  },
  getHeadcount : function() {
    return Object.keys(this.members).length;
  }
};

family.addFamily(30, "chole", "aunt");
family.addFamily(3, "lyn", "nice");
family.addFamily(10, "dang", 'dog');
console.log(family.getHeadcount());