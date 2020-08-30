import {
  addNewUserActivitySuccess, changeUserActivity, deleteUserActivity,
  getUserActivityError,
  getUserActivityRequest,
  getUserActivitySuccess,
} from '../actions/actions';
import api from '../../../../../api/api';
import { changeElementInArray, deleteElementFromArray } from '../utils/utils';

export const Operation = {
  loadData: () => async (dispatch) => {
    dispatch(getUserActivityRequest());
    try {
      const response = await api.sendRequest('api/activities');
      if (response === 500) {
        throw new Error();
      }
      dispatch(getUserActivitySuccess(response.data));
    } catch (e) {
      dispatch(getUserActivityError());
    }
  },

  addNewData: (data) => async (dispatch) => {
    try {
      const response = await api.sendRequest('api/add', 'POST', data);
      dispatch(addNewUserActivitySuccess(response.data));

      return true;
    } catch (e) {

    }
  },

  deleteData: (id) => async (dispatch, getState) => {
    try {
      // Удаляем из базы
      await api.sendRequest(`api/delete/${id}`, 'DELETE');

      // Удаляем из store
      const { userActivity } = getState();
      const newUserActivity = deleteElementFromArray(id, userActivity);
      dispatch(deleteUserActivity(newUserActivity));
    } catch (e) {

    }
  },

  changeData: (data, id) => async (dispatch, getState) => {
    try {
      // Отправляем запрос на сервер, на изменение элемента
      await api.sendRequest(`api/change/${id}`, 'PUT', data);

      // Обновляем элемент в store
      const newUserActivity = changeElementInArray(id, getState().userActivity, data);
      dispatch(changeUserActivity(newUserActivity));
    } catch (e) {

    }
  },
};
