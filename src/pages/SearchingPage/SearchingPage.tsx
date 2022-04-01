import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { List } from "../../components/List/List";
import { fetchData } from "../../api/request";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { IUser } from "../../types/types";
import styles from "./searchingPage.module.scss";
const url = "https://api.github.com/users";
export const SearchingPage = () => {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState<IUser | undefined>(undefined);
  const [searchParams, setSearchParams] = useSearchParams();

  let userQuery = searchParams.get("user");

  const navigate = useNavigate();

  const getGitHubUser = async () => {
    if (userQuery !== null) {
      try {
        const data = await fetchData(url + `/${userQuery}`);
        setUserData(data);
      } catch (e: any) {
        setError(e);
      }
    }
  };

  useEffect(() => {
    getGitHubUser();
  }, [userQuery]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let newUser = formData.get("user") as string;
    if (!newUser) return;
    setSearchParams({ user: newUser });
  }

  const navigation = () => {
    navigate("/repos", { state: { userData } });
  };
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.searchingPage}>
        <SearchInput
          handleSubmit={handleSubmit}
          inputValue={userQuery}
          button={true}
          placeholder={"Search for Users"}
        />
        {userData && <List userData={userData} onClickHandler={navigation} />}
      </div>
    </main>
  );
};
