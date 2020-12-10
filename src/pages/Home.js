import TextArea from '../components/TextArea';
import '../styles/main.css';

const Home = () => {
  const view = `
    <header>
      <h1>Text transform tool</h1>
      <p>A simple tool to transform text between lowercase, capitalcase, uppercase, and sentencecase.</p>
    </header>
    ${TextArea()}
  `;
  return view;
};

export default Home;
