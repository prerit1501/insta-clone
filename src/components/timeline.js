import { useContext, useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import LoggedInUserContext from "../context/logged-in-user";
import usePhotos from "../hooks/use-photos";
import Post from "./post";

export default function Timeline() {
  const { user } = useContext(LoggedInUserContext);
  const { photos } = usePhotos(user);
  const [timeoutState, setTimeoutState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimeoutState(true);
    }, 2000);
  }, []);

  return (
    <div className='container col-span-2'>
      {!photos ? (
        timeoutState ? (
          <p>Follow People to see some posts!</p>
        ) : (
          <Skeleton count={4} width={640} height={500} className='mb-5' />
        )
      ) : (
        photos.map((content) => <Post key={content.docId} content={content} />)
      )}
    </div>
  );
}
