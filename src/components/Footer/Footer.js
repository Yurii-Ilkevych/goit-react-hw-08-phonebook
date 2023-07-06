import { FooterBox, FooterContainer, Link } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <p>Created By</p>
        <Link
          href="https://github.com/Yurii-Ilkevych"
          target="_blank"
          rel="noreferrer"
        >
          Yurii Ilkevych
        </Link>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
