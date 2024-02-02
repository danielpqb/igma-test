"use client";

import Image from "next/image";
import React from "react";
import CircularButton from "../CircularButton";
import InputText from "../InputText";
import Button from "../Button";

import logoHeader from "@/assets/LogoHeader.svg";
import logoIgma from "@/assets/logotipoIgma.svg";
import photoBanner from "@/assets/Image@3x.png";
import markBanner from "@/assets/vectorHero.svg";

type Props = {
  gridImgs: {
    src: any;
  }[];
  phoneImgs: {
    src: any;
  }[];
  className?: string;
};
const TabletPage = ({ gridImgs, phoneImgs, className }: Props) => {
  return (
    <div className={className}>
      <div className="flex flex-col [&>*]:px-inline-sm h-screen">
        <div className="flex justify-evenly mb-stack-xxl">
          <div className="relative !pr-[0]">
            <Image
              src={markBanner}
              alt="Picture of the author"
              objectFit="contain"
              className="absolute top-[calc(50%-78px)] left-[-16px]"
            />
            <Image
              src={photoBanner}
              alt="Picture of the author"
              height={504}
              className="overflow-hidden min-h-[504px]"
            />
          </div>
          <div className="flex flex-col w-[385px]">
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
              Acreditamos em um mundo onde experiências incríveis são
              essenciais.
            </span>
            <span className="text-xs font-semibold leading-lg text-base-dark-main">
              Unimos design e tecnologia para resolver problemas complexos de
              empresas. Criamos produtos digitais que revolucionam o
              relacionamento entre empresas e consumidores.
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-stack-xxl">
          <span className="text-xs font-semibold leading-lg text-base-dark-main w-[42%]">
            Expressamos mais de 20 anos de experiência criando plataformas
            digitais para as maiores empresas do Brasil, impactando milhões de
            pessoas.
          </span>
          <div className="grid grid-cols-3">
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
        </div>

        <div className="flex mb-stack-xxl items-center">
          <div className="flex flex-col min-w-[42%]">
            <div className="flex flex-col w-[75%]">
              <span className="text-xxs font-medium leading-sm text-base-dark-main mb-stack-md">
                Assine nossa newsletter
              </span>
              <span className="text-xs font-semibold leading-lg text-base-dark-main mb-stack-md">
                Desenvolva-se conosco com conteúdos sobre Tecnologia e Design a
                cada 15 dias.
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
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="!p-[0] relative min-h-[238px] max-h-[680px] overflow-hidden">
              <div
                className={`flex flex-col gap-inline-xxs overflow-visible animate-[float_20s_linear_infinite]`}
              >
                {[1, 2, 3].map(() =>
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
            <div className="!p-[0] relative min-h-[238px] max-h-[680px] overflow-hidden">
              <div
                className={`flex flex-col gap-inline-xxs overflow-visible animate-[float_12s_linear_infinite]`}
              >
                {[1, 2, 3].map(() =>
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
            <div className="!p-[0] relative min-h-[238px] max-h-[680px] overflow-hidden">
              <div
                className={`flex flex-col gap-inline-xxs overflow-visible animate-[float_17s_linear_infinite]`}
              >
                {[1, 2, 3].map(() =>
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
            <div className="!p-[0] relative min-h-[238px] max-h-[680px] overflow-hidden">
              <div
                className={`flex flex-col gap-inline-xxs overflow-visible animate-[float_10s_linear_infinite]`}
              >
                {[1, 2, 3].map(() =>
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
          </div>
        </div>

        <div className="flex bg-base-dark-highlight min-h-[1px] mb-stack-sm mx-inline-sm"></div>

        <div className="flex justify-between gap-stack-nano text-xxs font-medium leading-lg text-base-dark-main pb-stack-xxl">
          <span>Igma Delightful Digital Products Company.</span>
          <span>© Copyright 2023</span>
        </div>
      </div>
    </div>
  );
};

export default TabletPage;
