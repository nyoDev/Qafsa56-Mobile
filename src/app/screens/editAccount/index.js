import {View} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';
import Container from 'components/templates/container';
import Input from 'components/atoms/input';
import Button from 'components/atoms/button';
import TitleModal from 'components/molecules/titleModal';
import {getUserInfoFunction, editUserInfoFunction} from 'services/API';
import {setUserInfo} from 'services/redux/actions';
import {Colors} from 'theme';
import s from './editAccount.styles';

const EditAccount = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userData, setUserData] = useState({});
  const {token} = useSelector(state => state.reducer);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');

  const pageNameInputRef = useRef();
  const pageUrlInputRef = useRef();
  const pagePhoneNumberInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();

  const setUserInfoFunction = returnedData =>
    dispatch(setUserInfo(returnedData));

  useEffect(() => {
    getUserInfoFunction(token)
      .then(returnedDataForUserInfoFunction => {
        setUserData(returnedDataForUserInfoFunction.data.data);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(e);
        setIsError(true);
      });
  }, []);

  const onSubmitFunction = (values, actions) => {
    editUserInfoFunction(token, values)
      .then(() => {
        getUserInfoFunction(token)
          .then(returnedDataForUserInfoFunction => {
            actions.setSubmitting(false);
            setTitle('تم تعديل المعلومات بنجاح !');
            setModalVisible(true);
            setUserData(returnedDataForUserInfoFunction.data.data);
            setUserInfoFunction(returnedDataForUserInfoFunction.data.data);
          })
          .catch(e => {
            console.log(e);
          });
      })
      .catch(e => {
        console.log(e);
        actions.setSubmitting(false);
        e == 'AxiosError: Network Error'
          ? setTitle('يوجد خلل في اتصالك بالانترنيت !')
          : setTitle('حدث خطأ ما لم يتم تعديل المعلومات !'),
          setModalVisible(true);
      });
  };

  const errorButtonFunction = () => {
    setIsError(false);
    setIsLoading(true);
    getUserInfoFunction(token)
      .then(returnedDataForUserInfoFunction => {
        setUserData(returnedDataForUserInfoFunction.data.data);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(e);
        setIsError(true);
      });
  };
  const validationSchema = yup.object().shape({
    fullName: yup
      .string()
      .required('الأسم الكامل مطلوب !')
      .min(5, 'على الأقل 5 احرف !')
      .max(25, 'على الأكثر 25 حرف !'),
    pageName: yup
      .string()
      .required('اسم الصفحة مطلوب !')
      .max(25, 'على الأكثر 25 حرف !'),
    pageUrl: yup
      .string()
      .url(
        'رابط الصفحة غير غير صالح ! يجب اني يكون بهذه الصيغة (https://example.com/example)',
      )
      .required('رابط الصفحة مطلوب !'),
    phoneNumber: yup
      .string()
      .required('رقم الهاتف مطلوب !')
      .matches('07[0-9]{9}$', 'رقم الهاتف غير صالح !'),
    password: yup
      .string()
      .required('كلمة المرور مطلوبة !')
      .min(5, 'على الأقل 5 احرف !'),
  });

  return (
    <Formik
      initialValues={{
        fullName: userData.fullName,
        pageName: userData.shopOrPageName,
        pageUrl: userData.shopOrPageUrl,
        phoneNumber: userData.shopOrPagePhone,
        password: userData.password,
      }}
      validateOnBlur={true}
      validateOnChange={true}
      enableReinitialize={true}
      onSubmit={onSubmitFunction}
      validationSchema={validationSchema}>
      {({handleChange, handleSubmit, values, isSubmitting, errors}) => (
        <Container
          withPadding
          isError={isError}
          isLoading={isLoading}
          onPressErrorButton={errorButtonFunction}
          style={{
            backgroundColor: Colors.primaryColor100,
          }}
          StickyBottomComponent={() => {
            return (
              <View style={s.bottomSection}>
                <Button
                  onPress={handleSubmit}
                  size={'big'}
                  text={'حفظ'}
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                />
              </View>
            );
          }}>
          <Input
            label={'الأسم الكامل'}
            placeholder={'ادخل الأسم الكامل'}
            keyboardType="default"
            onChangeText={handleChange('fullName')}
            error={errors.fullName ? true : false}
            value={values.fullName}
            errorMessage={errors.fullName}
            returnKeyType="next"
            onSubmitEditing={() => {
              pageNameInputRef.current.focus();
            }}
          />
          <Input
            label={'اسم الصفحة'}
            placeholder={'ادخل اسم الصفحة'}
            keyboardType="default"
            onChangeText={handleChange('pageName')}
            error={errors.pageName ? true : false}
            value={values.pageName}
            errorMessage={errors.pageName}
            inputRef={pageNameInputRef}
            returnKeyType="next"
            onSubmitEditing={() => {
              pageUrlInputRef.current.focus();
            }}
          />
          <Input
            label={'رابط الصفحة'}
            placeholder={'ادخل رابط الصفحة'}
            keyboardType="default"
            onChangeText={handleChange('pageUrl')}
            error={errors.pageUrl ? true : false}
            value={values.pageUrl}
            errorMessage={errors.pageUrl}
            inputRef={pageUrlInputRef}
            returnKeyType="next"
            onSubmitEditing={() => {
              pagePhoneNumberInputRef.current.focus();
            }}
          />
          <Input
            label={'رقم الهاتف'}
            placeholder={'ادخل رقم الهاتف'}
            keyboardType="numeric"
            onChangeText={handleChange('phoneNumber')}
            error={errors.phoneNumber ? true : false}
            value={values.phoneNumber}
            errorMessage={errors.phoneNumber}
            inputRef={pagePhoneNumberInputRef}
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current.focus();
            }}
          />
          <Input
            label={'كلمة المرور'}
            placeholder={'ادخل كلمة المرور'}
            onChangeText={handleChange('password')}
            noteMessage={'ملاحظة: كلمة المرور يجب ان تحتوي على الاقل 5 احرف'}
            error={errors.password ? true : false}
            value={values.password}
            errorMessage={errors.password}
            secureTextEntry
            inputRef={passwordInputRef}
            returnKeyType="go"
            onSubmitEditing={handleSubmit}
          />
          <TitleModal
            visible={modalVisible}
            close={() => setModalVisible(false)}
            onPressDone={() => {
              setModalVisible(false);
            }}
            title={title}
          />
        </Container>
      )}
    </Formik>
  );
};

export default EditAccount;
