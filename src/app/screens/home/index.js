import {View} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useSelector} from 'react-redux';
import Container from 'components/templates/container';
import Input from 'components/atoms/input';
import Button from 'components/atoms/button';
import Text from 'components/atoms/text';
import {Colors} from 'theme';
import TitleModal from 'components/molecules/titleModal';
import {checkPhoneNumberFunction} from 'services/API';
import s from './home.styles';

const Home = () => {
  const {authenticationState} = useSelector(state => state.reducer);
  const {token} = useSelector(state => state.reducer);

  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const validationSchema = yup.object().shape({
    searchValue: yup
      .string()
      .required('رقم الهاتف مطلوب !')
      .matches('07[0-9]{9}$', 'رقم الهاتف غير صالح !'),
  });

  const onSubmitFunction = (values, actions) => {
    setTitle('');
    setSubTitle('');
    checkPhoneNumberFunction(token, values.searchValue)
      .then(returnedDataForGetMemberInfoFunction => {
        setTitle(`تم ايجاد رقم الهاتف !`);
        setSubTitle(
          `عدد مرات  التبليغ عن هذا الرقم (${returnedDataForGetMemberInfoFunction.data.data}) مرة !`,
        );
        setModalVisible(true);
        actions.setSubmitting(false);
      })
      .catch(e => {
        console.log(e);
        actions.setSubmitting(false);
        typeof e.response.data === 'object'
          ? e.response.data.message == ''
            ? setTitle('رقم الهاتف غير موجود ضمن قاعدة البيانات !')
            : setTitle('حدث خطأ ما !')
          : e == 'AxiosError: Network Error'
          ? setTitle('يوجد خلل في اتصالك بالانترنيت !')
          : setTitle('حدث خطأ ما !'),
          setModalVisible(true);
      });
  };

  return (
    <Formik
      initialValues={{searchValue: ''}}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={onSubmitFunction}
      validationSchema={validationSchema}>
      {({handleChange, handleSubmit, values, isSubmitting, errors}) => (
        <Container
          center
          style={{
            backgroundColor: Colors.primaryColor100,
          }}>
          <Text type="smallTextBold" center color={Colors.slate100}>
            استخدم منصة قفاصة 56 للبحث عن ارقام الاشخاص الذين يحتالون على اصحاب
            الصفحات
          </Text>
          <View style={s.searchInputContainer}>
            <Input
              placeholder={'البحث عن رقم هاتف قفاص'}
              keyboardType="numeric"
              onChangeText={handleChange('searchValue')}
              error={errors.searchValue ? true : false}
              value={values.searchValue}
              errorMessage={errors.searchValue}
              noteMessage={
                !authenticationState ? 'يجب تسجيل الدخول اولا للاستخدام' : ''
              }
              disabled={!authenticationState}
              onSubmitEditing={handleSubmit}
            />
            <Button
              onPress={handleSubmit}
              size={'medium'}
              text={'بحث'}
              disabled={!authenticationState || isSubmitting}
              style={s.searchButton}
              isLoading={isSubmitting}
            />
          </View>
          <View style={s.bottomTextContainer}>
            <Text type="textBold" center color={Colors.white}>
              بمساعدتكم نستطيع القضاء على هذه الظاهرة
            </Text>
          </View>
          <TitleModal
            visible={modalVisible}
            close={() => setModalVisible(false)}
            onPressDone={() => {
              setModalVisible(false);
            }}
            title={title}
            subTitle={subTitle}
          />
        </Container>
      )}
    </Formik>
  );
};

export default Home;
