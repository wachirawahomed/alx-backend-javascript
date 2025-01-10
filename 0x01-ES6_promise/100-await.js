import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto('photo.jpg'); // Example file name
    const user = await createUser('Guillaume', 'Salva'); // Example user info
    return {
      photo: photo,
      user: user,
    };
  } catch (error) {
    // Return an empty object if any promise fails
    return {
      photo: null,
      user: null,
    };
  }
}
