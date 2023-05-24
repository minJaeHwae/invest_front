import styles from './LatestCard.module.sass'

function LatestCard({
  title,
  src,
  big = false
}) {
  return (
    <div 
      className={styles.card} 
      style={{
        height: big ? '60vh' : '35vh'
      }}
    >
      <div className='img-zoom'>
        <div style={{ backgroundImage: `url(${src})` }}></div>
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export default LatestCard;