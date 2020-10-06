export const generateInstances = (classObject, count) => {
  const instances = [];
  for (let i = 0; i < count; i++) {
    instances.push(new classObject());
  }

  return instances;
}
