import './features.css';

function Features (props) {
    return (
        <div className="feature-item">
          <img src={props.src} alt={props.alt} className="feature-icon" />
          <h3 className="feature-item-title">{props.title}</h3>
          <p>{props.content}</p>
        </div>
    )
}

export default Features;