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
    create,
    deleteOne,
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
  }

  function create(skill) {
    skill.id = Date.now() % 1000000
    skill.done = false
    skills.push(skill)
  }

  function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }