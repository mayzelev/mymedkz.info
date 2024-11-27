import Logo from '../../assets/icons/MyMedInfo.png';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const isActive = (lang) => i18n.language === lang;
    return (
        <>
            <section className="flex justify-end px-5 py-1">
                <div className="flex gap-2">
                    <button
                        onClick={() => changeLanguage('ru')}
                        className={`language-switcher ${isActive('ru') ? 'language-switcher-active ' : ''}`}
                    >
                        Ru
                    </button>
                    <button
                        onClick={() => changeLanguage('kz')}
                        className={`language-switcher ${isActive('kz') ? 'language-switcher-active ' : ''}`}
                    >
                        Kz
                    </button>
                </div>
            </section>
            <section className="flex items-center px-5 pb-[95px] max-w-[1240px] mx-auto">
                <img className="w-32 h-13 mx-auto" src={Logo} alt="Logo Gattex" />
            </section>
        </>
    );
}
