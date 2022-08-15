import Link from 'next/link';
import logo from '../../../public/assets/images/logo.jpg';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';

interface IView {
  largeView?: boolean;
}

export const Topbar: React.FC<IView> = ({ largeView }) => {
  const { t } = useTranslation('navigation');
  return (
    <div
      id="topbar"
      className="bg-transparent fixed flex h-14 w-screen justify-between border border-white"
    ></div>
  );
};
