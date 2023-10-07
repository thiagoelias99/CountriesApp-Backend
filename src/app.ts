import { FireStore } from "./infra/firestore"

const docId = "3912D440-BFB9-47DC-8774-022E952B8BA9"

const fireStore = FireStore.getInstance()

fireStore.getUser(docId)