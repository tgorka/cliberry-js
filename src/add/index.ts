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
  Tree,
  SchematicContext,
} from '@angular-devkit/schematics';
import {Schema as Options} from './schema';
import {
  addPackageJsonDependency,
  NodeDependencyType
} from "@schematics/angular/utility/dependencies";


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function add(options: Options): Rule {
  return (tree: Tree, _context: SchematicContext): Rule | Tree => {
    addPackageJsonDependency(tree, {
      type: NodeDependencyType.Default,
      name: options.package,
      version: options.version,
      overwrite: true,
    });
    return tree;
  }
}
