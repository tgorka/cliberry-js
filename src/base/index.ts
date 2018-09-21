/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry-schematics/LICENSE
 */
import 'source-map-support/register';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';
import {
  Rule,
  Tree,
  SchematicContext
  //apply,
  //mergeWith,
  //template,
  //url,
  //chain,
} from '@angular-devkit/schematics';
//import {dasherize, classify, camelize} from '@angular-devkit/core/src/utils/strings';
import {Schema as Options} from './schema';


//const stringUtils = {dasherize, classify, camelize};

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function base(_options: Options): Rule {
  return (tree: Tree, context: SchematicContext): Rule | Tree => {
    context.addTask(new NodePackageInstallTask());
    return tree;
    // return chain[example({name: options.name})]
  };
  /*return mergeWith(apply(url('./files'), [
    template({
      utils: strings,
      ...stringUtils,
      ...options,
      'dot': '.',
      //latestVersions,
    }),
  ]));*/
}
