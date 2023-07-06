import {
  collection,
  FieldPath,
  onSnapshot,
  orderBy,
  Query,
  query,
  where,
  WhereFilterOp,
} from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';
import { appFireStore } from '../firebase/config';

type myQueryType = [string | FieldPath, WhereFilterOp, unknown];

const useCollection = <T>(
  transaction: string,
  myQuery?: myQueryType
): { documents: T[]; error: any; loading: boolean } => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const transactionRef = collection(appFireStore, transaction);

  useEffect(() => {
    let firestoreQuery: Query = query(transactionRef, orderBy('createdTime', 'desc'));

    if (myQuery) {
      firestoreQuery = query(transactionRef, where(...myQuery));
    }

    const unsubscribe = onSnapshot(
      firestoreQuery,
      (snapshot: any) => {
        let result: any = [];
        snapshot.docs.forEach((doc: any) => {
          if (doc.data().createdTime) {
            result.push({
              ...doc.data(),
              createdTime: doc.data().createdTime.toDate(),
              id: doc.id,
            });
          } else {
            result.push({ ...doc.data(), id: doc.id });
          }
        });
        setDocuments(result);
        setLoading(false);
      },
      (error: any) => {
        setError(error.message);
      }
    );

    return unsubscribe;
  }, [collection]);

  return { documents, error, loading };
};

export { useCollection };
