import axios from 'axios';

const getCsrfToken = () => {
  const metas = document.getElementsByTagName('meta');
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === 'csrf-token') {
      return metas[i].getAttribute('content');
    }
  }
  return '';
};

export const ajaxPut = async (field, putData, token, endpoint) => {
  try {

    const response = await axios.put(endpoint, {field: field, data: putData, token: token}, {
      headers: {
        'X-CSRF-Token': getCsrfToken(),
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export const postDataToGpt = async (key, value) => {
  try {
    const response = await axios.post('/api/v1/p/', {key: key, value: value}, {
      headers: {
        'X-CSRF-Token': getCsrfToken(),
        'Content-Type': 'application/json',
      },
    });

    return response
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};