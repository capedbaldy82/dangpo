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

type Props = {
  transaction: string;
  myQuery?: myQueryType;
};

const useCollection = <T>(
  transaction: string,
  myQuery?: myQueryType
): { documents: T[]; error: any; loading: boolean } => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let q: Query;

    if (myQuery) {
      q = query(collection(appFireStore, transaction), where(...myQuery));
    } else {
      q = collection(appFireStore, transaction);
    }

    const unsubscribe = onSnapshot(
      myQuery ? q : collection(appFireStore, transaction),
      (snapshot: any) => {
        let result: any = [];
        snapshot.docs.forEach((doc: any) => {
          result.push({ ...doc.data(), id: doc.id });
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
