import React, { Fragment, Component, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { changeCount } from '../../actions/counts';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';


const ExploreTab = (props: { count: any; actions: any; }) => {

  // let [count, setCount] = useState(0);


  // const goToSignUp = () => {
  //   navigation.navigate(SignUp.name);
  // };

  // const goToHome = () => {
  //   navigation.navigate(Tabs.name);
  // };

  
  const decrementCount = () => {
    // setCount(--count);

    // let { count } = state;
    // count++;
    // this.setState({
    //   count
    // })
    let { count, actions } = props;
    count--;
    actions.changeCount(count);
  };
  const incrementCount = () => {
    // setCount(++count);

    // let { count } = state;
    // count++;
    // this.setState({
    //   count
    // })

    let { count, actions } = props;
    count++;
    actions.changeCount(count);
  };

  

  return (
    
    <View style={styles.container}>
      <Button
        title="increment"
        onPress={() => incrementCount()}
      />
      <Text>{props.count}</Text>
      <Button
        title="decrement"
        onPress={() => decrementCount()}
      />
    </View>
  );
};


const mapStateToProps = (state: { count: any; }) => ({
  count: state.count,
});

const ActionCreators = Object.assign(
  {},
  changeCount,
);
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

const temp = connect(mapStateToProps, mapDispatchToProps)(ExploreTab);

export default {component: temp, name: 'Explore' };
// export default {component: ExploreTab, name: 'Explore'};


// class App extends Component {
//   state = { count: 0 };
//   decrementCount() {
//     let { count } = this.state;
//     count++;
//     this.setState({
//       count
//     })
//   }
//   incrementCount() {
//     let { count } = this.state;
//     count++;
//     this.setState({
//       count
//     })
//   }
//   render() {
//     const { count } = this.state;
//     return (
//       <View styles={styles.container}>
//         <Button
//           title="increment"
//           onPress={() => this.incrementCount()}
//         />
//         <Text>{count}</Text>
//         <Button
//           title="decrement"
//           onPress={() => this.decrementCount()}
//         />
//       </View>
//     );
//   }
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
