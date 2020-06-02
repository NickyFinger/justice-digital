module.exports = {
  name: 'ui-filing',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-filing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
