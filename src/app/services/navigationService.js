import {NavigationActions, StackActions} from 'react-navigation';
/**
 * The navigation is implemented as a service so that it can be used outside of components, for example in sagas.
 *
 * @see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 */

export let navigator;

/**
 * This function is called when the Root is created to set the navigator instance to use.
 */
function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in Root using createStackNavigator()
 * @param params Route parameters.
 * @param action
 */
function navigate(routeName, params, action) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action,
    }),
  );
}

/**
 * Call this function when you want to navigate to a specific route AND reset the navigation history.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in Root using createStackNavigator()
 * @param params Route parameters.
 */
function navigateAndReset(routeName, params) {
  navigator.dispatch(
    StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          routeName,
          params,
        }),
      ],
    }),
  );
}

const findRoute = state =>
  // $FlowFixMe
  state && state.index !== undefined
    ? findRoute(state.routes[state.index])
    : state;

const getCurrentRoute = () => findRoute(navigator?._navigation?.state);

// gets the current screen from navigation state
const getActiveRouteName = navigationState => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
};

function replace(routeName, params, action) {
  navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
      action,
    }),
  );
}

function back() {
  navigator.dispatch(NavigationActions.back());
}

export default {
  navigate,
  navigateAndReset,
  setTopLevelNavigator,
  getCurrentRoute,
  getActiveRouteName,
  replace,
  back,
};
