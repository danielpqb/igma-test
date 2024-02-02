"use client";

import Button from "@/components/Button";
import CircularButton from "@/components/CircularButton";
import InputText from "@/components/InputText";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-base">
      <Button
        size="md"
        onClick={(e) => {}}
      >
        Assinar Newsletter
      </Button>
      <Button
        size="lg"
        onClick={(e) => {}}
      >
        Assinar Newsletter
      </Button>
      <CircularButton
        onClick={() => {}}
        size="md"
      />
      <CircularButton
        onClick={() => {}}
        size="lg"
      />
      <CircularButton
        disabled={true}
        onClick={() => {}}
        size="md"
      />
      <CircularButton
        disabled={true}
        onClick={() => {}}
        size="lg"
      />
      <InputText
        onChange={(e) => {}}
        size="lg"
      />
      <InputText
        onChange={(e) => {}}
        size="md"
      />
      <InputText
        onChange={(e) => {}}
        size="lg"
        disabled={true}
      />
      <InputText
        onChange={(e) => {}}
        size="md"
        disabled={true}
      />
      <InputText
        onChange={(e) => {}}
        size="lg"
        error="Erro"
      />
      <InputText
        onChange={(e) => {}}
        size="md"
        disabled={true}
        error="Erro"
      />
    </main>
  );
}
