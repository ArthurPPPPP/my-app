import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { fetchData } from "../../api/request";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { IUser } from "../../types/types";
import styles from "./searchingPage.module.scss";
import { Loader } from "../../components/Loader/Loader";
import { UserItem } from "../../components/Items/UserItem/UserItem";

const url = "https://api.github.com/users";

export const SearchingPage = () => {
  const [error, setError] = useState<unknown>(null);
  const [userData, setUserData] = useState<IUser | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  let userQuery = searchParams.get("user");

  const navigate = useNavigate();

  const getGitHubUser = async () => {
    if (userQuery !== null) {
      setIsLoading(true);
      try {
        const data = await fetchData(`${url}/${userQuery}`);
        setUserData(data);
      } catch (e) {
        setError(e);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGitHubUser();
  }, [searchParams]);

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

  const renderUserList = () => {
    if (userData?.hasOwnProperty("message")) {
      return <h1> User not found !</h1>;
    } else {
      return <UserItem userData={userData} onClickHandler={onOpenRepo} />;
    }
  };
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.searchingPage}>
        <SearchInput
          handlerSubmit={handleSubmit}
          inputValue={userQuery}
          button={true}
          placeholder={"Search for Users"}
        />
        {isLoading ? <Loader /> : userData && renderUserList()}
      </div>
    </div>
  );
};
