import Header from './Header';
import Footer from './Footer';

const Layout = ({ hClassName, center, className, children }) => {
  return (
    <div className={`antialiased w-full min-h-screen bg-yellow-50 flex flex-col`}>
      <Header className={hClassName} />
      <main
        className={`flex-1 ${center ? 'flex justify-center items-center' : ''} ${className || ''}`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
