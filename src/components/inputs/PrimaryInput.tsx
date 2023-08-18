import { memo, useCallback } from 'react';

interface PrimaryInputProps {
    id: string,
    placeholderText: string,
    onTextChanged: (text: string) => void,
}

function PrimaryInput({
    id,
    placeholderText,
    onTextChanged,
}: PrimaryInputProps) {

    const handleTextChanged = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onTextChanged(event.target.value);
    }, []);

    return (
        <input
            type='text'
            id={id}
            className='bg-gray-200 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 border-solid w-full p-2.5'
            placeholder={placeholderText}
            onChange={handleTextChanged} />
    );
}

export default memo(PrimaryInput);
