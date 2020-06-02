module.exports = {
  name: 'data-access-filing',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/data-access-filing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
