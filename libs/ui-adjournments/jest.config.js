module.exports = {
  name: 'ui-adjournments',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-adjournments',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
