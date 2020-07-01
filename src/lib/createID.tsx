let id = parseInt(window.localStorage.getItem('max_id') || '0');
const createID = () => {
  id += 1;
  window.localStorage.setItem('max_id', JSON.stringify(id));
  return id;
};

export {createID};