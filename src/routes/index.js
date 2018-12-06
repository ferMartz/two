import Home from '../views/home'
import About from '../views/about'

var indexRoutes = [
    { path: '/about', name: 'About', component: About },
    { path: '/', name: 'Home', component: Home }
]

export default indexRoutes