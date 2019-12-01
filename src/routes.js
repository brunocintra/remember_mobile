import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 
import Patient from './pages/patient';
import Condition from './pages/condition';
import Observation from './pages/observation';
import FamilyMemberHistory from './pages/familyMemberHistory';
import QuestionnaireResponse from './pages/questionnaireResponse';

const Routes = createAppContainer(
    createStackNavigator({
        Patient,
        Observation,
        Condition,
        FamilyMemberHistory,
        QuestionnaireResponse,
    })
);

export default Routes;