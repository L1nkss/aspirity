import React from "react";
import FieldModal from "../modal/modal";
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
    async function formSubmitHandler(data) {
        try {
            return await props.addNewActivity(data);
        } catch (e) {
            return false
        }
    }
  return (
      <header className="d-flex align-items-center mb-5">
          <h1>BestRunner App</h1>
          <FieldModal
              submitHandler={formSubmitHandler}
              render={(callback) => (<Button color="primary ml-auto" onClick={callback}>
                  <FontAwesomeIcon icon={faPlus} className="mr-3" />
                  Add new activity
              </Button>)}
          >
          </FieldModal>
      </header>
  )
};

export default Header;
