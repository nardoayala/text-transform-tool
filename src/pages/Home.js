import TextArea from '../components/TextArea';
import '../styles/main.css';

const Home = () => {
  const view = `
    <header>
      <h1>Text transformation tool</h1>
      <p>A simple tool to transform your text between lower, upper and capital case.</p>
    </header>
    ${TextArea()}
  `;
  return view;
};

export default Home;
