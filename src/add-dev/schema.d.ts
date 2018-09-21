/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry-schematics/LICENSE
 */
export interface Schema {
  
  /**
   * dev package to add on package.json
   */
  package: string;

  /**
   * version of the package to add on package.json
   */
  version: string;
  
}
