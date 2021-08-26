import { MAPSCREEN, HOMESCREEN } from '../constants/screens'
import HomeScreen from '../screens/HomeScreen'
import MapScreen from '../screens/MapScreen'

const AppRoutes = [
  {
    name: HOMESCREEN,
    component: HomeScreen,
    options: { headerShown: false },
  },

  {
    name: MAPSCREEN,
    component: MapScreen,
    options: {},
  },
]

export default AppRoutes
