// @ts-ignore
import faker from 'faker'; 

// generate data
faker.seed(0);
export const data = [...new Array(100)].map(() => ({
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
}));
