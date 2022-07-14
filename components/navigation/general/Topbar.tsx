import Link from "next/link";
import logo from "../../../public/assets/images/logo.jpg";
import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";

interface IView {
  largeView?: boolean;
}

export const Topbar: React.FC<IView> = ({ largeView }) => {
  const { t } = useTranslation("navigation");
  return (
    <div
      id="topbar"
      className="w-screen h-14 fixed flex justify-between bg-transparent"
    >
      <Link href="/" passHref>
        <button className="cursor-pointer">
          <Image
            src={logo}
            width={50}
            height={50}
            objectFit={"cover"}
            alt={"this is an image of the website logo"}
          ></Image>
        </button>
      </Link>
      {largeView && (
        <Link href="/contact">
          <a
            id="contactME"
            className="text-xl font-naruto text-white p-4 cursor-pointer"
          >
            {t("contact")}
          </a>
        </Link>
      )}
    </div>
  );
};
