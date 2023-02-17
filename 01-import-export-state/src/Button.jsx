import { add } from "./lib"

// NAMED EXPORT
export const Button = () => {
  return (<button>OK</button>)
}

export const Panel = () => {
  return (<div>OK</div>)
}

// DEFAULT (ANONYMOUS) EXPORT
export default Button;

