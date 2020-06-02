module.exports = {
  name: 'filing',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/filing',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
