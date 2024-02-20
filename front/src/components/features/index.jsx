import './features.css';
import useImage from '../../hooks/useImage';

function Features (props) {
  const image = useImage(props.src);

    return (
        <div className="feature-item">
          <img src={ image } alt={ props.alt } className="feature-icon" />
          <h3 className="feature-item-title">{ props.title }</h3>
          <p>{ props.content }</p>
        </div>
    )
}

export default Features;