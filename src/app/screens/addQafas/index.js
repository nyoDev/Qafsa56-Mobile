import {View} from 'react-native';
import React, {useState, useRef} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useSelector} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import Container from 'components/templates/container';
import Input from 'components/atoms/input';
import FileInput from 'components/atoms/fileInput';
import TitleModal from 'components/molecules/titleModal';
import Button from 'components/atoms/button';
import {addQafasFunction} from 'services/API';
import {Colors} from 'theme';
import s from './addQafas.styles';

const AddQafas = () => {
  const {token} = useSelector(state => state.reducer);

  const [modalVisible, setModalVisible] = useState(false);

  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');

  const qafasPhoneNumberInputRef = useRef();
  const qafasDescriptionInputRef = useRef();

  const validationSchema = yup.object().shape({
    qafasName: yup
      .string()
      .required('اسم القفاص مطلوب !')
      .min(5, 'على الأقل 5 احرف !')
      .max(25, 'على الأكثر 25 حرف !'),
    qafasPhoneNumber: yup
      .string()
      .required('رقم هاتف القفاص مطلوب !')
      .matches('07[0-9]{9}$', 'رقم الهاتف غير صالح !'),
    qafasDescription: yup.string().max(250, 'على الأكثر 250 حرف !'),
    qafasAttachments: yup.array().min(1, 'يرجى اضافة مرفقات !'),
  });

  const onSubmitFunction = (values, actions) => {
    addQafasFunction(token, values)
      .then(returnedData => {
        actions.setSubmitting(false);
        actions.resetForm();
        setTitle(`تم اضافة الرقم بنجاح !`);
        setModalVisible(true);
      })
      .catch(e => {
        actions.setSubmitting(false);
        console.log(e);
        typeof e.response.data === 'object'
          ? e.response.data.message == 'لقد قمت با اضافه هذا الرقم من قبل'
            ? setTitle('لقد قمت باضافة هذا الرقم سابقا !')
            : setTitle('حدث خطأ ما !')
          : e == 'AxiosError: Network Error'
          ? setTitle('يوجد خلل في اتصالك بالانترنيت !')
          : setTitle('حدث خطأ ما !'),
          setModalVisible(true);
      });
  };

  return (
    <Formik
      initialValues={{
        qafasName: '',
        qafasPhoneNumber: '',
        qafasDescription: '',
        qafasAttachments: [],
      }}
      enableReinitialize
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={onSubmitFunction}
      validationSchema={validationSchema}>
      {({
        handleChange,
        handleSubmit,
        setFieldValue,
        values,
        isSubmitting,
        errors,
      }) => (
        <Container
          withPadding
          style={{
            backgroundColor: Colors.primaryColor100,
            paddingTop: 10,
          }}
          StickyBottomComponent={() => {
            return (
              <View style={s.bottomSection}>
                <Button
                  onPress={handleSubmit}
                  size={'big'}
                  text={'اضافة'}
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                />
              </View>
            );
          }}>
          <Input
            label={'اسم القفاص'}
            placeholder={'ادخل اسم القفاص'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              qafasPhoneNumberInputRef.current.focus();
            }}
            onChangeText={handleChange('qafasName')}
            error={errors.qafasName ? true : false}
            value={values.qafasName}
            errorMessage={errors.qafasName}
          />
          <Input
            label={'رقم هاتف القفاص'}
            placeholder={'ادخل رقم هاتف القفاص'}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => {
              qafasDescriptionInputRef.current.focus();
            }}
            onChangeText={handleChange('qafasPhoneNumber')}
            error={errors.qafasPhoneNumber ? true : false}
            value={values.qafasPhoneNumber}
            errorMessage={errors.qafasPhoneNumber}
            inputRef={qafasPhoneNumberInputRef}
          />
          <Input
            label={'الوصف حول الحالة'}
            placeholder={'ادخل وصف حول الحالة'}
            keyboardType="default"
            textArea
            onChangeText={handleChange('qafasDescription')}
            error={errors.qafasDescription ? true : false}
            value={values.qafasDescription}
            errorMessage={errors.qafasDescription}
            inputRef={qafasDescriptionInputRef}
          />
          <FileInput
            label={'مرفقات (اثباتات صور او فديو)'}
            placeholder={'يرجى اختيار المرفقات'}
            error={errors.qafasAttachments ? true : false}
            value={values.qafasAttachments}
            errorMessage={errors.qafasAttachments}
            onPressButton={() => {
              launchImageLibrary(
                {mediaType: 'mixed', selectionLimit: 0, includeBase64: false},
                returnedData => {
                  if (returnedData.assets) {
                    setFieldValue('qafasAttachments', returnedData.assets);
                  } else {
                    console.log(returnedData);
                  }
                },
              );
            }}
          />
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

export default AddQafas;
