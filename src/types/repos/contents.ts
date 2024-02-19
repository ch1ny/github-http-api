export type GetRepositoryContentRequest = {
  /**
   * 指定需要查看的 commit/branch/tag
   * @default 仓库的默认分支
   */
  ref?: string;
};
export type GetRepositoryContentResponse = {
  type: 'file';
  encoding: 'base64';
  size: number;
  /**
   * 文件名
   */
  name: string;
  /**
   * 文件路径
   */
  path: string;
  /**
   * base64 加密后的文件内容
   */
  content: string;
  sha: string;
  url: string;
  git_url: string;
  html_url: string;
  download_url: string;
  _links: {
    git: string;
    self: string;
    html: string;
  };
};
