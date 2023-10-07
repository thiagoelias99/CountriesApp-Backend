import * as dotenv from 'dotenv'
dotenv.config()

import { FirebaseApp, initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

export class Firebase {
    private static _instance: Firebase | null = null;
    private static _app: FirebaseApp | null = null;

    private constructor() {
    }

    public static getInstance(): Firebase {
        if (!Firebase._instance) {
            Firebase._instance = new Firebase();
            Firebase._app = initializeApp(firebaseConfig)
        }
        return Firebase._instance;
    }

    public get app(): FirebaseApp {
        return Firebase._app!;
    }   
}