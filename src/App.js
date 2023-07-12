// import logo from "./logo.svg";
import { marked } from "marked";

import "./styles.css";
import { useState } from "react";

function App() {
  const placeholder = `
  ![cat image](http://placekitten.com/200/300)
  # This is a heading
  ## This is a subheader
  [This is a link!](https://markdown-previewer.freecodecamp.rocks/)
  Here's some code: \`some code\`
  this is a really long code block:
  \`\`\` 
    function(code) { 
      run();
   } 
   \`\`\`
   Sorry if im being too **bold**
   - buy apples
   - sell apples
   - ???
   - profit
   > this is a blockquote
   and theres lots more
   `;
  const [text, setText] = useState(placeholder);

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <div className="container-md">
        <div className="row my-5 justify-content-md-center">
          <textarea
            className="rounded p-2"
            id="editor"
            rows="10"
            onChange={handleChange}
            value={text}
          ></textarea>
        </div>
        <div className="row justify-content-md-center">
          <div
            className="rounded p-2"
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(text, { breaks: true }) }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
