const TextArea = () => {
  const view = `
    <form class="text-area">
      <div class="text-area__options">
       <button type="button" id="sentence">Sentence case</button>
       <button type="button" id="capital">Capital Case</button>
       <button type="button" id="lower">lower case</button>
       <button type="button" id="upper">UPPER CASE</button>
      </div>
      <textarea id="input"></textarea>
    </form>
  `;
  return view;
};

export default TextArea;
