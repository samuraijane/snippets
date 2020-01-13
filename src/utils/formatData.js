// We format the data as a string only when it needs to be sent to the server

const formatData = (formData, asString) => {
  const data = {};
  for (let key of formData.keys()) {
    data[key] = formData.get(key);
  }
  if (asString) {
    return JSON.stringify(data, null, 2);
  }
  return data;
};

export default formatData;
