module.exports = {
  name: 'data-access-shared',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/data-access-shared',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
