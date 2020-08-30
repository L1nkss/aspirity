import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import FieldModal from '../field-modal/field-modal';

const Header = (props) => {
  async function formSubmitHandler(data) {
    try {
      return await props.addNewActivity(data);
    } catch (e) {
      return false;
    }
  }
  return (
    <header className="d-flex align-items-center mb-5">
      <h1>BestRunner App</h1>
      <FieldModal
        submitHandler={formSubmitHandler}
        render={(callback) => (
          <Button color="primary ml-auto" onClick={callback}>
            <FontAwesomeIcon icon={faPlus} className="mr-3" />
            Add new activity
          </Button>
        )}
      />
    </header>
  );
};

export default Header;
