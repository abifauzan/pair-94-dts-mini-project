import { useNavigate } from "react-router-dom";
import { HeroButton, HeroContainer, HeroDescription, HeroTitle } from "./Hero.style";

const Hero = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <HeroContainer background={movie?.backdrop_path}>
      <HeroTitle>{movie?.name}</HeroTitle>
      <HeroDescription>{movie?.overview}</HeroDescription>
      <HeroButton>Play</HeroButton>
      <HeroButton>My List</HeroButton>
    </HeroContainer>
  );
};

export default Hero;
