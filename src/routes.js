import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 
import Patient from './pages/patient';
import Condition from './pages/condition';
import Observation from './pages/observation';
import QuestionnaireResponse from './pages/questionnaireResponse';

const Routes = createAppContainer(
    createStackNavigator({
        Patient,
        Observation,
        Condition,
        QuestionnaireResponse,
    })
);

export default Routes;