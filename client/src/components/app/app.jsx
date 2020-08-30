import React, { useEffect } from 'react';
import Header from '../header/header.connect';
import TableUserActivity from '../table-user-activity/table-user-activity.connect';

const App = (props) => {
  const { loading, data } = props;

  // ComponentDidMount
  useEffect(() => {
    props.loadUserActivities();
    // fetchData();
  }, []);

  // ComponentDidUpdate
  useEffect(() => {
  }, [data]);
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="pt-5">
        <Header />
        <TableUserActivity isLoading={loading} data={data} />

      </div>

    </div>
  );
};

export default App;
