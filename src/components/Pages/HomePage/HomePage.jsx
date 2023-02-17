import TrendingMovies from '../../TrendingMovies/TrendingMovies';

import { TitleList } from './homePage.styled';

const HomePage = () => {
  return (
    <main>
      <div>
        <TitleList>Trending today</TitleList>
        <TrendingMovies />
      </div>
    </main>
  );
};

export default HomePage;
