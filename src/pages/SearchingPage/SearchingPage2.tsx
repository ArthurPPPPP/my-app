import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { UserList } from "../../components/UserList/UserList";
import { fetchUsers } from "../../api/request";

export const SearchingPage2 = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [reposData, setreposData] = useState<any>(null);

  let userQuery = searchParams.get("user");

  const getGitHubUser = async () => {
    setIsloading(true);
    try {
      const data = await fetchUsers(
        `https://api.github.com/users/${userQuery}`
      );
      setUserData(data);
    } catch (e: any) {
      setError(e);
    }
    setIsloading(false);
  };

  const getReposData = async () => {
    setIsloading(true);
    try {
      const data = await fetchUsers(`${userData.repos_url}`);
      setreposData(data);
    } catch (e: any) {
      setError(e);
    }
    setIsloading(false);
  };

  useEffect(() => {
    getGitHubUser();
  }, [userQuery]);

  useEffect(() => {
    getReposData();
  }, [userData]);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let newUser = formData.get("user") as string;
    if (!newUser) return;
    setSearchParams({ user: newUser });
    console.log("reposData", reposData);
  } 
  return (
    <div>
      <Header handleSubmit={handleSubmit} inputValue={userQuery} />
      {userData && <UserList userData={userData} />}
    </div>
  );
};
