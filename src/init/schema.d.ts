export interface Schema {

  /**
   * name of the project
   */
  name: string;

  /**
   * description of the project
   */
  description: string;

  /**
   * url of the repository
   */
  repositoryUrl?: string;

  /**
   * author of the project (name or company)
   */
  author?: string;

  /**
   * contact email of the author
   */
  email?: string;

  /**
   * type of the license
   */
  license?: string;

}
