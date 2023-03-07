import {View, FlatList, RefreshControl} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import moment from 'moment';
import 'moment/locale/ar';
import 'moment-timezone';
import Container from 'components/templates/container';
import Button from 'components/atoms/button';
import {Colors} from 'theme';
import Text from 'components/atoms/text';
import {getMyPhoneNumbersListFunction} from 'services/API';
import {useSelector} from 'react-redux';
import s from './qafasaList.styles';

moment.locale('ar');

const QafasasList = () => {
  const [phoneNumbersList, setPhoneNumbersList] = useState({});
  const {token} = useSelector(state => state.reducer);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPagesNumber, setTotalPagesNumber] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingLoadMoreButton, setIsLoadingLoadMoreButton] = useState(false);
  const [laodMoreDisabled, setLaodMoreDisabled] = useState(false);

  useEffect(() => {
    setPageNumber(1);
    getMyPhoneNumbersListFunction(token, pageNumber, pageSize)
      .then(returnedDataForUserInfoFunction => {
        if (returnedDataForUserInfoFunction.data.data.length < 10) {
          setLaodMoreDisabled(true);
        }
        setPhoneNumbersList(returnedDataForUserInfoFunction.data.data);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(e);
        setIsError(true);
      });
  }, []);

  const transform = date => {
    var ll = new Date(date.seconds * 1000).toUTCString();
    return moment(date).tz('Asia/Baghdad', true).fromNow();
  };

  const errorButtonFunction = () => {
    setIsError(false);
    setIsLoading(true);
    getMyPhoneNumbersListFunction(token, pageNumber, pageSize)
      .then(returnedDataForUserInfoFunction => {
        if (returnedDataForUserInfoFunction.data.data.length < 10) {
          setLaodMoreDisabled(true);
        }
        setPhoneNumbersList(returnedDataForUserInfoFunction.data.data);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(e);
        setIsError(true);
      });
  };

  return (
    <Container
      scrollable={false}
      withPadding={true}
      isLoading={isLoading}
      isError={isError}
      onPressErrorButton={errorButtonFunction}
      style={{
        backgroundColor: Colors.primaryColor100,
      }}>
      <FlatList
        ListFooterComponent={() => {
          return phoneNumbersList.length == 0 ? null : (
            <View style={s.listFooter}>
              <Button
                disabled={
                  isLoadingLoadMoreButton === true || laodMoreDisabled === true
                    ? true
                    : false
                }
                isLoading={isLoadingLoadMoreButton}
                onPress={() => {
                  let ss = pageNumber;
                  setIsLoadingLoadMoreButton(true);

                  getMyPhoneNumbersListFunction(token, ss + 1, pageSize)
                    .then(res => {
                      setPhoneNumbersList([
                        ...phoneNumbersList,
                        ...res.data.data,
                      ]);
                      if (res.data.data.length < 10) {
                        setLaodMoreDisabled(true);
                      }
                      setPageNumber(ss + 1);
                      setIsLoadingLoadMoreButton(false);
                    })
                    .catch(e => {
                      console.log(e);
                      setIsError(true);
                    });
                }}
                text={'تحميل المزيد'}
                size={'small'}
              />
            </View>
          );
        }}
        refreshControl={
          <RefreshControl
            colors={[Colors.primaryColor100, Colors.primaryColor70]}
            refreshing={isRefreshing}
            onRefresh={() => {
              setIsRefreshing(true);
              setPageNumber(1);
              getMyPhoneNumbersListFunction(token, pageNumber, pageSize)
                .then(returnedData => {
                  setPhoneNumbersList(returnedData.data.data);
                  setIsLoading(false);
                  setIsRefreshing(false);
                  if (returnedData.data.data.length === 0) {
                    setLaodMoreDisabled(true);
                  }
                })
                .catch(e => {
                  setIsError(true);
                  console.log(e);
                });
            }}
          />
        }
        contentContainerStyle={[
          {
            paddingHorizontal: 10,
            width: '100%',
          },
          phoneNumbersList.length === 0 ? {height: '100%'} : {},
        ]}
        style={[phoneNumbersList.length === 0 ? {height: '100%'} : {}]}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                flex: 1,
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text type="header5">لم يتم اضافة اية ارقام حتى الأن !</Text>
            </View>
          );
        }}
        ListHeaderComponent={() => (
          <Text type="header5">قائمة القفاصة التي قمت باضافتهم</Text>
        )}
        data={phoneNumbersList}
        renderItem={({item, index}) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                width: '100%',
                //  marginBottom: 10,
                borderBottomWidth: 2,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 10,
                paddingVertical: 10,
              }}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}>
                <Text type="labelBold" textStyle={{marginTop: 2}}>
                  {index + 1}
                </Text>
                <Text type="labelBold" textStyle={{marginTop: 2}}>
                  {item.qafasName}
                </Text>
                <Text
                  type="labelRegular"
                  textStyle={{marginTop: 4}}
                  //textStyle={s.header}
                >
                  {item.qafasPhone}
                </Text>
                <Text
                  type="labelRegular"
                  //textStyle={s.header}
                >
                  عدد المرفقات : {item.attachments.length}
                </Text>
              </View>
              <View>
                <Text
                  type="tinyTextBold"
                  //textStyle={s.header}
                >
                  {transform(item.insertDate)}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </Container>
  );
};
export default QafasasList;
