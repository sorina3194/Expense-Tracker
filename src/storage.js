import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storage } from "./firebase";

const BUCKET_URL = "gs://expense-tracker-1fb50.appspot.com";
export async function uploadFile(file, userId) {
  const bucket = `${BUCKET_URL}/${userId}/${uuidv4()}-${file.name}`;
  const storageRef = ref(storage, bucket);
  await uploadBytes(storageRef, file);
  return bucket;
}

export async function getDownload(filePath) {
  const storageRef = ref(storage, filePath);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
}
