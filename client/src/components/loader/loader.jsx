import React from 'react';
import { Spinner } from 'reactstrap';
import { css } from 'glamor';

const LoaderClass = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const Loader = (props) => {
  const { isAbsolute = false } = props;
  return (
    <div className={`${isAbsolute ? LoaderClass : ''}`}>
      <Spinner color="primary" />
    </div>
  );
};

export default Loader;
