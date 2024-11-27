import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '../components/Layout/DefaultLayout';
import Form from '../components/Form/Form';

import Agreement from '../components/Agreement/Agreement';

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

            <Route path="*" element={<div>Page not found</div>} />
        </Routes>
    );
};

export default AppRoutes;
