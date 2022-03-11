const AboutPage = () => {
  return (
    <>
      <h3>Hi I'm a developer who often leaps through stuff</h3>
      <h4> Seoul Nat'l University 2022, CS & Linguistics </h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
