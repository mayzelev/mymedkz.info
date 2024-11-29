import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function DefaultLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className=" bg-formBackground">{children}</main>
            <Footer />
        </div>
    );
}
