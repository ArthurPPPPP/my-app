import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { List } from "../../components/List/List";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { fetchData } from "../../api/request";
import { IRepo } from "../../types/types";
export const ReposPage = () => {
  const [searchValue, setsearchValue] = useState("");
  const [reposData, setreposData] = useState<IRepo[]>([]);

  const location: any = useLocation();

  const getReposData = async () => {
    try {
      const data = await fetchData(`${location.state.userData.repos_url}`);
      setreposData(data);
    } catch (e: any) {}
  };

  useEffect(() => {
    getReposData();
  }, []);
  const searchHandler = (value: React.ChangeEvent<HTMLInputElement>) => {
    setsearchValue(value.target.value);
  };
  function filter() {
    let filteredRepos: IRepo[] = [];
    if (reposData) {
      filteredRepos = reposData.filter((repo: any) => {
        return repo.name.toLowerCase().includes(searchValue.toLowerCase());
      });
    }
    return filteredRepos;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  console.log("RRRRR", reposData);
  return (
    <div>
      <UserInfo userData={location.state.userData} />
      <SearchInput
        onChangeHandler={searchHandler}
        handleSubmit={handleSubmit}
        button={false}
        placeholder={"Search for User`s repositories"}
      />
      <List reposData={filter()} />
    </div>
  );
};
