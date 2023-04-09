export const getDate = function () {

  const today = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);

};

export const getDay = function () {

  const today = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);

};
