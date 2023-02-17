import './Button.css'

// Component (= Component Function)
// kann man nutzen wie Custom HTML Tag!
export const Button = (props) => {

  // <Button title="Schlag mich tot" padding="10" />;

  console.log(props)

  const onButtonPress = () => {
    console.log("Hallooooo");
  };

  return <button onClick={onButtonPress}>{ props.title }</button>;
};
