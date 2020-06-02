module.exports = {
  name: 'data-access-adjournments',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/data-access-adjournments',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
