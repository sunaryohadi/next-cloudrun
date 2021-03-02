import React from 'react';
import Link from 'next/link';

export default function Header({ className }) {
  const link = (url, label) => (
    <Link href={url}>
      <a className="p-2 hover:text-hilight">{label}</a>
    </Link>
  );

  return (
    <header
      className={`fixed  ${
        className ? className : ''
      } h-18 w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 shadow-2xl`}
    >
      <div className="flex items-center justify-between text-xs antialiased text-gray-500 space-x-2 pt-1">
        <div className="py-1">
          {link('/download', 'Download')}
          {link('/facebook', 'Facebook')}
          {link('/instagram', 'Instagram')}
        </div>
        <div className="py-1">
          {link('', 'Notification')}
          {link('', 'Help')}
          {link('', <strong className="hidden sm:inline-block">Sign Up</strong>)} |
          {link('', <strong className="hidden sm:inline-block">Login</strong>)}
        </div>
      </div>
      <div className="pb-1">
        <nav className="flex items-center space-x-2 subpixel-antialiased">{link('/', 'Home')}</nav>
      </div>
    </header>
  );
}
