import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import ProfilePresenter from './ProfilePresenter';
import { GET_USER, LOG_OUT } from './ProfileQueries';
import Loader from '../../Components/Loader';

export default withRouter(
  ({
    match: {
      params: { username },
    },
  }) => {
    const { data, loading } = useQuery(GET_USER, {
      variables: { username: username },
    });
    const [logOut] = useMutation(LOG_OUT);

    if (loading) {
      return (
        <>
          <Loader />
        </>
      );
    } else if (!loading) {
      return <ProfilePresenter loading={loading} logOut={logOut} data={data} />;
    }
    return null;
  }
);
