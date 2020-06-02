module.exports = {
  name: 'ui-adjournments',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-adjournments',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
