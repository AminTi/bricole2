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
}
