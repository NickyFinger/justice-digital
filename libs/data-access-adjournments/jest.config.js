module.exports = {
  name: 'data-access-adjournments',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/data-access-adjournments',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
