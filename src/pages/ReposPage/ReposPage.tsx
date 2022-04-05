import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { fetchData } from "../../api/request";
import { IRepo } from "../../types/types";
import { Loader } from "../../components/Loader/Loader";
import { List } from "../../components/List/List";
import styles from "./reposPage.module.scss";

export const ReposPage = () => {
  const [searchValue, setsearchValue] = useState("");
  const [reposData, setreposData] = useState<IRepo[]>([]);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  const location: any = useLocation();

  const getReposData = async () => {
    try {
      setIsLoading(true);
      const data = await fetchData(location.state.userData.repos_url);
      setreposData(data);
    } catch (e) {
      setError(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getReposData();
  }, []);
  const onChangeHandler = (value: React.ChangeEvent<HTMLInputElement>) => {
    setsearchValue(value.target.value);
  };
  const handlerSearch = (repos: IRepo[]) => {
    return repos.filter((repo: IRepo) => {
      return repo.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  };

  const filteredRepos = handlerSearch(reposData);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.reposPage}>
        <UserInfo userData={location.state.userData} />
        <SearchInput
          onChangeHandler={onChangeHandler}
          handlerSubmit={handlerSubmit}
          button={false}
          placeholder={"Search for User`s repositories"}
        />
        {isLoading ? <Loader /> : <List reposData={filteredRepos} />}
      </div>
    </div>
  );
};
