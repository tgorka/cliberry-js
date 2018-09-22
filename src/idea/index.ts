/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry-schematics/LICENSE
 */
import 'source-map-support/register';
import {strings} from '@angular-devkit/core';
import {
  Rule,
  Tree,
  SchematicContext,
  apply,
  mergeWith,
  template,
  url, SchematicsException,
  //chain,
} from '@angular-devkit/schematics';
import {dasherize, classify, camelize} from '@angular-devkit/core/src/utils/strings';
import {Schema as Options} from './schema';
import {getPackageJson} from "../base/index";
import * as path from 'path';


const stringUtils = {dasherize, classify, camelize};
const getName = (tree: Tree): string => {
  const packageJson = getPackageJson(tree);
  if (!packageJson || !packageJson.name) {
    throw new SchematicsException('Javascipt project needs to be set. ' +
      'Missing package.json file or name is missing in this file.');
  }
  return packageJson.name;
};

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function idea(options: Options): Rule {
  return (tree: Tree, _context: SchematicContext): Rule => {
    return mergeWith(apply(url('file://' + path.join(__dirname, `./files`)), [
      template({
        utils: strings,
        ...stringUtils,
        ...options,
        'dot': '.',
        'name': getName(tree),
        //latestVersions,
      })
    ]));
  }
}
