import {View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  AccessToken,
  LoginManager,
  AuthenticationToken,
} from 'react-native-fbsdk-next';
import {
  statusCodes,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import {Formik} from 'formik';
import * as yup from 'yup';
import Container from 'components/templates/container';
import Text from 'components/atoms/text';
import Input from 'components/atoms/input';
import Button from 'components/atoms/button';
import Logo from 'components/atoms/logo';
import TitleModal from 'components/molecules/titleModal';
import FacebookIcon from 'components/atoms/icons/facebook';
import GoogleIcon from 'components/atoms/icons/google';
import {
  checkTokenFunction,
  signInFunction,
  signIn_UpWithFacebookFunction,
  getUserInfoFunction,
  signIn_UpWithGoogleFunction,
} from 'services/API';
import {
  setToken,
  setUserInfo,
  changeToAuthenticated,
} from 'services/redux/actions';
import {screensNames} from 'constants/navigation';
import {Colors} from 'theme';
import s from './signIn.styles';

const tabIconSize = 25;

const SignIn = () => {
  const {navigate, reset} = useNavigation();
  const dispatch = useDispatch();
  const passwordInputRef = useRef();

  const [isLoading, setIsLoading] = useState(true);
  const {token} = useSelector(state => state.reducer);

  const setTokenFunction = returnedData => dispatch(setToken(returnedData));
  const setUserInfoFunction = returnedData =>
    dispatch(setUserInfo(returnedData));
  const changeToAuthenticatedFunction = returnedData =>
    dispatch(changeToAuthenticated(returnedData));

  const [isLoadingFacebookSignIn, SetIsLoadingFacebookSignIn] = useState(false);
  const [isLoadingGoogleSignIn, SetIsLoadingGoogleSignIn] = useState(false);
  const [
    isSignInPhoneNumberButtonDisabled,
    SetIsSignInPhoneNumberButtonDisabled,
  ] = useState(false);
  const [isSignInFacebookButtonDisabled, SetIsSignInFacebookButtonDisabled] =
    useState(false);
  const [isSignInGoogleButtonDisabled, SetIsSignInGoogleButtonDisabled] =
    useState(false);

  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [signInModalVisible, setSignInModalVisible] = useState(false);

  const SingInFacebookFunction = async () => {
    SetIsLoadingFacebookSignIn(true);
    SetIsSignInPhoneNumberButtonDisabled(true);
    SetIsSignInGoogleButtonDisabled(true);
    SetIsSignInFacebookButtonDisabled(true);
    if (Platform.OS === 'android') {
      LoginManager.setLoginBehavior('web_only');
    }
    await LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      result => {
        if (result.isCancelled) {
          console.log('==> Login cancelled');
          SetIsLoadingFacebookSignIn(false);
          SetIsSignInPhoneNumberButtonDisabled(false);
          SetIsSignInGoogleButtonDisabled(false);
          SetIsSignInFacebookButtonDisabled(false);
        } else {
          if (Platform.OS === 'ios') {
            AuthenticationToken.getAuthenticationTokenIOS().then(data => {
              signIn_UpWithFacebookFunction(data.accessToken)
                .then(response => {
                  getUserInfoFunction(response.data.data)
                    .then(returnedDataForGetMemberInfoFunction => {
                      console.log(
                        returnedDataForGetMemberInfoFunction.data.data,
                      );
                      setTokenFunction(response.data.data);
                      SetIsLoadingFacebookSignIn(false);
                      SetIsSignInPhoneNumberButtonDisabled(false);
                      SetIsSignInGoogleButtonDisabled(false);
                      SetIsSignInFacebookButtonDisabled(false);
                      setUserInfoFunction(
                        returnedDataForGetMemberInfoFunction.data.data,
                      );
                      changeToAuthenticatedFunction(true);
                      reset({
                        index: 0,
                        routes: [{name: screensNames.mainStack}],
                      });
                    })
                    .catch(e => {
                      console.log(e);
                      actions.setSubmitting(false);
                    });

                  // reset({
                  //   index: 0,
                  //   routes: [{name: screensNames.mainStack}],
                  // });
                  // saveToLocalStorage('@Raheeb_Token', response.data.data)
                  //   .then(() => {
                  //     saveToLocalStorage('@Raheeb_IsLogedIn', 'logedIn')
                  //       .then(() => {
                  //         SetIsLoadingFacebookSignIn(false);
                  //         SetIsSignInPhoneNumberButtonDisabled(false);
                  //         SetIsSignInGoogleButtonDisabled(false);
                  //         reset({
                  //           index: 0,
                  //           routes: [{name: screensNames.mainStack}],
                  //         });
                  //       })
                  //       .catch(e => {
                  //         console.log(e);
                  //       });
                  //   })
                  //   .catch(e => {
                  //     console.log(e);
                  //   });
                })
                .catch(e => {
                  console.log(e);
                });
            });
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              signIn_UpWithFacebookFunction(data.accessToken)
                .then(response => {
                  getUserInfoFunction(response.data.data)
                    .then(returnedDataForGetMemberInfoFunction => {
                      console.log(
                        returnedDataForGetMemberInfoFunction.data.data,
                      );
                      setTokenFunction(response.data.data);
                      SetIsLoadingFacebookSignIn(false);
                      SetIsSignInPhoneNumberButtonDisabled(false);
                      SetIsSignInGoogleButtonDisabled(false);
                      SetIsSignInFacebookButtonDisabled(false);
                      setUserInfoFunction(
                        returnedDataForGetMemberInfoFunction.data.data,
                      );
                      reset({
                        index: 0,
                        routes: [{name: screensNames.mainStack}],
                      });
                    })
                    .catch(e => {
                      console.log(e);
                      actions.setSubmitting(false);
                    });
                })
                .catch(e => {
                  console.log(e);
                });
              // signIn_UpWithFacebookFunction(data?.accessToken.toString())
              //   .then(response => {
              //     saveToLocalStorage('@Raheeb_Token', response.data.data)
              //       .then(() => {
              //         saveToLocalStorage('@Raheeb_IsLogedIn', 'logedIn')
              //           .then(() => {
              //             SetIsLoadingFacebookSignIn(false);
              //             SetIsSignInPhoneNumberButtonDisabled(false);
              //             SetIsSignInGoogleButtonDisabled(false);
              //             reset({
              //               index: 0,
              //               routes: [{name: screensNames.mainStack}],
              //             });
              //           })
              //           .catch(e => {
              //             console.log(e);
              //           });
              //       })
              //       .catch(e => {
              //         console.log(e);
              //       });
              //   })
              //   .catch(e => {
              //     console.log(e);
              //   });
            });
          }
        }
      },
      error => {
        console.log('==> Login fail with error: ' + error);
        SetIsLoadingFacebookSignIn(false);
        SetIsSignInPhoneNumberButtonDisabled(false);
        SetIsSignInGoogleButtonDisabled(false);
        SetIsSignInFacebookButtonDisabled(false);
      },
    );
  };
  const SingInGoogleFunction = async () => {
    SetIsLoadingGoogleSignIn(true);
    SetIsSignInPhoneNumberButtonDisabled(true);
    SetIsSignInFacebookButtonDisabled(true);
    SetIsSignInGoogleButtonDisabled(true);
    await GoogleSignin.hasPlayServices()
      .then(data => {
        GoogleSignin.signIn()
          .then(data => {
            signIn_UpWithGoogleFunction(data.idToken)
              .then(response => {
                getUserInfoFunction(response.data.data)
                  .then(returnedDataForGetMemberInfoFunction => {
                    console.log(returnedDataForGetMemberInfoFunction.data.data);
                    setTokenFunction(response.data.data);
                    SetIsLoadingGoogleSignIn(false);
                    SetIsSignInPhoneNumberButtonDisabled(false);
                    SetIsSignInFacebookButtonDisabled(false);
                    SetIsSignInGoogleButtonDisabled(false);
                    setUserInfoFunction(
                      returnedDataForGetMemberInfoFunction.data.data,
                    );
                    changeToAuthenticatedFunction(true);
                    reset({
                      index: 0,
                      routes: [{name: screensNames.mainStack}],
                    });
                  })
                  .catch(e => {
                    alert(e);

                    console.log(e);
                    actions.setSubmitting(false);
                  });
              })
              .catch(e => {
                alert(e);

                console.log(e);
              });
          })
          .catch(error => {
            SetIsLoadingGoogleSignIn(false);
            SetIsSignInPhoneNumberButtonDisabled(false);
            SetIsSignInFacebookButtonDisabled(false);
            SetIsSignInGoogleButtonDisabled(false);
            alert(error);
            console.log(error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
              // some other error happened
            }
          });
      })
      .catch(error => {
        SetIsLoadingGoogleSignIn(false);
        SetIsSignInPhoneNumberButtonDisabled(false);
        SetIsSignInFacebookButtonDisabled(false);
        SetIsSignInGoogleButtonDisabled(false);
        alert(error);
        console.log(error);
      });
  };
  const validationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .required('رقم الهاتف مطلوب !')
      .matches('07[0-9]{9}$', 'رقم الهاتف غير صالح !'),
    password: yup
      .string()
      .required('كلمة المرور مطلوبة !')
      .min(5, 'على الأقل خمسة احرف !'),
  });
  const onSubmitFunction = (values, actions) => {
    SetIsSignInFacebookButtonDisabled(true);
    SetIsSignInGoogleButtonDisabled(true);
    SetIsSignInPhoneNumberButtonDisabled(true);
    signInFunction(values)
      .then(response => {
        getUserInfoFunction(response.data.data)
          .then(returnedDataForGetMemberInfoFunction => {
            console.log(returnedDataForGetMemberInfoFunction.data.data);
            setTokenFunction(response.data.data);
            SetIsSignInFacebookButtonDisabled(false);
            SetIsSignInPhoneNumberButtonDisabled(false);
            SetIsSignInGoogleButtonDisabled(false);
            setUserInfoFunction(returnedDataForGetMemberInfoFunction.data.data);
            changeToAuthenticatedFunction();
            changeToAuthenticated(true);
            reset({
              index: 0,
              routes: [{name: screensNames.mainStack}],
            });
          })
          .catch(e => {
            console.log(e);
            actions.setSubmitting(false);
          });
      })
      .catch(e => {
        actions.setSubmitting(false);
        SetIsSignInFacebookButtonDisabled(false);
        SetIsSignInPhoneNumberButtonDisabled(false);
        SetIsSignInGoogleButtonDisabled(false);
        e.response.data
          ? e.response.data.message === 'Error phone and/or password'
            ? (setTitle('رقم الهاتف او كلمة المرور غير صحيحة !'),
              setSignInModalVisible(true))
            : (setTitle('حدث خطأ ما اثناء عملية تسجيل الدخول !'),
              setSignInModalVisible(true))
          : (setTitle('حدث خطأ ما اثناء عملية تسجيل الدخول !'),
            setSignInModalVisible(true));
      });
  };

  useEffect(() => {
    checkTokenFunction(token)
      .then(() => {
        getUserInfoFunction(token)
          .then(returnedDataForGetMemberInfoFunction => {
            setTokenFunction(token);
            setUserInfoFunction(returnedDataForGetMemberInfoFunction.data.data);
            changeToAuthenticatedFunction(true);
            reset({
              index: 0,
              routes: [{name: screensNames.mainStack}],
            });
          })
          .catch(e => {
            setIsLoading(false);
            console.log(e);
          });
      })
      .catch(e => {
        setIsLoading(false);
        console.log(e);
      });
  }, []);

  return (
    <Formik
      initialValues={{phoneNumber: '', password: ''}}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={onSubmitFunction}
      validationSchema={validationSchema}>
      {({handleChange, handleSubmit, values, isSubmitting, errors}) => (
        <Container
          isLoading={isLoading}
          withPadding
          style={{
            backgroundColor: Colors.primaryColor100,
            paddingTop: 10,
          }}
          // StickyBottomComponent={() => {
          //   return (
          //     <View style={s.bottomSection}>
          //       <Button
          //         onPress={handleSubmit}
          //         size={'big'}
          //         text={'تسجيل الدخول'}
          //         isLoading={isSubmitting}
          //         disabled={isSignInPhoneNumberButtonDisabled}
          //       />
          //       <View
          //         style={{
          //           flexDirection: 'row',
          //           alignItems: 'center',
          //           marginVertical: 10,
          //         }}>
          //         <View
          //           style={{flex: 1, height: 2, backgroundColor: 'black'}}
          //         />
          //         <View>
          //           <Text
          //             type="smallTextRegular"
          //             textStyle={{width: 50, textAlign: 'center'}}>
          //             او
          //           </Text>
          //         </View>
          //         <View
          //           style={{flex: 1, height: 2, backgroundColor: 'black'}}
          //         />
          //       </View>
          //       <Button
          //         isLoading={isLoadingFacebookSignIn}
          //         onPress={SingInFacebookFunction}
          //         disabled={isSignInFacebookButtonDisabled}
          //         size={'small'}
          //         text={'تسجيل الدخول مع فيسبوك'}
          //         RightIcon={() => (
          //           <FacebookIcon
          //             fill={Colors.white}
          //             size={tabIconSize}
          //             width={tabIconSize}
          //             height={tabIconSize}
          //           />
          //         )}
          //       />
          //       <Button
          //         isLoading={isLoadingGoogleSignIn}
          //         onPress={SingInGoogleFunction}
          //         disabled={isSignInGoogleButtonDisabled}
          //         size={'small'}
          //         text={'تسجيل الدخول مع كوكل'}
          //         style={{
          //           marginTop: 10,
          //         }}
          //         RightIcon={() => (
          //           <GoogleIcon
          //             fill={Colors.white}
          //             size={tabIconSize}
          //             width={tabIconSize}
          //             height={tabIconSize}
          //           />
          //         )}
          //       />
          //       <View style={s.bottomTextsContainer}>
          //         <Text type="smallTextRegular" color={Colors.slate100}>
          //           لا تملك حساب ؟
          //         </Text>
          //         <Text
          //           type="smallTextBold"
          //           textStyle={s.createAccountNow}
          //           color={Colors.slate100}
          //           onPress={() => navigate(screensNames.signUp)}>
          //           انشأ حساب الان
          //         </Text>
          //       </View>
          //     </View>
          //   );
          //}}
        >
          <View>
            <Logo style={s.logo} />
            <View
              style={{
                marginTop: 20,
              }}>
              <Text
                type="header4"
                //textStyle={s.header}
              >
                سجل دخولك
              </Text>
              <Text type="textRegular" color={Colors.iron}>
                لتسطيع اضافة الأرقام معنا الى الموقع .
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
              }}>
              <Input
                label={'رقم الهاتف'}
                placeholder={'ادخل رقم الهاتف'}
                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current.focus();
                }}
                onChangeText={handleChange('phoneNumber')}
                error={errors.phoneNumber ? true : false}
                value={values.phoneNumber}
                errorMessage={errors.phoneNumber}
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
                returnKeyType="go"
                secureTextEntry
                inputRef={passwordInputRef}
                onSubmitEditing={handleSubmit}
              />
            </View>
            <View>
              <Button
                onPress={handleSubmit}
                size={'big'}
                text={'تسجيل الدخول'}
                isLoading={isSubmitting}
                disabled={isSignInPhoneNumberButtonDisabled}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 10,
                }}>
                <View style={{flex: 1, height: 2, backgroundColor: 'black'}} />
                <View>
                  <Text
                    type="smallTextRegular"
                    textStyle={{width: 50, textAlign: 'center'}}>
                    او
                  </Text>
                </View>
                <View style={{flex: 1, height: 2, backgroundColor: 'black'}} />
              </View>
              <Button
                isLoading={isLoadingFacebookSignIn}
                onPress={SingInFacebookFunction}
                disabled={isSignInFacebookButtonDisabled}
                size={'small'}
                text={'تسجيل الدخول مع فيسبوك'}
                RightIcon={() => (
                  <FacebookIcon
                    fill={Colors.white}
                    size={tabIconSize}
                    width={tabIconSize}
                    height={tabIconSize}
                  />
                )}
              />
              <Button
                isLoading={isLoadingGoogleSignIn}
                onPress={SingInGoogleFunction}
                disabled={isSignInGoogleButtonDisabled}
                size={'small'}
                text={'تسجيل الدخول مع كوكل'}
                style={{
                  marginTop: 10,
                }}
                RightIcon={() => (
                  <GoogleIcon
                    fill={Colors.white}
                    size={tabIconSize}
                    width={tabIconSize}
                    height={tabIconSize}
                  />
                )}
              />
              <View style={s.bottomTextsContainer}>
                <Text type="smallTextRegular" color={Colors.slate100}>
                  لا تملك حساب ؟
                </Text>
                <Text
                  type="smallTextBold"
                  textStyle={s.createAccountNow}
                  color={Colors.slate100}
                  onPress={() => navigate(screensNames.signUp)}>
                  انشأ حساب الان
                </Text>
              </View>
            </View>
          </View>
          <TitleModal
            visible={signInModalVisible}
            close={() => setSignInModalVisible(false)}
            onPressDone={() => {
              setSignInModalVisible(false);
            }}
            title={title}
            subTitle={subTitle}
          />
        </Container>
      )}
    </Formik>
  );
};

export default SignIn;
