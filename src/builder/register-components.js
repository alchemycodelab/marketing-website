import DeluxeHero from '../components/DeluxeHero/DeluxeHero.jsx';
import Hero from '../components/Hero/Hero.jsx';
import AlchemyDifference from '../components/AlchemyDifference/AlchemyDifference.jsx';
import QuotesCarousel from '../components/QuotesCarousel/QuotesCarousel.jsx';
import MediaCarousel from '../components/QuotesCarousel/MediaCarousel.jsx';
import IllustrativeExplainer from '../components/IllustrativeExplainer/IllustrativeExplainer.jsx';
import StatsDisplay from '../components/QuadStats/StatsDisplay.jsx';
import FramedQuotesCarousel from '../components/QuotesCarousel/FramedQuotesCarousel.jsx';
import ImageContent from '../components/Image/ImageContent.jsx';
import FullImage from '../components/Image/FullImage';
import Accordion from '../components/Accordion/Accordion.jsx';
import DeluxeAccordion from '../components/Accordion/DeluxeAccordion.jsx';
import CenteredContent from '../components/CenteredContent/CenteredContent.jsx';
import Schedules from '../components/Schedules/Schedules.jsx';
import CohortDates from '../components/CohortDates/CohortDates.jsx';
import Steps from '../components/Steps/Steps.jsx';
import TuitionFinancing from '../components/TuitionFinancing/TuitionFinancing.jsx';
import Scholarships from '../components/Scholarships/Scholarships.jsx';
import Endorsements from '../components/Endorsements/Endorsements.jsx';
import TabbedOutcomes from '../components/QuadStats/TabbedOutcomes.jsx';
import Employers from '../components/Employers/Employers.jsx';
import SmallHero from '../components/SmallHero/SmallHero.jsx';
import FAQ from '../components/FAQ/FAQCategories';
import ArticleHero from '../components/Article/ArticleHero';
import ArticleContent from '../components/Article/ArticleContent';
import ArticleImage from '../components/Article/ArticleImage';
import ArticleQuote from '../components/Article/ArticleQuote';
import ArticleList from '../components/Article/ArticleList';

export default function registerComponents(Builder) {

  function register(Component) {
    const config = {
      ...Component.config,
      ...(import.meta.env.PROD ? { noWrap: true } : {})
    };
    Builder.registerComponent(Component, config);
  }

  register(DeluxeHero);
  register(AlchemyDifference);
  register(QuotesCarousel);
  register(MediaCarousel);
  register(IllustrativeExplainer);
  register(StatsDisplay);
  register(FramedQuotesCarousel);
  register(ImageContent);
  register(FullImage);
  register(Hero);
  register(Accordion);
  register(CenteredContent);
  register(Schedules);
  register(DeluxeAccordion);
  register(CohortDates);
  register(Steps);
  register(TuitionFinancing);
  register(Scholarships);
  register(Endorsements);
  register(TabbedOutcomes);
  register(Employers);
  register(SmallHero);
  register(FAQ);
  register(ArticleHero);
  register(ArticleContent);
  register(ArticleImage);
  register(ArticleQuote);
  register(ArticleList);
}
