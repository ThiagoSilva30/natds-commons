import { buildCssConfig } from './buildCssConfig';

const expectedCssConfig = {
  actions: ['custom_copy_assets'],
  buildPath: 'build/web/',
  files: [
    {
      destination: 'pokemon/pikachu.css',
      filter: 'privateProperties',
      format: 'css/variables',
      options: {
        showFileHeader: false,
      },
    },
    {
      destination: 'spectrum/pokemon/spectrum-pikachu.css',
      filter: 'spectrumProperties',
      format: 'css/variables',
      options: {
        showFileHeader: false,
      },
    },
  ],
  transforms: [
    'attribute/cti',
    'name/cti/camel-custom',
    'color/hex',
    'unit/px',
    'asset/extension',
  ],
};

describe('buildCssConfig', () => {
  it('should return the css config for the given brand and mode', () => {
    const config = buildCssConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedCssConfig);
  });
});
