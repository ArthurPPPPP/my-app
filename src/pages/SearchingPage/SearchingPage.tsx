import React, { FC, useEffect, useState, FormEvent } from "react";
import { fetchUsers } from "../../api/request";
import { Loader } from "../../components/Loader/Loader";

const url = ` https://api.github.com/users`;

export const SearchingPage: FC = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState([]);
  const getUser = async () => {
    setIsloading(true);
    try {
      const data = await fetchUsers(url + `${searchQuery}`);
      setUser(data);
    } catch (e: any) {
      setError(e);
    }
    setIsloading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  const setInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
  };
  console.log(user);
  /*/
  let [userData, setUserData] = useState<any>(null);
  let [searchParams, setSearchParams] = useSearchParams();
  let user = searchParams.get("user");

  let abortController = new AbortController();

  useEffect(() => {
    async function getGitHubUser() {
      let response = await fetch(`https://api.github.com/users/${user}`, {
        headers: {
          Authorization: "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",
        },
        signal: abortController.signal,
      });

      if (!abortController.signal.aborted) {
        let data = await response.json();
        setUserData(data);
      }
    }
    if (user) {
      getGitHubUser();
    }
    return () => {
      abortController.abort();
    };
  }, [user]);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let newUser = formData.get("user") as string;
    if (!newUser) return;
    setSearchParams({ user: newUser });
  }

  console.log(userData);
/*/
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <input type="search" onChange={setInputValue} />
        </div>
      )}
    </div>
  );
};
