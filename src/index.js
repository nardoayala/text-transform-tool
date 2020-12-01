import Home from './pages/Home';
import transformOptions from './utils/transformOptions';

const App = document.getElementById('app');

App.innerHTML = Home();
transformOptions();
