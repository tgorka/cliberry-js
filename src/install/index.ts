/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry-schematics/LICENSE
 */
import 'source-map-support/register';
import {NodePackageInstallTask/*, NodePackageLinkTask*/} from '@angular-devkit/schematics/tasks';
import {
  Rule,
  Tree,
  SchematicContext
} from '@angular-devkit/schematics';
import {Schema as Options} from './schema';


const removeNpm = (tree: Tree): void => {
  if (tree.exists('/package-lock.json')) tree.delete('/package-lock.json');
};

const yarnInstall = (context: SchematicContext): void => {
  context.addTask(new NodePackageInstallTask({
    quiet: false,
    packageManager: 'yarn',
    workingDirectory: '.',
  }));
};

/*const yarnLink = (context: SchematicContext): void => {
  context.addTask(new NodePackageLinkTask('yarn', '.'));
};*/

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function install(_options: Options = {}): Rule {
  return (tree: Tree, context: SchematicContext): Rule | Tree => {
    removeNpm(tree);
    yarnInstall(context);
    //yarnLink(context);
    return tree;
  };
}
