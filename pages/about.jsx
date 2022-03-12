import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <>
      <h1> About me... </h1>
      <div className={styles.headerMargin}></div>
      <h3>컴퓨터와 관련된 거라면 무엇이든 눈길이 가는 <s>곁눈질은 이제 그만</s> 개발자 입니다.</h3>
      <div className={styles.footerMargin}></div>
      <h4> Seoul Nat'l University, CS & Linguistics class of 2022</h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
