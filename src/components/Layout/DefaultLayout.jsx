import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function DefaultLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="bg-formBackground flex-grow w-full py-[55px] px-0">{children}</main>
            <Footer formFooter={true} />
        </div>
    );
}
