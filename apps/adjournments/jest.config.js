module.exports = {
  name: 'adjournments',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/adjournments',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
