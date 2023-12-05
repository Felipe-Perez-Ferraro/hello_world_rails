import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../redux/messages/messagesSlice';

function Greeting() {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.messages);
  const { isFetched } = useSelector((state) => state.messages);

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchMessages());
    }
  }, [dispatch, isFetched]);

  return <>{messages ? <h1>{messages.message}</h1> : <h1>Loading...</h1>}</>;
}

export default Greeting;
