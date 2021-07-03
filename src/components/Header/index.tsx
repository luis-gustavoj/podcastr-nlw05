import format from 'date-fns/format';
import enUS from 'date-fns/locale/en-US';
import Image from 'next/image';

import styles from './styles.module.scss'

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM')

  return(
    <header className={styles.headerContainer}>
      <Image src="/logo.svg" alt="Podcastr" width="163" height="40"/>
      <p>Always the best for your ears</p>
      <span>{currentDate}</span>
    </header>
  );
}