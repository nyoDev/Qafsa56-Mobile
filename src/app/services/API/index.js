import axios from 'axios';

const baseUrl = 'https://api.qafasa56.com';

export const checkTokenFunction = async token => {
  return await axios.post(
    `${baseUrl}​​/api/User/CheckToken`,
    {},
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  );
};
export const getUserInfoFunction = async token => {
  return await axios.get(`${baseUrl}/api/User/GetUserInfo`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
};
export const signInFunction = async data => {
  return await axios.post(
    `${baseUrl}/api/Auth/UsersLogin`,
    {
      shopOrPagePhone: data.phoneNumber,
      password: data.password,
    },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
};
export const signUpFunction = async data => {
  const signUpForm = new FormData();
  signUpForm.append('FullName', data.fullName);
  signUpForm.append('ShopOrPageName', data.pageName);
  signUpForm.append('ShopOrPagePhone', data.phoneNumber);
  signUpForm.append('ShopOrPageUrl', data.pageUrl);
  signUpForm.append('Password', data.password);

  return await axios.post(`${baseUrl}/api/Auth/RegisterUsers`, signUpForm, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const signIn_UpWithFacebookFunction = async token => {
  return await axios.post(
    `${baseUrl}​​/api/Auth/FacebookLogin?facebookToken=${token}`,
    {},
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
};
export const signIn_UpWithGoogleFunction = async token => {
  return await axios.post(
    `${baseUrl}​​/api/Auth/GoogleLogin?Token=${token}`,
    {},
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
};

export const getMyPhoneNumbersListFunction = async (
  token,
  pageNumber,
  PageSize,
) => {
  return await axios.get(
    `${baseUrl}/api/User/GetQafasPhonesReports?PageNumber=${pageNumber}&PageSize=${PageSize}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  );
};

export const editUserInfoFunction = async (token, data) => {
  return await axios.post(
    `${baseUrl}​/api/User/EditUser`,
    {
      fullName: data.fullName,
      shopOrPageName: data.pageName,
      shopOrPageUrl: data.pageUrl,
      shopOrPagePhone: data.phoneNumber,
      password: data.password,
    },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  );
};
export const checkPhoneNumberFunction = async (token, phoneNumber) => {
  return await axios.get(
    `${baseUrl}/api/User/CheckQafasPhone?PhoneNumber=${phoneNumber}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  );
};
export const addQafasFunction = async (token, data) => {
  const addQafasForm = new FormData();
  addQafasForm.append('QafasName', data.qafasName);
  addQafasForm.append('QafasPhone', data.qafasPhoneNumber);
  addQafasForm.append('Description', data.qafasDescription);
  data.qafasAttachments.map(value => {
    addQafasForm.append('Files', {
      name: value.fileName,
      type: value.type,
      uri: value.uri,
    });
  });
  return await axios.post(
    `${baseUrl}/api/User/AddQafasPhonesReports`,
    addQafasForm,
    {
      headers: {
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token,
      },
    },
  );
};
