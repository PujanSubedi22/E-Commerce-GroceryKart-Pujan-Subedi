import Header from '@/components/Header';
import './globals.css'
import Footer from '@/components/Footer';


const RootLayout = ({children}) => {
  return (

    <html>
      <body>
      <div >
      <Header/>
      {children}
      <Footer/>
      </div>
      </body>
      </html>
  );
}

export default RootLayout