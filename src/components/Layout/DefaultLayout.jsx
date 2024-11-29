import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function DefaultLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="mx-auto py-0 px-5 max-w-[1240px] flex-grow">{children}</main>
            <Footer />
        </div>
    );
}
