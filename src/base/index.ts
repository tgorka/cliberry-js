/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry-schematics/LICENSE
 */
import 'source-map-support/register';
import {
  Rule,
  apply,
  mergeWith,
  template,
  url,
  Tree,
} from '@angular-devkit/schematics';
import {dasherize, classify, camelize} from '@angular-devkit/core/src/utils/strings';
import {Schema as Options} from './schema';
import * as path from 'path';


const stringUtils = {dasherize, classify, camelize};

export const getPackageJson = (tree: Tree): any | null => {
  const packageData = tree.get('/package.json');
  if (!packageData) return null;
  return JSON.parse(packageData.toString());
};

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function base(options: Options): Rule {
  options.repositoryUrl = options.repositoryUrl || '';
  options.description = options.description || '';
  options.license = options.license || 'private';
  options.author = options.author || '';
  options.email = options.email || '';
  return mergeWith(apply(url('file://'+path.join(__dirname, `./files`)), [
    template({
      ...stringUtils,
      ...options,
      'dot': '.',
      'isPrivate': (options.license === 'private') ? 'true' : 'false',
      //latestVersions,
    }),
  ]));
}
