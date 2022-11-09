export const filterNumber = (event, cb) => {
  const min = parseInt(event.target.min);
  const max = parseInt(event.target.max);
  console.log(event.target.value);
  if (!event.target.value) {
    cb(event);
  } else if (event.target.value < min) {
    event.target.value = 1;
    cb(event);
  } else if (!(event.target.value > max)) {
    event.target.value = parseInt(event.target.value);
    cb(event);
  } else {
  }
};
