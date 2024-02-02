"use client";

import Image from "next/image";
import logoHeader from "@/assets/LogoHeader.svg";
import logoIgma from "@/assets/logotipoIgma.svg";
import photoBanner from "@/assets/Image@3x.png";
import markBanner from "@/assets/vectorHero.svg";
import CircularButton from "@/components/CircularButton";
import InputText from "@/components/InputText";
import Button from "@/components/Button";

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
    <main className="flex min-h-screen flex-col font-base mt-[104px]">
      <header className="flex w-full items-center justify-between h-[80px] fixed top-[0] left-[0] z-30">
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
      <div className="flex flex-col [&>*]:px-inline-xxs h-screen">
        <div className="flex items-center gap-inline-nano mb-stack-xl">
          <span className="text-xxs font-medium leading-sm text-base-dark-main">
            Prazer, somos
          </span>
          <Image
            src={logoIgma}
            height={30}
            alt="Picture of the author"
          />
        </div>
        <span className="text-lg font-semibold leading-sm text-base-dark-highlight mb-stack-xs">
          Acreditamos em um mundo onde experiências incríveis são essenciais.
        </span>
        <span className="text-xs font-semibold leading-lg text-base-dark-main mb-stack-xxl">
          Unimos design e tecnologia para resolver problemas complexos de
          empresas. Criamos produtos digitais que revolucionam o relacionamento
          entre empresas e consumidores.
        </span>
        <div className="relative !pr-[0] mb-stack-xxl">
          <Image
            src={markBanner}
            alt="Picture of the author"
            objectFit="contain"
            className="absolute top-[calc(50%-78px)] left-[8px]"
          />
          <Image
            src={photoBanner}
            alt="Picture of the author"
            height={560}
            className="overflow-hidden min-h-[560px]"
          />
        </div>
        <span className="text-xs font-semibold leading-lg text-base-dark-main mb-stack-sm">
          Expressamos mais de 20 anos de experiência criando plataformas
          digitais para as maiores empresas do Brasil, impactando milhões de
          pessoas.
        </span>
        <div className="grid grid-cols-2 mb-stack-xxl">
          {gridImgs.map((img, idx) => {
            return (
              <Image
                key={idx}
                src={img.src}
                alt="Picture of the author"
                height={124}
                className="overflow-hidden min-h-[124px] w-full"
              />
            );
          })}
        </div>
        <span className="text-xxs font-medium leading-sm text-base-dark-main mb-stack-md">
          Assine nossa newsletter
        </span>
        <span className="text-xs font-semibold leading-lg text-base-dark-main mb-stack-md">
          Desenvolva-se conosco com conteúdos sobre Tecnologia e Design a cada
          15 dias.
        </span>
        <InputText
          className="mb-stack-xxs"
          onChange={() => {}}
          size="md"
          placeholder="Nome"
        />
        <InputText
          className="mb-stack-lg"
          onChange={() => {}}
          size="md"
          placeholder="Email"
        />
        <div>
          <Button
            className="mb-stack-xxl"
            onClick={() => {}}
            size="md"
          >
            Assinar Newsletter
          </Button>
        </div>
        <div className="!p-[0] mb-stack-xxl relative min-h-[238px] overflow-hidden">
          <div className="flex gap-inline-xxs overflow-visible animate-[roulette_8s_linear_infinite]">
            {[1, 2, 3, 4].map(() =>
              phoneImgs.map((img, idx) => {
                return (
                  <Image
                    key={idx}
                    src={img.src}
                    alt="Picture of the author"
                    className="min-h-[238px] aspect-square object-contain overflow-visible"
                    width={113}
                  />
                );
              })
            )}
          </div>
        </div>
        <div className="flex bg-base-dark-highlight min-h-[1px] mb-stack-sm mx-inline-xxs"></div>
        <div className="flex flex-col gap-stack-nano text-xxs font-medium leading-lg text-base-dark-main pb-stack-xxl">
          <span>Igma Delightful Digital Products Company.</span>
          <span>© Copyright 2023</span>
        </div>
      </div>
    </main>
  );
}
