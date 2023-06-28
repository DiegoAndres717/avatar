import silhouette from '../../public/silueta-humano.svg';
// eslint-disable-next-line react/prop-types
export default function Silhouette({ shadowColor }) {
  const style = {
    filter: `drop-shadow(0 0 10px ${shadowColor})`,
  };

  return <img className="silhouette" src={silhouette} alt="Silhouette of a human body" style={style} />;
}
