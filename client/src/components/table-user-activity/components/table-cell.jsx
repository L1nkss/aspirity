import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import FieldModal from '../../field-modal/field-modal';

const TableCell = (props) => {
  const {
    activity, comment, distance, date, id,
  } = props;

  const userData = {
    activity, comment, distance, date, id,
  };

  async function changeActivity(data) {
    try {
      await props.changeHandler(data, id);

      return true;
    } catch (e) {
      return false;
    }
  }

  return (
    <tr>
      <td className="align-middle">{date}</td>
      <td className="align-middle">{activity}</td>
      <td className="align-middle">
        {distance}
        {' '}
        km
      </td>
      <td className="align-middle">{comment}</td>
      <td>
        <FieldModal
          submitHandler={changeActivity}
          activityInfo={userData}
          render={(callback) => (
            <Button outline size="sm" color="success" className="mr-2" onClick={callback}>
              <FontAwesomeIcon icon={faEdit} />
            </Button>
          )}
        />
        <Button outline size="sm" color="danger" onClick={() => props.deleteHandler(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
};

export default TableCell;
