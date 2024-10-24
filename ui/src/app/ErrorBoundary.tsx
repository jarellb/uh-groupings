'use client';
import ApiErrorModal from '@/components/modal/api-error-modal';

const ErrorBoundary = () => {
    return (
        <>
            <ApiErrorModal open={true} />
        </>
    );
};

export default ErrorBoundary;
