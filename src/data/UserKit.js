import fire from "../config/fire";

export default class {
  async signUp(email, password) {
    fire.auth().createUserWithEmailAndPassword(email, password);
  }

  signIn(email, password) {
    fire.auth().signInWithEmailAndPassword(email, password);
  }

  async LogOut() {
    await fire.auth().signOut();
  }

  CreateCollection(collection, uid, payload) {
    fire.firestore().collection(collection).doc(uid).set({ payload });
  }

  createAds(data, collection) {
    fire.firestore().collection(collection).add(data);
  }
  deleteData(data, collectionName) {
    if (data) {
      fire.firestore().collection(collectionName).doc(data).delete();
    }
  }
}
