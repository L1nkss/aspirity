import { TYPE_OPTIONS } from '../constants/constants';

export const renderModalSelect = (id, name, callback, active = TYPE_OPTIONS[0]) => {
  return (
    <select className="form-control" defaultValue={active} id={id} name={name} ref={callback()}>
      {TYPE_OPTIONS.map((type) => {
        return <option key={type} value={type}>{type}</option>;
      })}
    </select>
  );
};
