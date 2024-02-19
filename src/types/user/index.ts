export type GetTheAuthenticatedUserRequest = any;
export type GetTheAuthenticatedUserResponse = {
  /**
   * @example 'octocat'
   */
  login: string;
  id: number;
  node_id: string;
  /**
   * @example 'https://github.com/images/error/octocat_happy.gif'
   */
  avatar_url: string;
  /**
   * @example ''
   */
  gravatar_id: string;
  /**
   * @example 'https://api.github.com/users/octocat'
   */
  url: string;
  /**
   * @example 'https://github.com/octocat'
   */
  html_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/followers'
   */
  followers_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/following{/other_user}'
   */
  following_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/gists{/gist_id}'
   */
  gists_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/starred{/owner}{/repo}'
   */
  starred_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/subscriptions'
   */
  subscriptions_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/orgs'
   */
  organizations_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/repos'
   */
  repos_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/events{/privacy}'
   */
  events_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/received_events'
   */
  received_events_url: string;
  type: 'User';
  site_admin: boolean;
  /**
   * @example 'Github Octocat'
   */
  name: string;
  /**
   * @example 'GitHub'
   */
  company: string;
  /**
   * @example 'https://github.com/blog'
   */
  blog: string;
  /**
   * @example 'San Francisco'
   */
  location: string;
  /**
   * @example 'octocat@github.com'
   */
  email: string;
  hireable: boolean;
  /**
   * @example 'There once was...'
   */
  bio: string;
  /**
   * 'github-octocat'
   */
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  /**
   * @example '2008-01-14T04:33:35Z'
   */
  created_at: string;
  /**
   * @example '2008-01-14T04:33:35Z'
   */
  updated_at: string;
  private_gists: number;
  total_private_repos: number;
  owned_private_repos: number;
  disk_usage: number;
  collaborators: number;
  two_factor_authentication: boolean;
  plan: {
    name: 'Medium';
    space: number;
    private_repos: number;
    collaborators: number;
  };
};

export type UpdateTheAuthenticatedUserRequest = {
  name: string;
  email: string;
  blog: string;
  twitter_username: string | null;
  company: string;
  location: string;
  hireable: boolean;
  bio: string;
};
export type UpdateTheAuthenticatedUserResponse = GetTheAuthenticatedUserResponse;

export type GetCertainUserRequest = any;
export type GetCertainUserResponse = {
  /**
   * @example 'octocat'
   */
  login: string;
  id: number;
  node_id: string;
  /**
   * @example 'https://github.com/images/error/octocat_happy.gif'
   */
  avatar_url: string;
  /**
   * @example ''
   */
  gravatar_id: string;
  /**
   * @example 'https://api.github.com/users/octocat'
   */
  url: string;
  /**
   * @example 'https://github.com/octocat'
   */
  html_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/followers'
   */
  followers_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/following{/other_user}'
   */
  following_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/gists{/gist_id}'
   */
  gists_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/starred{/owner}{/repo}'
   */
  starred_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/subscriptions'
   */
  subscriptions_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/orgs'
   */
  organizations_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/repos'
   */
  repos_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/events{/privacy}'
   */
  events_url: string;
  /**
   * @example 'https://api.github.com/users/octocat/received_events'
   */
  received_events_url: string;
  type: 'User';
  site_admin: boolean;
  /**
   * @example 'Github Octocat'
   */
  name: string;
  /**
   * @example 'GitHub'
   */
  company: string;
  /**
   * @example 'https://github.com/blog'
   */
  blog: string;
  /**
   * @example 'San Francisco'
   */
  location: string;
  /**
   * @example 'octocat@github.com'
   */
  email: string;
  hireable: boolean;
  /**
   * @example 'There once was...'
   */
  bio: string;
  /**
   * 'github-octocat'
   */
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  /**
   * @example '2008-01-14T04:33:35Z'
   */
  created_at: string;
  /**
   * @example '2008-01-14T04:33:35Z'
   */
  updated_at: string;
};

export type ListTheAuthenticatedUserSshKeysRequest = {
  /**
   * @default 30
   */
  per_page?: number;
  /**
   * @default 1
   */
  page?: number;
};
export type ListTheAuthenticatedUserSshKeysResponse = {
  key: string;
  id: number;
  url: string;
  title: string;
  /**
   * @example "2020-06-11T21:31:57Z"
   */
  created_at: string;
  verified: boolean;
  read_only: boolean;
}[];
