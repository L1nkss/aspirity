export default class Adapter {
  static changeIdKey(values) {
    return values.map((value) => {
      return {
        activity: value.activity,
        comment: value.comment,
        distance: value.distance,
        date: value.date,
        // eslint-disable-next-line no-underscore-dangle
        id: value._id,
      };
    });
  }
}
