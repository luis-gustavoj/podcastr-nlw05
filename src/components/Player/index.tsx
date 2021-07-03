import styles from './styles.module.scss';

import Image from 'next/image';

export function Player() {
  return (
    <div className={styles.playerContainer}>
      <header>
        <Image src="/playing.svg" alt="Playing now" width="32" height="32"/>
        <strong>Playing now</strong>
      </header>
      <div className={styles.emptyPlayer}>
        <strong>Just select one podcast and start enjoying it</strong>
      </div>

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider}/>
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <Image src="/shuffle.svg" alt="Shuffle" width="24" height="24"/>
          </button>
          <button type="button">
            <Image src="/play-previous.svg" alt="Play previous" width="24" height="24"/>
          </button>
          <button type="button" className={styles.playButton}>
            <Image src="/play.svg" alt="Play" width="24" height="24"/>
          </button>
          <button type="button">
            <Image src="/play-next.svg" alt="Play next" width="24" height="24"/>
          </button>
          <button type="button">
            <Image src="/repeat.svg" alt="Repeat" width="24" height="24"/>
          </button>
        </div>
      </footer>
    </div>
  );
}