import { v4 as uuidv4 } from "uuid";
import { app } from "./init";
import {
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { useUser } from "../composables/useGlobals";
import { useLoading } from "../composables/useNotification";
import { savedComp } from "../composables/useStage";
import { useRouter } from "vue-router";

const router = useRouter();
const { user } = useUser();
const { openLoading, closeLoading } = useLoading();
export const db = getFirestore(app);

let result = [];
const pageBlockRef = collection(db, "pageBlocks");

export const savepageBlock = async () => {
  openLoading("Saving Your Blocks, You can view it down pages");
  const usedId = user.value.uid;
  const id = uuidv4();
  await setDoc(doc(db, "pageBlocks", id), {
    pageBlogArr: savedComp.value,
    usedId,
    id,
  });

  closeLoading();
};

// export const editpageBlock = async (pageBlock, id) => {
//   const usedId = user.value.uid;
//   await setDoc(doc(db, "pageBlocks", id), { ...pageBlock, usedId, id });
// };

export const delpageBlock = async (id) => {
  openLoading("Deleting the pageBlock");
  await deleteDoc(doc(db, "pageBlocks", id));
  location.reload();
  closeLoading();
};

export const getUserpageBlock = async () => {
  openLoading("Getting your pages, this shouldn't take long 😙");

  const id = user.value.uid;
  result = [];

  const userpageBlock = query(pageBlockRef, where("usedId", "==", id));
  const querySnapshot = await getDocs(userpageBlock);
  querySnapshot.forEach((doc) => {
    result.push(doc.data());
  });

  const unsubscribe = onSnapshot(pageBlockRef, (snapshot) => {
    result = [];
    snapshot.docChanges().forEach((change) => {
      result.push(change.doc.data());
    });
  });

  closeLoading();

  return result;
};

export const getSinglepageBlock = async (id) => {
  openLoading("Loading up the pageBlock 👽");
  const singlepageBlockRef = doc(db, "pageBlocks", id);
  const docSnap = await getDoc(singlepageBlockRef);
  closeLoading();
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};
