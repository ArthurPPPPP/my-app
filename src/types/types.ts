export interface IUser {
  avatar_url: string;
  login: string;
  public_repos: string;
  repos_url: string;
  email: string | null;
  created_at: number;
  followers: number;
  following: number;
}

export interface IRepo {
  name: string;
  forks_count: string;
  stargazers_count: string;
  clone_url: string;
}
