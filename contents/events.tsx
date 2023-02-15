import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
    matches: ["https://scm.jbhunt.com/shipper/ngx/dashboard"],
    all_frames: true,
    run_at: "document_end"
}

alert('Hello');

// const btn = document.querySelectorAll('button');
// console.log(btn);

function handleEvent(event) {
    console.log('Hello, WILLMCC World');
    console.log(document.querySelectorAll('button'));
}

const Button = () => {
    return (
      <button onClick={handleEvent} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Button</button>
    );
}

export default Button;