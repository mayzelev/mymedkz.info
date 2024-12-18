import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

export default function Form() {
    const [isCaptchaVerified, setCaptchaVerified] = useState(null);

    const [query, setQuery] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const [step, setStep] = useState(1);
    const [selectedTherapeuticArea, setSelectedTherapeuticArea] = useState('');
    const [selectedDrug, setSelectedDrug] = useState('');
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const cities = t('cities', { returnObjects: true });
    const therapeuticAreas = t('therapeuticAreas', { returnObjects: true });
    const currentLanguage = i18n.language;
    const {
        control,
        register,
        watch,
        handleSubmit,
        setValue,
        formState: { errors, isValid }
    } = useForm({
        mode: 'onChange'
    });
    const showHealthCareSpecialistFields = watch('isHealthCareSpecialist', false);

    const handleCaptchaChange = (token) => {
        setCaptchaVerified(token);
    };
    const handleSubmitForm = async (data) => {
        try {
            const result = await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLAYE_ID,
                {
                    ...data,
                    token: isCaptchaVerified
                },
                import.meta.env.VITE_PUBLIC_KEY_EMAIL_JS
            );

            if (result.status === 200) {
                navigate('/success');
            } else {
                console.error('Failed to submit the form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const onSubmit = async (data) => {
        if (step === 1) {
            setStep(2);
            return;
        }
        if (!isCaptchaVerified) {
            console.log('Please verify the reCAPTCHA!');
            return;
        }

        const formData = { ...data, token: isCaptchaVerified };
        await handleSubmitForm(formData);
    };

    const handleBack = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const filteredCities =
        query === t('enterCity') || !query
            ? cities
            : cities.filter((city) => {
                  return city.toLowerCase().includes((query || '').toLowerCase());
              });

    const handleTherapeuticAreaChange = (selected) => {
        setSelectedTherapeuticArea(selected.value || selected);
        setSelectedDrug('');
    };

    const handleDrugChange = (selected) => {
        setSelectedDrug(selected);
    };

    return (
        <>
            <div className="mx-auto my-0 py-0 px-6 max-w-[1240px]">
                <h4 className="m-0 font-sans font-semibold text-[16px] md:text-[16px]  lg:text-xl mt-[55px] text-mainTextColor">
                    {t('headerText')}
                    <br />
                    {t('headerTextSecoundPart')}
                </h4>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
                        {step === 1 && (
                            <>
                                <h1 className="text-mainTextColor text-[30px] md:text-[30px] lg:text-[56px] font-bold leading-[1.35] pb-2">
                                    {t('stepOne')}
                                </h1>

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
                                            {errors.firstName && (
                                                <p className="text-red-500 text-sm mt-1 pl-5">{errors.firstName.message}</p>
                                            )}
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
                                            id="checkbox1"
                                            {...register('isHealthCareSpecialist')}
                                            className="hidden peer "
                                        />
                                        <label
                                            htmlFor="checkbox1"
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
                                {showHealthCareSpecialistFields && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs font-medium pl-5 text-mainTextColor uppercase">
                                                {t('workPlace')} *
                                            </label>
                                            <div className="w-full h-[60px] border-3 rounded-full bg-gradient-to-r from-gradientInputStart to-gradientInputFinish p-[2px]">
                                                <input
                                                    {...register('workplace', { required: t('errorsRequired') })}
                                                    className="h-full w-full rounded-full pl-5 font-medium text-base text-mainTextColor bg-white placeholder-mainTextColor placeholder:font-medium placeholder:text-base"
                                                    placeholder={t('enterWorkPlace')}
                                                />
                                            </div>
                                            {errors.workplace && (
                                                <p className="text-red-500 text-sm mt-1 pl-5">{errors.workplace.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="text-xs font-medium pl-5 text-mainTextColor uppercase">
                                                {t('position')} *
                                            </label>
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
                                            <label className="text-xs font-medium pl-5 text-mainTextColor uppercase">
                                                {t('selectCity')} *
                                            </label>
                                            <div className="mx-auto w-full h-[60px]">
                                                <Combobox
                                                    value={selectedCity}
                                                    onChange={(city) => {
                                                        setSelectedCity(city);
                                                        setValue('city', city, { shouldValidate: true }); // Оновлюємо значення форми
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

                                <div className="pt-6">
                                    <button
                                        disabled={!isValid}
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className={clsx(
                                            'g-recaptcha w-fit font-normal leading-[1.4] text-[16px] md:text-[16px] lg:text-[22px] pt-[11px] px-[45px] pb-[15px] rounded-full transition-colors',
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
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <h1 className="text-mainTextColor text-[56px] font-bold leading-[1.35] pb-2">{t('stepTwo')}</h1>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-medium pl-5 text-mainTextColor uppercase">
                                            {t('therapeuticArea')} *
                                        </label>
                                        <div className="mx-auto w-full h-[60px]">
                                            <Combobox value={selectedTherapeuticArea} onChange={handleTherapeuticAreaChange}>
                                                <div className="relative w-full h-full">
                                                    <ComboboxInput
                                                        {...register('terapy', {
                                                            required: t('errorsRequired')
                                                        })}
                                                        readOnly
                                                        className=" cursor-pointer w-full h-full rounded-full pl-5 font-medium text-base text-white placeholder-white bg-gradient-to-r from-gradientInputStart to-gradientInputFinish focus:outline-none z-40 relative"
                                                        placeholder={t('selectArea')}
                                                        displayValue={(terapy) => terapy}
                                                    />
                                                    <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5 w-full h-full z-40"></ComboboxButton>
                                                </div>
                                                <ComboboxOptions
                                                    className={clsx(
                                                        'w-[calc(var(--input-width)-60px)] cursor-pointer rounded-b-2xl border-x-2 border-b-2 pt-4 pb-5 border-t-0 border-mainTextColor -translate-y-4 translate-x-6 bg-white  [--anchor-gap:var(--spacing-1)] empty:invisible ',
                                                        'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 relative z-30',
                                                        'max-h-[300px] h-auto overflow-y-auto read-only'
                                                    )}
                                                >
                                                    {therapeuticAreas && Object.keys(therapeuticAreas).length > 0 ? (
                                                        Object.keys(therapeuticAreas).map((area) => (
                                                            <ComboboxOption
                                                                key={area}
                                                                value={area}
                                                                className="pl-5 pt-2 font-medium text-base text-selectTextColor border-mainTextColor"
                                                            >
                                                                {area}
                                                            </ComboboxOption>
                                                        ))
                                                    ) : (
                                                        <div className="cursor-not-allowed py-2 px-4 text-gray-500">{t('selectArea')}</div>
                                                    )}
                                                </ComboboxOptions>
                                            </Combobox>
                                        </div>

                                        {errors.terapy && <p className="text-red-500 text-sm mt-1 pl-5">{errors.terapy.message}</p>}
                                    </div>
                                    {selectedTherapeuticArea && (
                                        <>
                                            {/*Preparation */}
                                            <div>
                                                <label className="text-xs font-medium pl-5 text-mainTextColor uppercase">
                                                    {t('preparation')} *
                                                </label>
                                                <div className="mx-auto w-full h-[60px]">
                                                    <Combobox value={selectedDrug} onChange={handleDrugChange}>
                                                        <div className="relative w-full h-full">
                                                            <ComboboxInput
                                                                {...register('preparation', {
                                                                    required: t('errorsRequired')
                                                                })}
                                                                readOnly
                                                                className="cursor-pointer w-full h-full rounded-full pl-5 font-medium text-base text-white placeholder-white bg-gradient-to-r from-gradientInputStart to-gradientInputFinish focus:outline-none z-20 relative"
                                                                placeholder={t('selectPreparetion')}
                                                                displayValue={(preparation) => preparation}
                                                            />
                                                            <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5 w-full h-full z-20"></ComboboxButton>
                                                        </div>
                                                        <ComboboxOptions
                                                            className={clsx(
                                                                'w-[calc(var(--input-width)-60px)] cursor-pointer rounded-b-2xl border-x-2 border-b-2 pt-4 pb-5 border-t-0 border-mainTextColor -translate-y-4 translate-x-6 bg-white  [--anchor-gap:var(--spacing-1)] empty:invisible ',
                                                                'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 relative z-10',
                                                                'max-h-[300px] h-auto overflow-y-auto'
                                                            )}
                                                        >
                                                            {therapeuticAreas && therapeuticAreas[selectedTherapeuticArea].length > 0 ? (
                                                                therapeuticAreas[selectedTherapeuticArea].map((drug) => (
                                                                    <ComboboxOption
                                                                        key={drug}
                                                                        value={drug}
                                                                        className="pl-5 pt-2 font-medium text-base text-selectTextColor border-mainTextColor"
                                                                    >
                                                                        {drug}
                                                                    </ComboboxOption>
                                                                ))
                                                            ) : (
                                                                <div className="cursor-not-allowed py-2 px-4 text-gray-500">
                                                                    {t('selectPreparetion')}
                                                                </div>
                                                            )}
                                                        </ComboboxOptions>
                                                    </Combobox>
                                                </div>

                                                {errors.preparation && (
                                                    <p className="text-red-500 text-sm mt-1 pl-5">{errors.preparation.message}</p>
                                                )}
                                            </div>

                                            {/* Question */}
                                            <div className="flex flex-col space-y-1 w-full col-span-full">
                                                <label className="text-xs font-medium pl-5 text-mainTextColor uppercase">
                                                    {t('question')} *
                                                </label>
                                                <textarea
                                                    placeholder={t('enterQuestion')}
                                                    className="border-[2px] border-borderTextAreaColor text-mainTextColor placeholder:text-mainTextColor border-solid rounded-3xl px-[17px] py-[22px] text-base"
                                                    rows={7}
                                                    {...register('question', {
                                                        required: t('errorsRequired')
                                                    })}
                                                />
                                                {errors.question && (
                                                    <p className="text-red-500 text-sm mt-1 pl-5">{errors.question.message}</p>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="flex flex-col space-y-4 p-6 rounded">
                                    {/* Question 1 */}
                                    <div className="flex flex-col">
                                        <label className="text-mainTextColor font-medium text-[12px] uppercase mb-2">
                                            {t('takedaPatient')} *
                                        </label>
                                        <div className="flex space-x-6">
                                            <Controller
                                                name="pills"
                                                control={control}
                                                rules={{ required: t('chooseAnswer') }}
                                                render={({ field }) => (
                                                    <>
                                                        <label className="flex items-center space-x-2 text-[12px]">
                                                            <input type="radio" {...field} value={t('yes')} className="form-radio" />
                                                            <span>{t('yes')}</span>
                                                        </label>
                                                        <label className="flex items-center space-x-2 text-[12px]">
                                                            <input type="radio" {...field} value={t('no')} className="form-radio" />
                                                            <span>{t('no')}</span>
                                                        </label>
                                                    </>
                                                )}
                                            />
                                            {errors.pills && <p className="text-red-500 text-xs">{errors.pills.message}</p>}
                                        </div>
                                    </div>

                                    {/* Question 2 */}
                                    <div className="flex flex-col">
                                        <label className="text-mainTextColor font-medium text-[12px] uppercase mb-2">
                                            {t('pregnancy')} *
                                        </label>
                                        <div className="flex space-x-6">
                                            <Controller
                                                name="pregnancy"
                                                control={control}
                                                rules={{ required: t('chooseAnswer') }}
                                                render={({ field }) => (
                                                    <>
                                                        <label className="flex items-center space-x-2 text-[12px]">
                                                            <input type="radio" {...field} value={t('yes')} className="form-radio" />
                                                            <span>{t('yes')}</span>
                                                        </label>
                                                        <label className="flex items-center space-x-2 text-[12px]">
                                                            <input type="radio" {...field} value={t('no')} className="form-radio" />
                                                            <span>{t('no')}</span>
                                                        </label>
                                                    </>
                                                )}
                                            />
                                            {errors.pregnancy && <p className="text-red-500 text-xs">{errors.pregnancy.message}</p>}
                                        </div>
                                    </div>

                                    {/* Question 3 */}
                                    <div className="flex flex-col">
                                        <label className="text-mainTextColor font-medium text-[12px] uppercase mb-2">
                                            {t('instructions')} *
                                        </label>
                                        <div className="flex space-x-6">
                                            <Controller
                                                name="manual"
                                                control={control}
                                                rules={{ required: t('chooseAnswer') }}
                                                render={({ field }) => (
                                                    <>
                                                        <label className="flex items-center space-x-2 text-[12px]">
                                                            <input type="radio" {...field} value={t('yes')} className="form-radio" />
                                                            <span>{t('yes')}</span>
                                                        </label>
                                                        <label className="flex items-center space-x-2 text-[12px]">
                                                            <input type="radio" {...field} value={t('no')} className="form-radio" />
                                                            <span>{t('no')}</span>
                                                        </label>
                                                    </>
                                                )}
                                            />
                                            {errors.manual && <p className="text-red-500 text-xs">{errors.manual.message}</p>}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="pb-6">
                                        <input
                                            type="checkbox"
                                            id="checkbox2"
                                            {...register('agreeWithUsagePolicy', {
                                                required: t('errorsRequired')
                                            })}
                                            className="hidden peer"
                                        />
                                        <label
                                            htmlFor="checkbox2"
                                            className={clsx(
                                                'relative flex items-center justify-center p-[1px] peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 rounded overflow-hidden',
                                                errors.agreeWithUsagePolicy
                                                    ? 'border-red-500'
                                                    : 'border-backgroundColor peer-checked:bg-backgroundColor'
                                            )}
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

                                    <label className="ml-2 pb-4 text-[16px] leading-[1.35] text-selectTextColor">
                                        {t('iAgree')}{' '}
                                        <a
                                            className="underline"
                                            target="_blank"
                                            href="https://accounts.takeda.com/terms-of-use/terms-and-conditions"
                                        >
                                            {t('iAgree2')}
                                        </a>{' '}
                                        {t('iAgree3')}
                                        <br />
                                        <a className="underline" target="_blank" href="https://accounts.takeda.com/privacy-notice">
                                            {t('iAgree4')}
                                        </a>{' '}
                                        *
                                    </label>
                                </div>

                                <div className="flex items-start">
                                    <div className="pb-6">
                                        <input
                                            type="checkbox"
                                            id="checkbox3"
                                            {...register('agreeToReceiveEmail', {
                                                required: t('errorsRequired')
                                            })}
                                            className="hidden peer "
                                        />
                                        <label
                                            htmlFor="checkbox3"
                                            className={clsx(
                                                'relative flex items-center justify-center p-[1px] peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 rounded overflow-hidden',
                                                errors.agreeToReceiveEmail
                                                    ? 'border-red-500'
                                                    : 'border-backgroundColor peer-checked:bg-backgroundColor'
                                            )}
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

                                    <label className="ml-2 pb-4 text-[16px] leading-[1.35] text-selectTextColor">
                                        {t('iAgreeEmail')}
                                        <br /> {t('iAgreeEmail2')}
                                        <br /> {t('iAgreeEmail3')}
                                        <br /> {t('iAgreeEmail4')} *
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <div className="pb-6">
                                        <input
                                            type="checkbox"
                                            id="checkbox4"
                                            {...register('сonsentToProcessingPersonalData', {
                                                required: t('errorsRequired')
                                            })}
                                            className="hidden peer"
                                        />
                                        <label
                                            htmlFor="checkbox4"
                                            className={clsx(
                                                'relative flex items-center justify-center p-[1px] peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 rounded overflow-hidden',
                                                errors.сonsentToProcessingPersonalData
                                                    ? 'border-red-500'
                                                    : 'border-backgroundColor peer-checked:bg-backgroundColor'
                                            )}
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

                                    <label className="ml-2 pb-4 text-[16px] leading-[1.35] text-selectTextColor -translate-y-1">
                                        <>
                                            {currentLanguage === 'ru' ? (
                                                <>
                                                    {t('iAgreePersonl')}{' '}
                                                    <Link
                                                        target="_blank"
                                                        to={'/agreement'}
                                                        rel="noopener noreferrer"
                                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                                        className="underline"
                                                    >
                                                        {t('iAgreePerson2')}
                                                    </Link>{' '}
                                                    *
                                                </>
                                            ) : currentLanguage === 'kz' ? (
                                                <>
                                                    <Link
                                                        target="_blank"
                                                        to={'/agreement'}
                                                        rel="noopener noreferrer"
                                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                                        className="underline"
                                                    >
                                                        {t('iAgreePersonl')}
                                                    </Link>{' '}
                                                    *{' '}
                                                    {t('iAgreePerson2')}
                                                </>
                                            ) : null}
                                        </>
                                    </label>
                                </div>
                                <div className="bottom-3 right-0 ">
                                    <ReCAPTCHA sitekey={import.meta.env.VITE_APP_SITE_KEY} onChange={handleCaptchaChange} />
                                </div>
                                <div className="flex gap-3 sm:gap-3 md:gap-10 lg:gap-10 pt-[55px]">
                                    <button
                                        type="submit"
                                        disabled={!isCaptchaVerified}
                                        className={clsx(
                                            'g-recaptcha w-fit font-normal leading-[1.4] text-[16px] md:text-[16px] lg:text-[22px] pt-[11px] px-[45px] pb-[15px] rounded-full transition-colors',
                                            {
                                                'bg-buttonBgColor text-white': !isCaptchaVerified,
                                                'bg-gradient-to-r from-gradientInputStart to-gradientInputFinish text-white cursor-pointer':
                                                    isCaptchaVerified
                                            }
                                        )}
                                    >
                                        {t('sendQuestion')}
                                    </button>
                                    <button
                                        onClick={handleBack}
                                        className="w-fit font-normal leading-[1.4] text-[16px] md:text-[16px] lg:text-[22px] pt-[11px] px-[45px] pb-[15px] rounded-full border-[3px] border-solid bg-transparent  text-btnBackColor cursor-pointer"
                                    >
                                        {t('back')}
                                    </button>
                                </div>

                                <p className="text-[12px] pl-[22px] text-mainTextColor pt-2">* - {t('mandatoryFields')}</p>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}
