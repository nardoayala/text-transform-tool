const TextArea = () => {
  const view = `
    <form class="text-area">
      <div class="text-area__options">
        <label for="capitalize">
          <input type="radio" id="capitalize" name="transformOption" value="capitalize">
          Capital Case
        </label>
        <label for="lowercase">
          <input type="radio" id="lowercase" name="transformOption" value="lowercase">
          lower case
        </label>
        <label for="uppercase">
          <input type="radio" id="uppercase" name="transformOption" value="uppercase">
          UPPER CASE
        </label>
      </div>
      <textarea id="input"></textarea>
    </form>
  `;
  return view;
};

export default TextArea;
