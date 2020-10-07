export const generateInstances = (ClassObject, count) => {
  const instances = [];
  for (let i = 0; i < count; i++) {
    instances.push(new ClassObject());
  }

  return instances;
};
