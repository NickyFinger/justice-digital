module.exports = {
  name: 'adjournments',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/adjournments',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
