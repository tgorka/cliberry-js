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
import {Schema as BaseOptions} from '../base/schema';


const collectionPath = path.join(__dirname, '../collection.json');
const schematicName = 'idea';

describe(schematicName, () => {
  const schematicRunner = new SchematicTestRunner('schematics', collectionPath);
  const defaultOptions: Options = {

  };

  it('should create all files of a project', () => {
    const options = {...defaultOptions};
    const baseOptions: BaseOptions = { name: 'test'};

    const tree = schematicRunner.runSchematic('base', baseOptions);
    schematicRunner.runSchematic(schematicName, options, tree);
    const files = tree.files;
    expect(files.indexOf('/.idea/misc.xml')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/.idea/modules.xml')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/.idea/statistic.xml')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/.idea/vcs.xml')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/.idea/runConfigurations/build.xml')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/.idea/runConfigurations/test.xml')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/.idea/runConfigurations/deploy.xml')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/.idea/runConfigurations/start.xml')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/.idea/runConfigurations/lint.xml')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/test.iml')).toBeGreaterThanOrEqual(0);
  });

});
