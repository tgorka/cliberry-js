import 'source-map-support/register';
import {
  Rule,
  chain,
  Tree,
  SchematicContext
} from '@angular-devkit/schematics';
import {Schema as Options} from './schema';
import {base} from "../base/index";
import {install} from "../install/index";


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function init(options: Options): Rule {
  return (tree: Tree, context: SchematicContext) => {
    return chain([
      base({
        name: options.name,
        description: options.description,
        author: options.author,
        email: options.email,
        repositoryUrl: options.repositoryUrl,
        license: options.license
      }),
      install(),
    ])(tree, context);
  }
}
