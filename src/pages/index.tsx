import { useState, useCallback } from 'react';
import PrimaryButton from 'src/components/buttons/PrimaryButton';
import PrimaryInput from 'src/components/inputs/PrimaryInput';
import UserSearchData from 'src/interfaces/UserSearchData';
import UserSearchResponse from 'src/interfaces/UserSearchResponse';
import { fetchApi } from 'src/utils/request';

export default function Home() {

  const [username, setUsername] = useState('');
  const [lastSearchedUsername, setLastSearchedUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<UserSearchData[]>([]);

  const onSearchButtonPressed = useCallback(async () => {
    setLastSearchedUsername(username);
    setIsLoading(true);

    const res = await fetchApi<UserSearchResponse>(`https://api.github.com/search/users?per_page=5&q=${username}`);
    setUsers([...res.items]);

    setIsLoading(false);
  }, [username]);

  return (
    <main className='flex min-h-screen p-4'>
      <div className='flex flex-1 flex-col'>
        <PrimaryInput
          id='username'
          placeholderText='Enter username'
          onTextChanged={setUsername} />

        <div className='h-4' />

        <PrimaryButton
          text='Search'
          isLoading={isLoading}
          onClick={onSearchButtonPressed}
        />

        <div className='h-4' />
        {!!lastSearchedUsername && (
          <p>Showing users for "{lastSearchedUsername}"</p>
        )}
      </div>

    </main>
  );
}
