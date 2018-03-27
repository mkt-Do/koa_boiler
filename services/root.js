const root = async () => {
  const obj = {
    'hello': 'Hello World\n',
  };
  return JSON.stringify(obj);
};

export default {
  root: root(),
};

