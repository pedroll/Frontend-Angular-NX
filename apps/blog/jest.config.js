module.exports = {
  name: 'blog',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/blog',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
