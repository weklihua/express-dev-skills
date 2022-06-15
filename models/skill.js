const skills = [
    {id: 001, skill: 'Javascript', done: true},
    {id: 002, skill: 'Python', done: false},
    {id: 003, skill: 'REACT', done: false}, 
    {id: 004, skill: 'html', done: true},
    {id: 005, skill: 'css', done: true},
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }
 