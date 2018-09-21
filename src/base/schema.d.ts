/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry-schematics/LICENSE
 */
export interface Schema {
  
  /**
   * name of the project
   */
  name: string;
  
  /**
   * url of the repository
   */
  repositoryUrl: string;
  
  /**
   * type of the license
   */
  license: string;
  
}
