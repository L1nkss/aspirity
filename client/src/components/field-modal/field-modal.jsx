import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { renderModalSelect } from '../../utils/utils';
import Loader from '../loader/loader';

import 'react-datepicker/dist/react-datepicker.css';

const FieldModal = (props) => {
  const { handleSubmit, register } = useForm();
  const {
    className,
    activityInfo,
  } = props;

  /* Значения по умолчаю для элементов формы
    * Если мы добавляем новый элемент, то берутся default значения
    * Если мы изменяем существующий элемент, подставляем данные оттуда
    */
  const defaultValues = {
    date: moment(activityInfo ? activityInfo.date : new Date()).format('y-MM-DD'),
    type: activityInfo ? activityInfo.activity : null,
    comment: activityInfo ? activityInfo.comment : '',
    distance: activityInfo ? activityInfo.distance : 5,
  };

  const modalHeader = activityInfo ? 'Edit your activity' : 'Add new activity';

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = () => setModal(!modal);

  async function formSubmitHandler(data) {
    setLoading(true);
    const activity = {
      date: moment(data.date).format('D MMMM y'),
      distance: Number(data.distance),
      comment: data.comment,
      activity: data.type,
    };

    const response = await props.submitHandler(activity);

    if (response) {
      setLoading(false);
      toggle();
    }
  }
  const buttonSubmitText = activityInfo && !loading ? 'Edit' : 'Add';
  return (
    <>
      {props.render(toggle)}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{modalHeader}</ModalHeader>
        <ModalBody>
          <form className="form" onSubmit={handleSubmit(formSubmitHandler)}>
            <div className="form-group">
              <div className="form-row">
                <div className="col-md-5">
                  <label htmlFor="date">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    ref={register()}
                    defaultValue={defaultValues.date}
                    className="form-control"
                  />
                </div>
                <div className="col-md-7">
                  <label htmlFor="type" className="">
                    Type
                  </label>
                  {renderModalSelect('type', 'type', register, defaultValues.type)}
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="comment" className="">
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                className="form-control"
                placeholder="Add your comment"
                ref={register()}
                defaultValue={defaultValues.comment}
              />
            </div>
            <div className="d-flex justify-content-around form-group">
              <div className="col-sm-5">
                <label htmlFor="distance" className="">Distance (km)</label>
                <input
                  id="distance"
                  required=""
                  step="0.1"
                  min="0"
                  name="distance"
                  ref={register()}
                  type="number"
                  className="form-control"
                  defaultValue={defaultValues.distance}
                />
              </div>
            </div>
            <div className="form-group">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-outline-success btn-block"
              >
                {loading ? <Loader /> : buttonSubmitText}
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default FieldModal;
