/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry-schematics/LICENSE
 */
import 'source-map-support/register';
//import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import {Schema as Options} from './schema';


const collectionPath = path.join(__dirname, '../collection.json');
const schematicName = 'base';

describe(schematicName, () => {
  const schematicRunner = new SchematicTestRunner('schematics', collectionPath);
  const defaultOptions: Options = {
    name: 'test',
    repositoryUrl: 'test',
    license: 'test',
    author: 'test',
    email: 'test',
  };

  it('should create all files of a project', () => {
    const options = {...defaultOptions};

    const tree = schematicRunner.runSchematic(schematicName, options);
    const files = tree.files;
    expect(files.indexOf('/package.json')).toBeGreaterThanOrEqual(0);
  });

});
