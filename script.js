

const student = {
  name: 'nomi',
};

// Add getKeys method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};
