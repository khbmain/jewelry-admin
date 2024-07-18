import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from './lib/firebase';

export const uploadFiles = async (
  files: File[],
  onComplete: Function,
  onProgress: Function,
) => {
  if (!files) return;

  let results: any = files.map((file) => ({
    url: '',
    progress: 0,
    name: file.name,
  }));

  const uploadPromises = Array.from(files).map((file, index) => {
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise<void>((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          results[index].progress = progress;

          onProgress(results);
        },
        (error) => {
          console.error('Upload failed', error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            results[index].url = url;
            resolve();
          });
        },
      );
    });
  });

  Promise.all(uploadPromises)
    .then(() => {
      onComplete(results);
    })
    .catch((error) => {
      console.error('Upload failed', error);
    });
};
