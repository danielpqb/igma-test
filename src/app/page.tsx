"use client";

import CircularButton from "@/components/CircularButton";
import DesktopGPage from "@/components/pages/DesktopGPage";
import DesktopPage from "@/components/pages/DesktopPage";
import MobilePage from "@/components/pages/MobilePage";
import TabletPage from "@/components/pages/TabletPage";
import Image from "next/image";
import logoHeader from "@/assets/LogoHeader.svg";

export default function Home() {
  const gridImgs = [
    { src: require("/public/gridLogos/ambev.svg") },
    { src: require("/public/gridLogos/bayer.svg") },
    { src: require("/public/gridLogos/brasil-prev-seeklogo.svg") },
    { src: require("/public/gridLogos/centauro.svg") },
    { src: require("/public/gridLogos/comgas.svg") },
    { src: require("/public/gridLogos/cvc.svg") },
    { src: require("/public/gridLogos/google.svg") },
    { src: require("/public/gridLogos/honda.svg") },
    { src: require("/public/gridLogos/hsl.svg") },
    { src: require("/public/gridLogos/idb.svg") },
    { src: require("/public/gridLogos/mrv.svg") },
    { src: require("/public/gridLogos/neoenergia.svg") },
  ];

  const phoneImgs = [
    { src: require("/public/phoneImgs/celular1.png") },
    { src: require("/public/phoneImgs/celular2.png") },
    { src: require("/public/phoneImgs/celular5.png") },
    { src: require("/public/phoneImgs/celular8.png") },
    { src: require("/public/phoneImgs/celular11.png") },
  ];

  return (
    <main className="flex min-h-screen flex-col font-base mt-[104px] desktop:mt-[124px] desktop-g:mt-[200px]">
      <header className="flex w-full items-center justify-between h-[80px] fixed top-[0] left-[0] z-30 animate-[fadeInDown_2s_ease-out_1]">
        <Image
          src={logoHeader}
          width={80}
          alt="Picture of the author"
        />
        <CircularButton
          onClick={() => {}}
          size="md"
          className="mr-inline-xxs"
        />
      </header>
      <MobilePage
        className="tablet:hidden animate-[fadeInUp_2s_ease-out_1]"
        gridImgs={gridImgs}
        phoneImgs={phoneImgs}
      />
      <TabletPage
        className="hidden tablet:flex desktop:hidden animate-[fadeInUp_2s_ease-out_1]"
        gridImgs={gridImgs}
        phoneImgs={phoneImgs}
      />
      <DesktopPage
        className="hidden desktop:flex desktop-g:hidden animate-[fadeInUp_2s_ease-out_1]"
        gridImgs={gridImgs}
        phoneImgs={phoneImgs}
      />
      <DesktopGPage
        className="hidden desktop-g:flex animate-[fadeInUp_2s_ease-out_1]"
        gridImgs={gridImgs}
        phoneImgs={phoneImgs}
      />
    </main>
  );
}
