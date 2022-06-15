const skills = [
    {id: 1, skill: 'Javascript', done: true},
    {id: 2, skill: 'Python', done: false},
    {id: 3, skill: 'REACT', done: false}, 
    {id: 4, skill: 'html', done: true},
    {id: 5, skill: 'css', done: true},
  ];
  
  module.exports = {
    getAll,
    getOne,
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
  }