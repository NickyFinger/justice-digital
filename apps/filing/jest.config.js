module.exports = {
  name: 'filing',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/filing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
