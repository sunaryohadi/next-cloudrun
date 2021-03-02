import Link from 'next/link';

function Footer() {
  const link = (url, label) => (
    <Link href={url}>
      <a className="hover:text-hilight">{label}</a>
    </Link>
  );

  return (
    <footer className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-sm text-gray-500 bg-white pt-2 pb-1">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-3 py-2">
          <div>Support</div>
          <ul className="text-xs py-1">
            <li>{link('', 'Help Center')}</li>
            <li>{link('', 'How to Buy')}</li>
            <li>{link('', 'How to Sell')}</li>
            <li>{link('', 'Contact Us')}</li>
          </ul>
        </div>
        <div className="col-span-3 py-2 ">Powered by htmlia.com</div>
      </div>
      <div className="border-t py-2">© 2021 My Company. All Rights Reserved</div>
    </footer>
  );
}

export default Footer;
