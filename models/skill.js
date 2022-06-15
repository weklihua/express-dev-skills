const skills = [
    {id: 125223, skill: 'Javascript', done: true},
    {id: 127904, skill: 'Python', done: false},
    {id: 139608, skill: 'REACT', done: false}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }
 