import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'AesopUiseopEom.me',
    href: 'https://https://eomiso.netlify.app',
  },
  {
    social: 'email',
    link: 'ytrtef@gmail.com',
    href: 'mailto:ytrtef@gmail.com',
  },
  {
    social: 'github',
    link: 'eomiso',
    href: 'https://github.com/eomiso',
  },
  {
    social: 'linkedin',
    link: 'Uiseop Eom',
    href: 'https://www.linkedin.com/in/uiseopeom',
  },
  {
    social: 'twitter',
    link: 'what_tzeop',
    href: 'https://www.twitter.com/wha_tzeop',
  },
  {
    social: 'instagram',
    link: 'wha_tzeop',
    href: 'https://www.instagram.com/wha_tzeop',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
