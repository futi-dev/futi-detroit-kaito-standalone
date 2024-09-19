import { IconType, SiBilibili, SiGithub, SiGmail, SiSteam } from '@icons-pack/react-simple-icons';

interface ILink {
  Icon: IconType;
  href: string;
  label: string;
}

export const LINKS: ILink[] = [
  {
    Icon: SiGithub,
    href: 'https://github.com/Ishikawa-Kaito',
    label: 'Github',
  },
  {
    Icon: SiBilibili,
    href: 'https://space.bilibili.com/12153011',
    label: 'BiliBili',
  },
  {
    Icon: SiSteam,
    href: 'https://steamcommunity.com/id/imxzixuan',
    label: 'Steam',
  },
  {
    Icon: SiGmail,
    href: 'mailto:x@ikaito.icu',
    label: 'Email',
  },
];
