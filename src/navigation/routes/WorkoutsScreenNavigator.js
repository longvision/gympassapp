import { createStackNavigator } from 'react-navigation';

import Workouts from '~/pages/Workouts';

const WorkoutsScreenNavigator = createStackNavigator(
  {
    Workouts: {
      screen: Workouts
    }
  },
  {
    cardStyle: { backgroundColor: '#48285b' }
  }
);

export default WorkoutsScreenNavigator;
