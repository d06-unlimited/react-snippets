import './Card.css'

export const Card = (props) => {

  // return the HTML layout
  return (
    <div className="card">{ props.children }</div>
  )
}