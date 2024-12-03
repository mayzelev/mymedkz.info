import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '../components/Layout/DefaultLayout';
import Form from '../components/Form/Form';

import Agreement from '../components/Agreement/Agreement';
import Success from '../components/Success/Success';

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <DefaultLayout>
                        <Form />
                    </DefaultLayout>
                }
            />
            <Route path="/agreement" element={<Agreement />} />
            <Route path="/success" element={<Success />} />

            <Route path="*" element={<div>Page not found</div>} />
        </Routes>
    );
};

export default AppRoutes;
