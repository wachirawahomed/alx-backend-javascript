import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const queue = [];

  try {
    const photo = await uploadPhoto(fileName);
    queue.push({ status: 'fulfilled', value: photo });
  } catch (error) {
    queue.push({ status: 'rejected', value: error.message });
  }

  try {
    const user = await createUser(firstName, lastName);
    queue.push({ status: 'fulfilled', value: user });
  } catch (error) {
    queue.push({ status: 'rejected', value: error.message });
  }

  queue.push('Guardrail was processed');
  return queue;
}
