import { memo } from 'react';

interface ButtonProps {
    text: string,
    isLoading?: boolean,
    onClick: () => void,
}

function PrimaryButton({
    text,
    isLoading = false,
    onClick,
}: ButtonProps) {
    return (
        <button
            className={`${isLoading ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 active:bg-blue-700'} text-white font-normal py-2 px-4 rounded `}
            disabled
            onClick={onClick}>
            {
                isLoading ? 'Loading...' : text
            }
        </button>
    );
}

export default memo(PrimaryButton);
