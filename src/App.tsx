import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calculatorOutline, closeOutline, ellipse, home, homeOutline, personCircleOutline, personOutline, speedometerOutline, square, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Profile from './pages/Profile';
import Clickcounter from './pages/Clickcounter';
import Todolist from './pages/ToDoList';
import Quotegenerator from './pages/Quotegenerator';
import Notes from './pages/notes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          
          {/* Application default route */}
           <Route exact path="/ion-t-Lucino/">
            <Redirect to="/ion-t-Lucino/Home" />
          </Route>

          <Route exact path="/ion-t-Lucino/Home">
            <Home />
          </Route>

          <Route exact path="/ion-t-Lucino/Profile">
            <Profile />
          </Route>
          <Route exact path="/ion-t-Lucino/Home/Clickcounter">
            <Clickcounter />
          </Route>
          <Route path="/ion-t-Lucino/Home/Calculator">
            <Calculator />
          </Route>

          <Route path="/ion-t-Lucino/Home/ToDoList">
            <Todolist />
          </Route>

          <Route path="/ion-t-Lucino/Home/Quotegenerator">
            <Quotegenerator />
          </Route>

          <Route path="/ion-t-Lucino/Home/notes">
            <Notes />
          </Route>

          

        </IonRouterOutlet>

      {/* Tab Buttons */}
        <IonTabBar slot="bottom">

          <IonTabButton tab="Home" href="/ion-t-Lucino/Home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
       
          <IonTabButton tab="Profile" href="/ion-t-Lucino/Profile">
            <IonIcon aria-hidden="true" icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
      
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;