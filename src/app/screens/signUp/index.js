import {View} from 'react-native';
import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as yup from 'yup';
import Container from 'components/templates/container';
import Text from 'components/atoms/text';
import Input from 'components/atoms/input';
import Button from 'components/atoms/button';
import TitleModal from 'components/molecules/titleModal';
import {signUpFunction} from 'services/API';
import {screensNames} from 'constants/navigation';
import {Colors} from 'theme';
import s from './signUp.styles';

const SignUp = () => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  const {navigate, reset} = useNavigation();

  const pageNameInputRef = useRef();
  const pageUrlInputRef = useRef();
  const pagePhoneNumberInputRef = useRef();
  const passwordInputRef = useRef();

  const onSubmitFunction = (values, actions) => {
    setTitle('');
    setSubTitle('');
    signUpFunction(values)
      .then(() => {
        actions.setSubmitting(false);
        setTitle('تم انشاء الحساب بنجاح');
        setSubTitle('سيتم تحويلك الى صفحة تسجيل الدخول !');
        setSignUpModalVisible(true);
        setTimeout(() => {
          reset({
            index: 0,
            routes: [{name: screensNames.signIn}],
          });
        }, 3000);
      })
      .catch(e => {
        actions.setSubmitting(false);
        console.log(values);
        typeof e.response.data === 'object'
          ? e.response.data.message === 'الحساب موجود مسبقا'
            ? (setTitle('الحساب موجود مسبقا !'), setSignUpModalVisible(true))
            : (setTitle('حدث خطأ ما لم يتم انشاء الحساب !'),
              setSignUpModalVisible(true))
          : (setTitle('حدث خطأ ما لم يتم انشاء الحساب !'),
            setSignUpModalVisible(true));
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
        fullName: '',
        pageName: '',
        pageUrl: '',
        phoneNumber: '',
        password: '',
      }}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={onSubmitFunction}
      validationSchema={validationSchema}>
      {({handleChange, handleSubmit, values, isSubmitting, errors}) => (
        <Container
          withPadding
          style={{
            backgroundColor: Colors.primaryColor100,
          }}
          StickyBottomComponent={() => {
            return (
              <View style={s.bottomSection}>
                <Button
                  onPress={handleSubmit}
                  size={'big'}
                  text={'التسجيل'}
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                />
                <View style={s.bottomTextsContainer}>
                  <Text type="smallTextRegular" color={Colors.slate100}>
                    لديك حساب سابقا ؟
                  </Text>
                  <Text
                    type="smallTextBold"
                    textStyle={s.createAccountNow}
                    color={Colors.slate100}
                    onPress={() => navigate(screensNames.signUp)}>
                    تسجيل الدخول
                  </Text>
                </View>
              </View>
            );
          }}>
          <View>
            <View>
              <Text type="header4" textStyle={s.header}>
                سجل الأن
              </Text>
              <Text type="textRegular" color={Colors.iron}>
                سجل معنا الان للتمتع بمميزات المنصة .
              </Text>
            </View>
            <View style={s.inputsContainer}>
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
                noteMessage={
                  'ملاحظة: كلمة المرور يجب ان تحتوي على الاقل 5 احرف'
                }
                error={errors.password ? true : false}
                value={values.password}
                errorMessage={errors.password}
                secureTextEntry
                inputRef={passwordInputRef}
                returnKeyType="go"
                onSubmitEditing={handleSubmit}
              />
            </View>
          </View>
          <TitleModal
            visible={signUpModalVisible}
            close={() => setSignUpModalVisible(false)}
            onPressDone={() => {
              setSignUpModalVisible(false);
            }}
            title={title}
            subTitle={subTitle}
          />
        </Container>
      )}
    </Formik>
  );
};

export default SignUp;
