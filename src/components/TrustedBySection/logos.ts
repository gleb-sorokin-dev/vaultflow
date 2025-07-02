import DellLogo from "@/assets/logos/dell.svg";
import ZenLogo from "@/assets/logos/zen.svg";
import LatticeLogo from "@/assets/logos/lattice.svg";
import NcrLogo from "@/assets/logos/ncr.svg";
import PfLogo from "@/assets/logos/pf.svg";
import RakutenLogo from "@/assets/logos/rakuten.svg";
import TedLogo from "@/assets/logos/ted.svg";

type LogosProps = {
  id: number;
  src: string;
  alt: string;
};

export const logos: LogosProps[] = [
  {
    id: 1,
    src: DellLogo,
    alt: "Dell Logo",
  },
  {
    id: 2,
    src: ZenLogo,
    alt: "Zen Logo",
  },
  {
    id: 3,
    src: LatticeLogo,
    alt: "Lattice Logo",
  },
  {
    id: 4,
    src: NcrLogo,
    alt: "Ncr Logo",
  },
  {
    id: 5,
    src: PfLogo,
    alt: "Pf Logo",
  },
  {
    id: 6,
    src: RakutenLogo,
    alt: "Rakuten Logo",
  },
  {
    id: 7,
    src: TedLogo,
    alt: "Ted Logo",
  },
];
