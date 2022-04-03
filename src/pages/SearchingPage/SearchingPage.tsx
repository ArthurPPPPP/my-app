import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { List } from "../../components/List/List";
import { fetchData } from "../../api/request";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { IUser } from "../../types/types";
import styles from "./searchingPage.module.scss";
import { Loader } from "../../components/Loader/Loader";

export const SearchingPage = () => {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState<IUser | undefined>(undefined);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  let userQuery = searchParams.get("user");

  const navigate = useNavigate();

  const getGitHubUser = async () => {
    if (userQuery !== null) {
      setIsLoading(true);
      try {
        const data = await fetchData(
          `https://api.github.com/users/${userQuery}`
        );
        setUserData(data);
      } catch (e: any) {
        setError(e);
      }
      setIsLoading(false);
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

  const onOpenRepo = () => {
    navigate("/repos", { state: { userData } });
  };

  const isFound = (user: IUser | undefined) => {
    if (userData?.hasOwnProperty("message")) {
      return <h1> User not found !</h1>;
    } else {
      return <List userData={userData} onClickHandler={onOpenRepo} />;
    }
  };

  const renderedComponent = isFound(userData);

  return (
    <main className={styles.mainWrapper}>
      <div className={styles.searchingPage}>
        <SearchInput
          handlerSubmit={handleSubmit}
          inputValue={userQuery}
          button={true}
          placeholder={"Search for Users"}
        />
        {isLoading ? <Loader /> : userData && renderedComponent}
      </div>
    </main>
  );
};
