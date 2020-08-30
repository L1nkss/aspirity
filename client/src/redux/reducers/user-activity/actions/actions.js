import ActionType from '../constants/constants';
import Adapter from './utils/adapter';

// Запрос на получение информации об  активности пользователя
export const getUserActivityRequest = () => ({ type: ActionType.GET_USER_ACTIVITY_REQUEST });

// Запрос на получение информации прошел успешно
export const getUserActivitySuccess = (data) => ({ type: ActionType.GET_USER_ACTIVITY_SUCCESS, payload: Adapter.changeIdKey(data) });

// Ошибка при получении информации
export const getUserActivityError = () => ({ type: ActionType.GET_USER_ACTIVITY_ERROR });

// Запрос на добавление прошел успешно
export const addNewUserActivitySuccess = (data) => ({ type: ActionType.ADD_NEW_USER_ACTIVITY_SUCCESS, payload: data });

// Удалить активность из списка
export const deleteUserActivity = (data) => ({ type: ActionType.DELETE_USER_ACTIVITY, payload: data });

// Запрос на изменение элемента в списке
export const changeUserActivity = (data) => ({ type: ActionType.CHANGE_USER_ACTIVITY, payload: data });
