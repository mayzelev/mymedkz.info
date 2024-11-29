import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import clsx from 'clsx';
export default function Form() {
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid }
    } = useForm({
        mode: 'onChange'
    });

    const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        if (step === 1) {
            setStep(2);
        } else {
            console.log('Форма завершена:', data);
        }
    };

    const isSpecialist = watch('isHealthcareSpecialist');
    const cities = t('cities', { returnObjects: true });
    const therapeuticAreas = t('therapeuticAreas', { returnObjects: true });

    const [query, setQuery] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const [step, setStep] = useState(1);

    const filteredCities =
        query === t('enterCity') || !query
            ? cities
            : cities.filter((city) => {
                  return city.toLowerCase().includes((query || '').toLowerCase());
              });

    const [queryTerapy, setQueryTerapy] = useState('');
    const [selectedTerapy, setSelectedTerapy] = useState(null);
    const filteredTerapy =
        query === t('enterCity') || !queryTerapy
            ? therapeuticAreas
            : therapeuticAreas.filter((Terapy) => {
                  return Terapy.toLowerCase().includes((queryTerapy || '').toLowerCase());
              });


    return (
        <>
            <div className="pb-[60px] mx-auto py-0 px-6 max-w-[1240px] flex-grow">
                <h4 className="m-0 font-sans font-semibold  text-xl mt-[55px] text-mainTextColor">
                    {t('headerText')}
                    <br />
                    {t('headerTextSecoundPart')}
                </h4>
                <div>
                    {step === 1 && (
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
                            <h1 className="text-mainTextColor text-[56px] font-bold leading-[1.35] pb-2">{t('stepOne')}</h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Last Name */}
                                <div>
                                    <label className="text-xs font-normal pl-5 text-mainTextColor uppercase">{t('lastName')} *</label>
                                    <div className="w-full h-[60px] border-3 rounded-full bg-gradient-to-r from-gradientInputStart to-gradientInputFinish p-[2px]">
                                        <input
                                            {...register('lastName', { required: t('errorsRequired') })}
                                            className={
                                                'h-full w-full rounded-full pl-5 font-medium text-base text-mainTextColor bg-white placeholder-mainTextColor placeholder:font-medium placeholder:text-base'
                                            }
                                            placeholder={t('enterLastName')}
                                        />
                                    </div>
                                    {errors.lastName && <p className="text-red-500 text-sm mt-1 pl-5">{errors.lastName.message}</p>}
                                </div>

                                {/* First Name */}
                                <div>
                                    <label className="text-xs font-normal pl-5 text-mainTextColor uppercase">{t('name')} *</label>
                                    <div className="w-full h-[60px] border-3 rounded-full bg-gradient-to-r from-gradientInputStart to-gradientInputFinish p-[2px]">
                                        <input
                                            {...register('firstName', { required: t('errorsRequired') })}
                                            className={
                                                'h-full w-full rounded-full pl-5 font-medium text-base text-mainTextColor bg-white placeholder-mainTextColor placeholder:font-medium placeholder:text-base'
                                            }
                                            placeholder={t('enterName')}
                                        />
                                        {errors.firstName && <p className="text-red-500 text-sm mt-1 pl-5">{errors.firstName.message}</p>}
                                    </div>
                                </div>

                                {/* Patronymic */}
                                <div>
                                    <label className="text-xs font-normal pl-5 text-mainTextColor uppercase">{t('patronymic')}</label>
                                    <div className="w-full h-[60px] border-3 rounded-full bg-gradient-to-r from-gradientInputStart to-gradientInputFinish p-[2px]">
                                        <input
                                            {...register('patronymic')}
                                            className="h-full w-full rounded-full pl-5 font-medium text-base text-mainTextColor bg-white placeholder-mainTextColor placeholder:font-medium placeholder:text-base"
                                            placeholder={t('enterPatronymic')}
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="pb-6">
                                    <label className="text-xs font-normal pl-5 text-mainTextColor uppercase">{t('email')} *</label>
                                    <div className="w-full h-[60px] border-3 rounded-full bg-gradient-to-r from-gradientInputStart to-gradientInputFinish p-[2px]">
                                        <input
                                            type="email"
                                            {...register('email', {
                                                required: t('errorsRequired'),
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: t('enterEmail')
                                                }
                                            })}
                                            className="h-full w-full rounded-full pl-5 font-medium text-base text-mainTextColor bg-white placeholder-mainTextColor placeholder:font-medium placeholder:text-base"
                                            placeholder={t('enterEmail')}
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-sm mt-1 pl-5">{errors.email.message}</p>}
                                </div>
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start">
                                <div className="pb-6">
                                    <input
                                        type="checkbox"
                                        id="checkbox3"
                                        {...register('isHealthcareSpecialist')}
                                        onChange={(e) => setShowAdditionalFields(e.target.checked)}
                                        className="hidden peer "
                                    />
                                    <label
                                        htmlFor="checkbox3"
                                        className="relative flex items-center justify-center p-[1px] peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-backgroundColor rounded overflow-hidden peer-checked:bg-backgroundColor"
                                    >
                                        <svg className="w-full h-full fill-none" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1 5.6129L7.47727 12L16 1"
                                                stroke="#fff"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </label>
                                </div>

                                <label className="ml-2 pb-4 text-[14px] leading-[1.35] text-selectTextColor">
                                    {t('healthcareSpecialist')}
                                    <p className="text-secondaryTextColor text-[10px]">{t('infoHealthcareSpecialist')}</p>
                                </label>
                            </div>
                            {showAdditionalFields && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                                    <div>
                                        <label className="text-xs font-medium pl-5 text-mainTextColor uppercase">{t('workPlace')} *</label>
                                        <div className="w-full h-[60px] border-3 rounded-full bg-gradient-to-r from-gradientInputStart to-gradientInputFinish p-[2px]">
                                            <input
                                                {...register('workplace', { required: t('errorsRequired') })}
                                                className="h-full w-full rounded-full pl-5 font-medium text-base text-mainTextColor bg-white placeholder-mainTextColor placeholder:font-medium placeholder:text-base"
                                                placeholder={t('enterWorkPlace')}
                                            />
                                        </div>
                                        {errors.workplace && <p className="text-red-500 text-sm mt-1 pl-5">{errors.workplace.message}</p>}
                                    </div>

                                    <div>
                                        <label className="text-xs font-medium pl-5 text-mainTextColor uppercase">{t('position')} *</label>
                                        <div className="w-full h-[60px] border-3 rounded-full bg-gradient-to-r from-gradientInputStart to-gradientInputFinish p-[2px]">
                                            <input
                                                {...register('position', { required: t('errorsRequired') })}
                                                className="h-full w-full rounded-full pl-5 font-medium text-base text-mainTextColor bg-white placeholder-mainTextColor placeholder:font-medium placeholder:text-base"
                                                placeholder={t('enterPosition')}
                                            />
                                        </div>
                                        {errors.position && <p className="text-red-500 text-sm mt-1 pl-5">{errors.position.message}</p>}
                                    </div>
                                    <div>
                                        <label className="text-xs font-medium pl-5 text-mainTextColor uppercase">{t('selectCity')} *</label>
                                        <div className="mx-auto w-full h-[60px]">
                                            <Combobox
                                                value={selectedCity}
                                                onChange={(value) => {
                                                    setSelectedCity(value);
                                                }}
                                                onClose={() => setQuery('')}
                                            >
                                                <div className="relative w-full h-full">
                                                    <ComboboxInput
                                                        {...register('city', {
                                                            required: t('errorsRequired')
                                                        })}
                                                        className="cursor-pointer w-full h-full rounded-full pl-5 font-medium text-base text-white placeholder-white bg-gradient-to-r from-gradientInputStart to-gradientInputFinish focus:outline-none z-20 relative"
                                                        placeholder={t('enterCity')}
                                                        displayValue={(city) => city}
                                                        onChange={(event) => {
                                                            setQuery(event.target.value);
                                                        }}
                                                    />
                                                    <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5 w-full h-full z-20"></ComboboxButton>
                                                </div>
                                                <ComboboxOptions
                                                    size={filteredCities.length > 5 ? 5 : filteredCities.length}
                                                    className={clsx(
                                                        'w-[calc(var(--input-width)-60px)] cursor-pointer rounded-b-2xl border-x-2 border-b-2 pt-4 pb-5 border-t-0 border-mainTextColor -translate-y-4 translate-x-6 bg-white  [--anchor-gap:var(--spacing-1)] empty:invisible ',
                                                        'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 relative z-10',
                                                        'max-h-[300px] h-auto overflow-y-auto'
                                                    )}
                                                >
                                                    {filteredCities.length > 0 ? (
                                                        filteredCities.map((city) => (
                                                            <ComboboxOption
                                                                key={city}
                                                                value={city}
                                                                className="pl-5 pt-2 font-medium text-base text-selectTextColor border-mainTextColor"
                                                            >
                                                                {city}
                                                            </ComboboxOption>
                                                        ))
                                                    ) : (
                                                        <div className="cursor-not-allowed py-2 px-4 text-gray-500">
                                                            {t('noCitiesFound')}
                                                        </div>
                                                    )}
                                                </ComboboxOptions>
                                            </Combobox>
                                        </div>

                                        {errors.city && <p className="text-red-500 text-sm mt-1 pl-5">{errors.city.message}</p>}
                                    </div>
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={!isValid}
                                    className={clsx(
                                        'w-fit font-normal leading-[1.4] text-[22px] pt-[11px] px-[45px] pb-[15px] rounded-full transition-colors',
                                        {
                                            'bg-buttonBgColor text-white': !isValid,
                                            'bg-gradient-to-r from-gradientInputStart to-gradientInputFinish text-white cursor-pointer':
                                                isValid
                                        }
                                    )}
                                >
                                    {t('nextPage')}
                                </button>
                            </div>

                            <p className="text-[12px] pl-[22px] text-mainTextColor pt-2">* - {t('mandatoryFields')}</p>
                        </form>
                    )}
                    {step === 2 && (
                        <form onSubmit={handleSubmit(onSubmit)} className=" w-full space-y-4">
                            <h1 className="text-mainTextColor text-[56px] font-bold leading-[1.35] pb-2">{t('stepTwo')}</h1>
                            {/* Поля другого кроку */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-medium pl-5 text-mainTextColor uppercase">
                                        {t('therapeuticArea')} *
                                    </label>
                                    <div className="mx-auto w-full h-[60px]">
                                        <Combobox
                                            value={selectedTerapy}
                                            onChange={(value) => {
                                                setSelectedTerapy(value);
                                            }}
                                            onClose={() => setQueryTerapy('')}
                                        >
                                            <div className="relative w-full h-full">
                                                <ComboboxInput
                                                    {...register('terapy', {
                                                        required: t('errorsRequired')
                                                    })}
                                                    className="cursor-pointer w-full h-full rounded-full pl-5 font-medium text-base text-white placeholder-white bg-gradient-to-r from-gradientInputStart to-gradientInputFinish focus:outline-none z-20 relative"
                                                    placeholder={t('selectArea')}
                                                    displayValue={(terapy) => terapy}
                                                    onChange={(event) => setQueryTerapy(event.target.value)}
                                                />
                                                <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5 w-full h-full z-20"></ComboboxButton>
                                            </div>
                                            <ComboboxOptions
                                                size={filteredTerapy.length > 5 ? 5 : filteredTerapy.length}
                                                className={clsx(
                                                    'w-[calc(var(--input-width)-60px)] cursor-pointer rounded-b-2xl border-x-2 border-b-2 pt-4 pb-5 border-t-0 border-mainTextColor -translate-y-4 translate-x-6 bg-white  [--anchor-gap:var(--spacing-1)] empty:invisible ',
                                                    'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 relative z-10',
                                                    'max-h-[300px] h-auto overflow-y-auto'
                                                )}
                                            >
                                                {filteredTerapy.length > 0 ? (
                                                    filteredTerapy.map((terapy) => (
                                                        <ComboboxOption
                                                            key={terapy}
                                                            value={terapy}
                                                            className="pl-5 pt-2 font-medium text-base text-selectTextColor border-mainTextColor"
                                                        >
                                                            {terapy}
                                                        </ComboboxOption>
                                                    ))
                                                ) : (
                                                    <div className="cursor-not-allowed py-2 px-4 text-gray-500">{t('noCitiesFound')}</div>
                                                )}
                                            </ComboboxOptions>
                                        </Combobox>
                                    </div>

                                    {errors.terapy && <p className="text-red-500 text-sm mt-1 pl-5">{errors.terapy.message}</p>}
                                </div>
                                {selectedTerapy && (
                                    <>
                                        {/* Поле "Препарат" */}
                                        <label className="form-label">Препарат *</label>
                                        <select className="form-select">
                                            <option value="">Выберите препарат</option>
                                            <option value="Препарат 1">Препарат 1</option>
                                            <option value="Препарат 2">Препарат 2</option>
                                        </select>

                                        {/* Поле "Вопрос" */}
                                        <label className="form-label">Вопрос *</label>
                                        <textarea placeholder="Введите ваш вопрос" className="form-textarea"></textarea>
                                    </>
                                )}
                            </div>

                            {/* Кнопка завершення */}
                            <button
                                type="submit"
                                className="w-fit font-normal leading-[1.4] text-[22px] pt-[11px] px-[45px] pb-[15px] rounded-full bg-gradient-to-r from-gradientInputStart to-gradientInputFinish text-white cursor-pointer"
                            >
                                {t('finish')}
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <div className="pb-4 bg-white ">
                <p className="text-center font-bold text-lg text-mainTextColor pb-2">{t('formFooterInfo')}</p>
                <p className="text-center font-bold text-base text-mainTextColor ">{t('formFooterQuestionTitle')}</p>
                <p className="text-center font-bold text-base text-mainTextColor italic">{t('formFooterQuestion')}</p>
            </div>
        </>
    );
}
