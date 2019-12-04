import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 
import Patient from './pages/patient';
import Observation from './pages/observation';
import ObservationForm from './components/ObservationForm';

const Routes = createAppContainer(
    createStackNavigator({
        Patient,
        Observation,
        ObservationForm
    })
);

export default Routes;