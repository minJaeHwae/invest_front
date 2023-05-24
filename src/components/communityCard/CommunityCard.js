import styles from './CommunityCard.module.sass'

function CommunityCard({ community }) {
  return (
    <div className={styles.card}>
      <div className='img-zoom'>
        <div style={{ backgroundImage: `url(${community.src})` }}></div>
      </div>
      <h3>{community.name}</h3>
      <p>{community.short}</p>
    </div>
  );
}

export default CommunityCard;