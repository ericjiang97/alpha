import { ThemeConfig, IconThemeConfig } from 'bumbag';
import {
  faCopy,
  faShare,
  faEdit,
  faSun,
  faMoon,
  faEnvelope,
  faRss,
  faBars,
  faBookOpen,
  faDownload,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBootstrap,
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebook,
  faFlickr,
  faGrunt,
  faJs,
  faReact,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const IconConfig: IconThemeConfig = {
  iconSets: [
    {
      icons: [faUser, faBars, faDownload, faSun, faMoon, faEnvelope, faRss, faCopy, faShare, faEdit, faBookOpen],
      prefix: 'solid-',
      type: 'font-awesome',
    },
    {
      icons: [faInstagram, faLinkedin, faGithub, faTwitter, faFacebook, faFlickr, faGrunt, faReact, faJs, faBootstrap],
      prefix: 'brand-',
      type: 'font-awesome',
    },
  ],
};

const theme: ThemeConfig = {
  Icon: IconConfig,
  palette: {
    danger: '#da1717',
    info: '#1e67d5',
    modes: {
      dark: {
        background: '#0C2D48',
        text: 'white',
      },
    },
    primary: '#145DA0',
    success: '#0a7d33',
    text: '#212121',
    warning: '#ed9c22',
  },
};

export default theme;
