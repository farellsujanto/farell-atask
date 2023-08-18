import { memo, useState, useCallback, useEffect } from 'react';
import ChevronDown from 'src/icons/ChevronDown';
import ChevronUp from 'src/icons/ChevronUp';
import StarFilled from 'src/icons/StarFilled';
import RepoData from 'src/interfaces/RepoData';
import { fetchApi } from 'src/utils/request';

interface UserAccordionProps {
    username: string,
    repoUrl?: string,
}

function UserAccordion({
    username,
    repoUrl,
}: UserAccordionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [repoDatas, setRepoDatas] = useState<RepoData[]>([]);

    useEffect(function openListener() {
        if (isOpen && repoUrl && !repoDatas.length) {
            fetchRepoDatas();
        }
    }, [
        isOpen,
        repoUrl,
        repoDatas,
    ]);

    const fetchRepoDatas = useCallback(async () => {
        if (repoUrl) {
            try {
                setIsLoading(true);
                const repoDatas = await fetchApi<RepoData[]>(repoUrl);
                setRepoDatas([...repoDatas]);
            } catch (e) {
                window.alert(e);
                throw `Error when fetching API: ${e}`;
            }
            setIsLoading(false);
        }
    }, [repoUrl]);

    const toggleOpenState = useCallback(() => {
        setIsOpen(isOpen => !isOpen);
    }, []);

    return (
        <>
            <button
                className='p-3 bg-gray-200 font-bold mb-4 rounded text-lg'
                onClick={toggleOpenState}>
                <div className='flex flex-row'>
                    <div className='flex-1 text-left'>
                        {username}
                    </div>
                    <div>
                        {isOpen ? (
                            <ChevronUp />
                        ) : (
                            <ChevronDown />
                        )}
                    </div>
                </div>
            </button>

            {isOpen && (
                <div>
                    {isLoading ? (
                        'Loading...'
                    ) : repoDatas?.map((repoData) => {
                        return (
                            <div className='pt-5 pb-5 pl-3 pr-3 bg-gray-200 rounded mb-4 ml-4'>
                                <div className='flex flex-row justify-start font-bold text-xl'>
                                    <h2 className='flex-1 text-left'>{repoData.name}</h2>
                                    <h2 className='mr-2'>{repoData.stargazers_count}</h2>
                                    <StarFilled />
                                </div>
                                <p className='mt-1'>
                                    {repoData.description ?? 'No Description'}
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </>

    );
}

export default memo(UserAccordion);