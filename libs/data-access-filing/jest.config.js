module.exports = {
  name: 'data-access-filing',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/data-access-filing',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
