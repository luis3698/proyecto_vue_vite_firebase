import { defineStore } from "pinia";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut} from "firebase/auth";
import router from "../router";

export const useUserStore = defineStore("userStore", {
    state: () => ({
        userData: null,
        loadingUser: false,
        loading: false,
    }),
    actions: {
        
        async registerUser(email, password) {
            this.loadingUser = true;
            try {
                const { user } = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
               
                this.userData = { email: user.email, uid: user.uid };
                router.push("/");
            } catch (error) {
                console.log(error);
                //this.userData = {};
            } finally {
                this.loadingUser = false;
            }
        },


        async loginUser(email, password) {
            this.loadingUser = true;
            try {
                const { user } = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
               
                this.userData = { email: user.email, uid: user.uid };
                router.push("/");
            } catch (error) {
                console.log(error);
                //this.userData = {};
            } finally {
                this.loadingUser = false;
                }
        },


        async logoutUser() {
            this.loading = true;
            try {
                await signOut(auth);
                this.userData = null
            } catch (error) {
                console.log(error);
            } finally {
                //this.userData = {};
                this.loading = false;
                router.push("/login");
            }
        },

        currentUser() {
            return new Promise((resolve, reject) => {
                const unsubcribe = onAuthStateChanged(
                    auth,
                    (user) => {
                        if (user) {
                            this.userData = {
                                email: user.email,
                                uid: user.uid,
                            };
                        }
                        resolve(user);
                    },
                    (e) => reject(e)
                );
                // Según la documentación, la función onAuthStateChanged() devuelve
                // La función de cancelación de suscripción para el observador
                unsubcribe();
            });
        },
    },
});